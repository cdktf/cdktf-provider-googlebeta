# `googleParameterManagerRegionalParameter` Submodule <a name="`googleParameterManagerRegionalParameter` Submodule" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleParameterManagerRegionalParameter <a name="GoogleParameterManagerRegionalParameter" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_parameter_manager_regional_parameter google_parameter_manager_regional_parameter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleparametermanagerregionalparameter"

googleparametermanagerregionalparameter.NewGoogleParameterManagerRegionalParameter(scope Construct, id *string, config GoogleParameterManagerRegionalParameterConfig) GoogleParameterManagerRegionalParameter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig">GoogleParameterManagerRegionalParameterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig">GoogleParameterManagerRegionalParameterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.putTimeouts"></a>

```go
func PutTimeouts(value GoogleParameterManagerRegionalParameterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a>

---

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetFormat"></a>

```go
func ResetFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleParameterManagerRegionalParameter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleparametermanagerregionalparameter"

googleparametermanagerregionalparameter.GoogleParameterManagerRegionalParameter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleparametermanagerregionalparameter"

googleparametermanagerregionalparameter.GoogleParameterManagerRegionalParameter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleparametermanagerregionalparameter"

googleparametermanagerregionalparameter.GoogleParameterManagerRegionalParameter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleparametermanagerregionalparameter"

googleparametermanagerregionalparameter.GoogleParameterManagerRegionalParameter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleParameterManagerRegionalParameter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleParameterManagerRegionalParameter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleParameterManagerRegionalParameter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_parameter_manager_regional_parameter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleParameterManagerRegionalParameter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.policyMember">PolicyMember</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList">GoogleParameterManagerRegionalParameterPolicyMemberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference">GoogleParameterManagerRegionalParameterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.parameterIdInput">ParameterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.parameterId">ParameterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyMember`<sup>Required</sup> <a name="PolicyMember" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.policyMember"></a>

```go
func PolicyMember() GoogleParameterManagerRegionalParameterPolicyMemberList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList">GoogleParameterManagerRegionalParameterPolicyMemberList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.timeouts"></a>

```go
func Timeouts() GoogleParameterManagerRegionalParameterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference">GoogleParameterManagerRegionalParameterTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ParameterIdInput`<sup>Optional</sup> <a name="ParameterIdInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.parameterIdInput"></a>

```go
func ParameterIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ParameterId`<sup>Required</sup> <a name="ParameterId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.parameterId"></a>

```go
func ParameterId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleParameterManagerRegionalParameterConfig <a name="GoogleParameterManagerRegionalParameterConfig" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleparametermanagerregionalparameter"

&googleparametermanagerregionalparameter.GoogleParameterManagerRegionalParameterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	ParameterId: *string,
	Format: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.location">Location</a></code> | <code>*string</code> | The location of the regional parameter. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.parameterId">ParameterId</a></code> | <code>*string</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.format">Format</a></code> | <code>*string</code> | The format type of the regional parameter. Default value: "UNFORMATTED" Possible values: ["UNFORMATTED", "YAML", "JSON"]. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_parameter_manager_regional_parameter#id GoogleParameterManagerRegionalParameter#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels assigned to this regional Parameter. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_parameter_manager_regional_parameter#project GoogleParameterManagerRegionalParameter#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the regional parameter. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_parameter_manager_regional_parameter#location GoogleParameterManagerRegionalParameter#location}

---

##### `ParameterId`<sup>Required</sup> <a name="ParameterId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.parameterId"></a>

```go
ParameterId *string
```

- *Type:* *string

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_parameter_manager_regional_parameter#parameter_id GoogleParameterManagerRegionalParameter#parameter_id}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.format"></a>

```go
Format *string
```

- *Type:* *string

The format type of the regional parameter. Default value: "UNFORMATTED" Possible values: ["UNFORMATTED", "YAML", "JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_parameter_manager_regional_parameter#format GoogleParameterManagerRegionalParameter#format}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_parameter_manager_regional_parameter#id GoogleParameterManagerRegionalParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels assigned to this regional Parameter.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_parameter_manager_regional_parameter#labels GoogleParameterManagerRegionalParameter#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_parameter_manager_regional_parameter#project GoogleParameterManagerRegionalParameter#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.timeouts"></a>

```go
Timeouts GoogleParameterManagerRegionalParameterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_parameter_manager_regional_parameter#timeouts GoogleParameterManagerRegionalParameter#timeouts}

---

### GoogleParameterManagerRegionalParameterPolicyMember <a name="GoogleParameterManagerRegionalParameterPolicyMember" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMember"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleparametermanagerregionalparameter"

&googleparametermanagerregionalparameter.GoogleParameterManagerRegionalParameterPolicyMember {

}
```


### GoogleParameterManagerRegionalParameterTimeouts <a name="GoogleParameterManagerRegionalParameterTimeouts" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleparametermanagerregionalparameter"

&googleparametermanagerregionalparameter.GoogleParameterManagerRegionalParameterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_parameter_manager_regional_parameter#create GoogleParameterManagerRegionalParameter#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_parameter_manager_regional_parameter#delete GoogleParameterManagerRegionalParameter#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_parameter_manager_regional_parameter#update GoogleParameterManagerRegionalParameter#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_parameter_manager_regional_parameter#create GoogleParameterManagerRegionalParameter#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_parameter_manager_regional_parameter#delete GoogleParameterManagerRegionalParameter#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_parameter_manager_regional_parameter#update GoogleParameterManagerRegionalParameter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleParameterManagerRegionalParameterPolicyMemberList <a name="GoogleParameterManagerRegionalParameterPolicyMemberList" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleparametermanagerregionalparameter"

googleparametermanagerregionalparameter.NewGoogleParameterManagerRegionalParameterPolicyMemberList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleParameterManagerRegionalParameterPolicyMemberList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.get"></a>

```go
func Get(index *f64) GoogleParameterManagerRegionalParameterPolicyMemberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleParameterManagerRegionalParameterPolicyMemberOutputReference <a name="GoogleParameterManagerRegionalParameterPolicyMemberOutputReference" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleparametermanagerregionalparameter"

googleparametermanagerregionalparameter.NewGoogleParameterManagerRegionalParameterPolicyMemberOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleParameterManagerRegionalParameterPolicyMemberOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyNamePrincipal">IamPolicyNamePrincipal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyUidPrincipal">IamPolicyUidPrincipal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMember">GoogleParameterManagerRegionalParameterPolicyMember</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IamPolicyNamePrincipal`<sup>Required</sup> <a name="IamPolicyNamePrincipal" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyNamePrincipal"></a>

```go
func IamPolicyNamePrincipal() *string
```

- *Type:* *string

---

##### `IamPolicyUidPrincipal`<sup>Required</sup> <a name="IamPolicyUidPrincipal" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyUidPrincipal"></a>

```go
func IamPolicyUidPrincipal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleParameterManagerRegionalParameterPolicyMember
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMember">GoogleParameterManagerRegionalParameterPolicyMember</a>

---


### GoogleParameterManagerRegionalParameterTimeoutsOutputReference <a name="GoogleParameterManagerRegionalParameterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleparametermanagerregionalparameter"

googleparametermanagerregionalparameter.NewGoogleParameterManagerRegionalParameterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleParameterManagerRegionalParameterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



