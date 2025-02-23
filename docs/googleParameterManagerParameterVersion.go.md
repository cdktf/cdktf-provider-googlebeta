# `googleParameterManagerParameterVersion` Submodule <a name="`googleParameterManagerParameterVersion` Submodule" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleParameterManagerParameterVersion <a name="GoogleParameterManagerParameterVersion" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_parameter_manager_parameter_version google_parameter_manager_parameter_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleparametermanagerparameterversion"

googleparametermanagerparameterversion.NewGoogleParameterManagerParameterVersion(scope Construct, id *string, config GoogleParameterManagerParameterVersionConfig) GoogleParameterManagerParameterVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig">GoogleParameterManagerParameterVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig">GoogleParameterManagerParameterVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.putTimeouts"></a>

```go
func PutTimeouts(value GoogleParameterManagerParameterVersionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts">GoogleParameterManagerParameterVersionTimeouts</a>

---

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleParameterManagerParameterVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleparametermanagerparameterversion"

googleparametermanagerparameterversion.GoogleParameterManagerParameterVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleparametermanagerparameterversion"

googleparametermanagerparameterversion.GoogleParameterManagerParameterVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleparametermanagerparameterversion"

googleparametermanagerparameterversion.GoogleParameterManagerParameterVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleparametermanagerparameterversion"

googleparametermanagerparameterversion.GoogleParameterManagerParameterVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleParameterManagerParameterVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleParameterManagerParameterVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleParameterManagerParameterVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_parameter_manager_parameter_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleParameterManagerParameterVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference">GoogleParameterManagerParameterVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterDataInput">ParameterDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterInput">ParameterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterVersionIdInput">ParameterVersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameter">Parameter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterData">ParameterData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterVersionId">ParameterVersionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.timeouts"></a>

```go
func Timeouts() GoogleParameterManagerParameterVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference">GoogleParameterManagerParameterVersionTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParameterDataInput`<sup>Optional</sup> <a name="ParameterDataInput" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterDataInput"></a>

```go
func ParameterDataInput() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterInput"></a>

```go
func ParameterInput() *string
```

- *Type:* *string

---

##### `ParameterVersionIdInput`<sup>Optional</sup> <a name="ParameterVersionIdInput" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterVersionIdInput"></a>

```go
func ParameterVersionIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameter"></a>

```go
func Parameter() *string
```

- *Type:* *string

---

##### `ParameterData`<sup>Required</sup> <a name="ParameterData" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterData"></a>

```go
func ParameterData() *string
```

- *Type:* *string

---

##### `ParameterVersionId`<sup>Required</sup> <a name="ParameterVersionId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterVersionId"></a>

```go
func ParameterVersionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleParameterManagerParameterVersionConfig <a name="GoogleParameterManagerParameterVersionConfig" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleparametermanagerparameterversion"

&googleparametermanagerparameterversion.GoogleParameterManagerParameterVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Parameter: *string,
	ParameterData: *string,
	ParameterVersionId: *string,
	Disabled: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.parameter">Parameter</a></code> | <code>*string</code> | Parameter Manager Parameter resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.parameterData">ParameterData</a></code> | <code>*string</code> | The Parameter data. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.parameterVersionId">ParameterVersionId</a></code> | <code>*string</code> | Version ID of the Parameter Version Resource. This must be unique within the Parameter. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | The current state of Parameter Version. This field is only applicable for updating Parameter Version. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_parameter_manager_parameter_version#id GoogleParameterManagerParameterVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts">GoogleParameterManagerParameterVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.parameter"></a>

```go
Parameter *string
```

- *Type:* *string

Parameter Manager Parameter resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_parameter_manager_parameter_version#parameter GoogleParameterManagerParameterVersion#parameter}

---

##### `ParameterData`<sup>Required</sup> <a name="ParameterData" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.parameterData"></a>

```go
ParameterData *string
```

- *Type:* *string

The Parameter data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_parameter_manager_parameter_version#parameter_data GoogleParameterManagerParameterVersion#parameter_data}

---

##### `ParameterVersionId`<sup>Required</sup> <a name="ParameterVersionId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.parameterVersionId"></a>

```go
ParameterVersionId *string
```

- *Type:* *string

Version ID of the Parameter Version Resource. This must be unique within the Parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_parameter_manager_parameter_version#parameter_version_id GoogleParameterManagerParameterVersion#parameter_version_id}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

The current state of Parameter Version. This field is only applicable for updating Parameter Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_parameter_manager_parameter_version#disabled GoogleParameterManagerParameterVersion#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_parameter_manager_parameter_version#id GoogleParameterManagerParameterVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.timeouts"></a>

```go
Timeouts GoogleParameterManagerParameterVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts">GoogleParameterManagerParameterVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_parameter_manager_parameter_version#timeouts GoogleParameterManagerParameterVersion#timeouts}

---

### GoogleParameterManagerParameterVersionTimeouts <a name="GoogleParameterManagerParameterVersionTimeouts" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleparametermanagerparameterversion"

&googleparametermanagerparameterversion.GoogleParameterManagerParameterVersionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_parameter_manager_parameter_version#create GoogleParameterManagerParameterVersion#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_parameter_manager_parameter_version#delete GoogleParameterManagerParameterVersion#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_parameter_manager_parameter_version#update GoogleParameterManagerParameterVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_parameter_manager_parameter_version#create GoogleParameterManagerParameterVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_parameter_manager_parameter_version#delete GoogleParameterManagerParameterVersion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_parameter_manager_parameter_version#update GoogleParameterManagerParameterVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleParameterManagerParameterVersionTimeoutsOutputReference <a name="GoogleParameterManagerParameterVersionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleparametermanagerparameterversion"

googleparametermanagerparameterversion.NewGoogleParameterManagerParameterVersionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleParameterManagerParameterVersionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



