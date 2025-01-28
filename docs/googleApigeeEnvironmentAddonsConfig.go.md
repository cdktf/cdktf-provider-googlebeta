# `googleApigeeEnvironmentAddonsConfig` Submodule <a name="`googleApigeeEnvironmentAddonsConfig` Submodule" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeEnvironmentAddonsConfig <a name="GoogleApigeeEnvironmentAddonsConfig" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_environment_addons_config google_apigee_environment_addons_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeenvironmentaddonsconfig"

googleapigeeenvironmentaddonsconfig.NewGoogleApigeeEnvironmentAddonsConfig(scope Construct, id *string, config GoogleApigeeEnvironmentAddonsConfigConfig) GoogleApigeeEnvironmentAddonsConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig">GoogleApigeeEnvironmentAddonsConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig">GoogleApigeeEnvironmentAddonsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.resetAnalyticsEnabled">ResetAnalyticsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleApigeeEnvironmentAddonsConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts">GoogleApigeeEnvironmentAddonsConfigTimeouts</a>

---

##### `ResetAnalyticsEnabled` <a name="ResetAnalyticsEnabled" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.resetAnalyticsEnabled"></a>

```go
func ResetAnalyticsEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeEnvironmentAddonsConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeenvironmentaddonsconfig"

googleapigeeenvironmentaddonsconfig.GoogleApigeeEnvironmentAddonsConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeenvironmentaddonsconfig"

googleapigeeenvironmentaddonsconfig.GoogleApigeeEnvironmentAddonsConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeenvironmentaddonsconfig"

googleapigeeenvironmentaddonsconfig.GoogleApigeeEnvironmentAddonsConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeenvironmentaddonsconfig"

googleapigeeenvironmentaddonsconfig.GoogleApigeeEnvironmentAddonsConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleApigeeEnvironmentAddonsConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleApigeeEnvironmentAddonsConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleApigeeEnvironmentAddonsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_environment_addons_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeEnvironmentAddonsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference">GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.analyticsEnabledInput">AnalyticsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.envIdInput">EnvIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.analyticsEnabled">AnalyticsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.envId">EnvId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.timeouts"></a>

```go
func Timeouts() GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference">GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference</a>

---

##### `AnalyticsEnabledInput`<sup>Optional</sup> <a name="AnalyticsEnabledInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.analyticsEnabledInput"></a>

```go
func AnalyticsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnvIdInput`<sup>Optional</sup> <a name="EnvIdInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.envIdInput"></a>

```go
func EnvIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AnalyticsEnabled`<sup>Required</sup> <a name="AnalyticsEnabled" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.analyticsEnabled"></a>

```go
func AnalyticsEnabled() interface{}
```

- *Type:* interface{}

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.envId"></a>

```go
func EnvId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeEnvironmentAddonsConfigConfig <a name="GoogleApigeeEnvironmentAddonsConfigConfig" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeenvironmentaddonsconfig"

&googleapigeeenvironmentaddonsconfig.GoogleApigeeEnvironmentAddonsConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnvId: *string,
	AnalyticsEnabled: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.envId">EnvId</a></code> | <code>*string</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.analyticsEnabled">AnalyticsEnabled</a></code> | <code>interface{}</code> | Flag to enable/disable Analytics. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_environment_addons_config#id GoogleApigeeEnvironmentAddonsConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts">GoogleApigeeEnvironmentAddonsConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.envId"></a>

```go
EnvId *string
```

- *Type:* *string

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_environment_addons_config#env_id GoogleApigeeEnvironmentAddonsConfig#env_id}

---

##### `AnalyticsEnabled`<sup>Optional</sup> <a name="AnalyticsEnabled" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.analyticsEnabled"></a>

```go
AnalyticsEnabled interface{}
```

- *Type:* interface{}

Flag to enable/disable Analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_environment_addons_config#analytics_enabled GoogleApigeeEnvironmentAddonsConfig#analytics_enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_environment_addons_config#id GoogleApigeeEnvironmentAddonsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleApigeeEnvironmentAddonsConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts">GoogleApigeeEnvironmentAddonsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_environment_addons_config#timeouts GoogleApigeeEnvironmentAddonsConfig#timeouts}

---

### GoogleApigeeEnvironmentAddonsConfigTimeouts <a name="GoogleApigeeEnvironmentAddonsConfigTimeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeenvironmentaddonsconfig"

&googleapigeeenvironmentaddonsconfig.GoogleApigeeEnvironmentAddonsConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_environment_addons_config#create GoogleApigeeEnvironmentAddonsConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_environment_addons_config#delete GoogleApigeeEnvironmentAddonsConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_environment_addons_config#update GoogleApigeeEnvironmentAddonsConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_environment_addons_config#create GoogleApigeeEnvironmentAddonsConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_environment_addons_config#delete GoogleApigeeEnvironmentAddonsConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_environment_addons_config#update GoogleApigeeEnvironmentAddonsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference <a name="GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeenvironmentaddonsconfig"

googleapigeeenvironmentaddonsconfig.NewGoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



