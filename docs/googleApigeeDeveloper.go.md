# `googleApigeeDeveloper` Submodule <a name="`googleApigeeDeveloper` Submodule" id="@cdktf/provider-google-beta.googleApigeeDeveloper"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeDeveloper <a name="GoogleApigeeDeveloper" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer google_apigee_developer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeedeveloper"

googleapigeedeveloper.NewGoogleApigeeDeveloper(scope Construct, id *string, config GoogleApigeeDeveloperConfig) GoogleApigeeDeveloper
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig">GoogleApigeeDeveloperConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig">GoogleApigeeDeveloperConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributes` <a name="PutAttributes" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.putAttributes"></a>

```go
func PutAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.putAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.putTimeouts"></a>

```go
func PutTimeouts(value GoogleApigeeDeveloperTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeouts">GoogleApigeeDeveloperTimeouts</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeDeveloper resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeedeveloper"

googleapigeedeveloper.GoogleApigeeDeveloper_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeedeveloper"

googleapigeedeveloper.GoogleApigeeDeveloper_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeedeveloper"

googleapigeedeveloper.GoogleApigeeDeveloper_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeedeveloper"

googleapigeedeveloper.GoogleApigeeDeveloper_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleApigeeDeveloper resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleApigeeDeveloper to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleApigeeDeveloper that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeDeveloper to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList">GoogleApigeeDeveloperAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.lastModifiedAt">LastModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.organizatioName">OrganizatioName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference">GoogleApigeeDeveloperTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.attributesInput">AttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.attributes"></a>

```go
func Attributes() GoogleApigeeDeveloperAttributesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList">GoogleApigeeDeveloperAttributesList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `LastModifiedAt`<sup>Required</sup> <a name="LastModifiedAt" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.lastModifiedAt"></a>

```go
func LastModifiedAt() *string
```

- *Type:* *string

---

##### `OrganizatioName`<sup>Required</sup> <a name="OrganizatioName" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.organizatioName"></a>

```go
func OrganizatioName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.timeouts"></a>

```go
func Timeouts() GoogleApigeeDeveloperTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference">GoogleApigeeDeveloperTimeoutsOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.attributesInput"></a>

```go
func AttributesInput() interface{}
```

- *Type:* interface{}

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloper.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeDeveloperAttributes <a name="GoogleApigeeDeveloperAttributes" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeedeveloper"

&googleapigeedeveloper.GoogleApigeeDeveloperAttributes {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributes.property.name">Name</a></code> | <code>*string</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributes.property.value">Value</a></code> | <code>*string</code> | Value of the attribute. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer#name GoogleApigeeDeveloper#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributes.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer#value GoogleApigeeDeveloper#value}

---

### GoogleApigeeDeveloperConfig <a name="GoogleApigeeDeveloperConfig" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeedeveloper"

&googleapigeedeveloper.GoogleApigeeDeveloperConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Email: *string,
	FirstName: *string,
	LastName: *string,
	OrgId: *string,
	UserName: *string,
	Attributes: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleApigeeDeveloper.GoogleApigeeDeveloperTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.email">Email</a></code> | <code>*string</code> | Email address of the developer. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.firstName">FirstName</a></code> | <code>*string</code> | First name of the developer. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.lastName">LastName</a></code> | <code>*string</code> | Last name of the developer. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.orgId">OrgId</a></code> | <code>*string</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.userName">UserName</a></code> | <code>*string</code> | User name of the developer. Not used by Apigee hybrid. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.attributes">Attributes</a></code> | <code>interface{}</code> | attributes block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer#id GoogleApigeeDeveloper#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeouts">GoogleApigeeDeveloperTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

Email address of the developer.

This value is used to uniquely identify the developer in Apigee hybrid. Note that the email address has to be in lowercase only..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer#email GoogleApigeeDeveloper#email}

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

First name of the developer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer#first_name GoogleApigeeDeveloper#first_name}

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Last name of the developer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer#last_name GoogleApigeeDeveloper#last_name}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer#org_id GoogleApigeeDeveloper#org_id}

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

User name of the developer. Not used by Apigee hybrid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer#user_name GoogleApigeeDeveloper#user_name}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.attributes"></a>

```go
Attributes interface{}
```

- *Type:* interface{}

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer#attributes GoogleApigeeDeveloper#attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer#id GoogleApigeeDeveloper#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperConfig.property.timeouts"></a>

```go
Timeouts GoogleApigeeDeveloperTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeouts">GoogleApigeeDeveloperTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer#timeouts GoogleApigeeDeveloper#timeouts}

---

### GoogleApigeeDeveloperTimeouts <a name="GoogleApigeeDeveloperTimeouts" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeedeveloper"

&googleapigeedeveloper.GoogleApigeeDeveloperTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer#create GoogleApigeeDeveloper#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer#delete GoogleApigeeDeveloper#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer#update GoogleApigeeDeveloper#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer#create GoogleApigeeDeveloper#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer#delete GoogleApigeeDeveloper#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_developer#update GoogleApigeeDeveloper#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeDeveloperAttributesList <a name="GoogleApigeeDeveloperAttributesList" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeedeveloper"

googleapigeedeveloper.NewGoogleApigeeDeveloperAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleApigeeDeveloperAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.get"></a>

```go
func Get(index *f64) GoogleApigeeDeveloperAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleApigeeDeveloperAttributesOutputReference <a name="GoogleApigeeDeveloperAttributesOutputReference" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeedeveloper"

googleapigeedeveloper.NewGoogleApigeeDeveloperAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleApigeeDeveloperAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleApigeeDeveloperTimeoutsOutputReference <a name="GoogleApigeeDeveloperTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeedeveloper"

googleapigeedeveloper.NewGoogleApigeeDeveloperTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeDeveloperTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeDeveloper.GoogleApigeeDeveloperTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



