# `googleIdentityPlatformProjectDefaultConfig` Submodule <a name="`googleIdentityPlatformProjectDefaultConfig` Submodule" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformProjectDefaultConfig <a name="GoogleIdentityPlatformProjectDefaultConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config google_identity_platform_project_default_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

googleidentityplatformprojectdefaultconfig.NewGoogleIdentityPlatformProjectDefaultConfig(scope Construct, id *string, config GoogleIdentityPlatformProjectDefaultConfigConfig) GoogleIdentityPlatformProjectDefaultConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig">GoogleIdentityPlatformProjectDefaultConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig">GoogleIdentityPlatformProjectDefaultConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putSignIn">PutSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetSignIn">ResetSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSignIn` <a name="PutSignIn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putSignIn"></a>

```go
func PutSignIn(value GoogleIdentityPlatformProjectDefaultConfigSignIn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putSignIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleIdentityPlatformProjectDefaultConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts">GoogleIdentityPlatformProjectDefaultConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSignIn` <a name="ResetSignIn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetSignIn"></a>

```go
func ResetSignIn()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIdentityPlatformProjectDefaultConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

googleidentityplatformprojectdefaultconfig.GoogleIdentityPlatformProjectDefaultConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

googleidentityplatformprojectdefaultconfig.GoogleIdentityPlatformProjectDefaultConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

googleidentityplatformprojectdefaultconfig.GoogleIdentityPlatformProjectDefaultConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

googleidentityplatformprojectdefaultconfig.GoogleIdentityPlatformProjectDefaultConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleIdentityPlatformProjectDefaultConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIdentityPlatformProjectDefaultConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIdentityPlatformProjectDefaultConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIdentityPlatformProjectDefaultConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.signIn">SignIn</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference">GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.signInInput">SignInInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignIn`<sup>Required</sup> <a name="SignIn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.signIn"></a>

```go
func SignIn() GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.timeouts"></a>

```go
func Timeouts() GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference">GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SignInInput`<sup>Optional</sup> <a name="SignInInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.signInInput"></a>

```go
func SignInInput() GoogleIdentityPlatformProjectDefaultConfigSignIn
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformProjectDefaultConfigConfig <a name="GoogleIdentityPlatformProjectDefaultConfigConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

&googleidentityplatformprojectdefaultconfig.GoogleIdentityPlatformProjectDefaultConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Project: *string,
	SignIn: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#id GoogleIdentityPlatformProjectDefaultConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#project GoogleIdentityPlatformProjectDefaultConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.signIn">SignIn</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts">GoogleIdentityPlatformProjectDefaultConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#id GoogleIdentityPlatformProjectDefaultConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#project GoogleIdentityPlatformProjectDefaultConfig#project}.

---

##### `SignIn`<sup>Optional</sup> <a name="SignIn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.signIn"></a>

```go
SignIn GoogleIdentityPlatformProjectDefaultConfigSignIn
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#sign_in GoogleIdentityPlatformProjectDefaultConfig#sign_in}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleIdentityPlatformProjectDefaultConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts">GoogleIdentityPlatformProjectDefaultConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#timeouts GoogleIdentityPlatformProjectDefaultConfig#timeouts}

---

### GoogleIdentityPlatformProjectDefaultConfigSignIn <a name="GoogleIdentityPlatformProjectDefaultConfigSignIn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

&googleidentityplatformprojectdefaultconfig.GoogleIdentityPlatformProjectDefaultConfigSignIn {
	AllowDuplicateEmails: interface{},
	Anonymous: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous,
	Email: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail,
	PhoneNumber: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.allowDuplicateEmails">AllowDuplicateEmails</a></code> | <code>interface{}</code> | Whether to allow more than one account to have the same email. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.anonymous">Anonymous</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | anonymous block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.email">Email</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a></code> | email block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.phoneNumber">PhoneNumber</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | phone_number block. |

---

##### `AllowDuplicateEmails`<sup>Optional</sup> <a name="AllowDuplicateEmails" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.allowDuplicateEmails"></a>

```go
AllowDuplicateEmails interface{}
```

- *Type:* interface{}

Whether to allow more than one account to have the same email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#allow_duplicate_emails GoogleIdentityPlatformProjectDefaultConfig#allow_duplicate_emails}

---

##### `Anonymous`<sup>Optional</sup> <a name="Anonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.anonymous"></a>

```go
Anonymous GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a>

anonymous block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#anonymous GoogleIdentityPlatformProjectDefaultConfig#anonymous}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.email"></a>

```go
Email GoogleIdentityPlatformProjectDefaultConfigSignInEmail
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#email GoogleIdentityPlatformProjectDefaultConfig#email}

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.phoneNumber"></a>

```go
PhoneNumber GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

phone_number block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#phone_number GoogleIdentityPlatformProjectDefaultConfig#phone_number}

---

### GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous <a name="GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

&googleidentityplatformprojectdefaultconfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether anonymous user auth is enabled for the project or not. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether anonymous user auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#enabled GoogleIdentityPlatformProjectDefaultConfig#enabled}

---

### GoogleIdentityPlatformProjectDefaultConfigSignInEmail <a name="GoogleIdentityPlatformProjectDefaultConfigSignInEmail" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

&googleidentityplatformprojectdefaultconfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail {
	Enabled: interface{},
	PasswordRequired: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether email auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail.property.passwordRequired">PasswordRequired</a></code> | <code>interface{}</code> | Whether a password is required for email auth or not. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether email auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#enabled GoogleIdentityPlatformProjectDefaultConfig#enabled}

---

##### `PasswordRequired`<sup>Optional</sup> <a name="PasswordRequired" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail.property.passwordRequired"></a>

```go
PasswordRequired interface{}
```

- *Type:* interface{}

Whether a password is required for email auth or not.

If true, both an email and
password must be provided to sign in. If false, a user may sign in via either
email/password or email link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#password_required GoogleIdentityPlatformProjectDefaultConfig#password_required}

---

### GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig <a name="GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

&googleidentityplatformprojectdefaultconfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig {

}
```


### GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber <a name="GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

&googleidentityplatformprojectdefaultconfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber {
	Enabled: interface{},
	TestPhoneNumbers: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether phone number auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.testPhoneNumbers">TestPhoneNumbers</a></code> | <code>*map[string]*string</code> | A map of <test phone number, fake code> that can be used for phone auth testing. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether phone number auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#enabled GoogleIdentityPlatformProjectDefaultConfig#enabled}

---

##### `TestPhoneNumbers`<sup>Optional</sup> <a name="TestPhoneNumbers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.testPhoneNumbers"></a>

```go
TestPhoneNumbers *map[string]*string
```

- *Type:* *map[string]*string

A map of <test phone number, fake code> that can be used for phone auth testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#test_phone_numbers GoogleIdentityPlatformProjectDefaultConfig#test_phone_numbers}

---

### GoogleIdentityPlatformProjectDefaultConfigTimeouts <a name="GoogleIdentityPlatformProjectDefaultConfigTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

&googleidentityplatformprojectdefaultconfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#create GoogleIdentityPlatformProjectDefaultConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#delete GoogleIdentityPlatformProjectDefaultConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#update GoogleIdentityPlatformProjectDefaultConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#create GoogleIdentityPlatformProjectDefaultConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#delete GoogleIdentityPlatformProjectDefaultConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.22.0/docs/resources/google_identity_platform_project_default_config#update GoogleIdentityPlatformProjectDefaultConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference <a name="GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

googleidentityplatformprojectdefaultconfig.NewGoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---


### GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference <a name="GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

googleidentityplatformprojectdefaultconfig.NewGoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetPasswordRequired">ResetPasswordRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetPasswordRequired` <a name="ResetPasswordRequired" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetPasswordRequired"></a>

```go
func ResetPasswordRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequiredInput">PasswordRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequired">PasswordRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordRequiredInput`<sup>Optional</sup> <a name="PasswordRequiredInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequiredInput"></a>

```go
func PasswordRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `PasswordRequired`<sup>Required</sup> <a name="PasswordRequired" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequired"></a>

```go
func PasswordRequired() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIdentityPlatformProjectDefaultConfigSignInEmail
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a>

---


### GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList <a name="GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

googleidentityplatformprojectdefaultconfig.NewGoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.get"></a>

```go
func Get(index *f64) GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference <a name="GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

googleidentityplatformprojectdefaultconfig.NewGoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.memoryCost">MemoryCost</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.rounds">Rounds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.saltSeparator">SaltSeparator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.signerKey">SignerKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig">GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `MemoryCost`<sup>Required</sup> <a name="MemoryCost" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.memoryCost"></a>

```go
func MemoryCost() *f64
```

- *Type:* *f64

---

##### `Rounds`<sup>Required</sup> <a name="Rounds" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.rounds"></a>

```go
func Rounds() *f64
```

- *Type:* *f64

---

##### `SaltSeparator`<sup>Required</sup> <a name="SaltSeparator" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.saltSeparator"></a>

```go
func SaltSeparator() *string
```

- *Type:* *string

---

##### `SignerKey`<sup>Required</sup> <a name="SignerKey" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.signerKey"></a>

```go
func SignerKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig">GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig</a>

---


### GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference <a name="GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

googleidentityplatformprojectdefaultconfig.NewGoogleIdentityPlatformProjectDefaultConfigSignInOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous">PutAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail">PutEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber">PutPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetAllowDuplicateEmails">ResetAllowDuplicateEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetAnonymous">ResetAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnonymous` <a name="PutAnonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous"></a>

```go
func PutAnonymous(value GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---

##### `PutEmail` <a name="PutEmail" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail"></a>

```go
func PutEmail(value GoogleIdentityPlatformProjectDefaultConfigSignInEmail)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a>

---

##### `PutPhoneNumber` <a name="PutPhoneNumber" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber"></a>

```go
func PutPhoneNumber(value GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---

##### `ResetAllowDuplicateEmails` <a name="ResetAllowDuplicateEmails" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetAllowDuplicateEmails"></a>

```go
func ResetAllowDuplicateEmails()
```

##### `ResetAnonymous` <a name="ResetAnonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetAnonymous"></a>

```go
func ResetAnonymous()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymous">Anonymous</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.email">Email</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.hashConfig">HashConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList">GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmailsInput">AllowDuplicateEmailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymousInput">AnonymousInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.emailInput">EmailInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmails">AllowDuplicateEmails</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Anonymous`<sup>Required</sup> <a name="Anonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymous"></a>

```go
func Anonymous() GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference</a>

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.email"></a>

```go
func Email() GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference</a>

---

##### `HashConfig`<sup>Required</sup> <a name="HashConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.hashConfig"></a>

```go
func HashConfig() GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList">GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList</a>

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference</a>

---

##### `AllowDuplicateEmailsInput`<sup>Optional</sup> <a name="AllowDuplicateEmailsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmailsInput"></a>

```go
func AllowDuplicateEmailsInput() interface{}
```

- *Type:* interface{}

---

##### `AnonymousInput`<sup>Optional</sup> <a name="AnonymousInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymousInput"></a>

```go
func AnonymousInput() GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.emailInput"></a>

```go
func EmailInput() GoogleIdentityPlatformProjectDefaultConfigSignInEmail
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a>

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---

##### `AllowDuplicateEmails`<sup>Required</sup> <a name="AllowDuplicateEmails" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmails"></a>

```go
func AllowDuplicateEmails() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIdentityPlatformProjectDefaultConfigSignIn
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a>

---


### GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference <a name="GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

googleidentityplatformprojectdefaultconfig.NewGoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers">ResetTestPhoneNumbers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetTestPhoneNumbers` <a name="ResetTestPhoneNumbers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers"></a>

```go
func ResetTestPhoneNumbers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput">TestPhoneNumbersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers">TestPhoneNumbers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TestPhoneNumbersInput`<sup>Optional</sup> <a name="TestPhoneNumbersInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput"></a>

```go
func TestPhoneNumbersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `TestPhoneNumbers`<sup>Required</sup> <a name="TestPhoneNumbers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers"></a>

```go
func TestPhoneNumbers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---


### GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference <a name="GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformprojectdefaultconfig"

googleidentityplatformprojectdefaultconfig.NewGoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



