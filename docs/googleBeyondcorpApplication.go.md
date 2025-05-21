# `googleBeyondcorpApplication` Submodule <a name="`googleBeyondcorpApplication` Submodule" id="@cdktf/provider-google-beta.googleBeyondcorpApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBeyondcorpApplication <a name="GoogleBeyondcorpApplication" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application google_beyondcorp_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpapplication"

googlebeyondcorpapplication.NewGoogleBeyondcorpApplication(scope Construct, id *string, config GoogleBeyondcorpApplicationConfig) GoogleBeyondcorpApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig">GoogleBeyondcorpApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig">GoogleBeyondcorpApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.putEndpointMatchers">PutEndpointMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.putUpstreams">PutUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetUpstreams">ResetUpstreams</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpointMatchers` <a name="PutEndpointMatchers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.putEndpointMatchers"></a>

```go
func PutEndpointMatchers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.putEndpointMatchers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBeyondcorpApplicationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts">GoogleBeyondcorpApplicationTimeouts</a>

---

##### `PutUpstreams` <a name="PutUpstreams" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.putUpstreams"></a>

```go
func PutUpstreams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.putUpstreams.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpstreams` <a name="ResetUpstreams" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetUpstreams"></a>

```go
func ResetUpstreams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBeyondcorpApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpapplication"

googlebeyondcorpapplication.GoogleBeyondcorpApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpapplication"

googlebeyondcorpapplication.GoogleBeyondcorpApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpapplication"

googlebeyondcorpapplication.GoogleBeyondcorpApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpapplication"

googlebeyondcorpapplication.GoogleBeyondcorpApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleBeyondcorpApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBeyondcorpApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBeyondcorpApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBeyondcorpApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.endpointMatchers">EndpointMatchers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList">GoogleBeyondcorpApplicationEndpointMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference">GoogleBeyondcorpApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.upstreams">Upstreams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList">GoogleBeyondcorpApplicationUpstreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.endpointMatchersInput">EndpointMatchersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.securityGatewaysIdInput">SecurityGatewaysIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.upstreamsInput">UpstreamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.securityGatewaysId">SecurityGatewaysId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EndpointMatchers`<sup>Required</sup> <a name="EndpointMatchers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.endpointMatchers"></a>

```go
func EndpointMatchers() GoogleBeyondcorpApplicationEndpointMatchersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList">GoogleBeyondcorpApplicationEndpointMatchersList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.timeouts"></a>

```go
func Timeouts() GoogleBeyondcorpApplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference">GoogleBeyondcorpApplicationTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Upstreams`<sup>Required</sup> <a name="Upstreams" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.upstreams"></a>

```go
func Upstreams() GoogleBeyondcorpApplicationUpstreamsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList">GoogleBeyondcorpApplicationUpstreamsList</a>

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EndpointMatchersInput`<sup>Optional</sup> <a name="EndpointMatchersInput" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.endpointMatchersInput"></a>

```go
func EndpointMatchersInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SecurityGatewaysIdInput`<sup>Optional</sup> <a name="SecurityGatewaysIdInput" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.securityGatewaysIdInput"></a>

```go
func SecurityGatewaysIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UpstreamsInput`<sup>Optional</sup> <a name="UpstreamsInput" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.upstreamsInput"></a>

```go
func UpstreamsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SecurityGatewaysId`<sup>Required</sup> <a name="SecurityGatewaysId" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.securityGatewaysId"></a>

```go
func SecurityGatewaysId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBeyondcorpApplicationConfig <a name="GoogleBeyondcorpApplicationConfig" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpapplication"

&googlebeyondcorpapplication.GoogleBeyondcorpApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	EndpointMatchers: interface{},
	SecurityGatewaysId: *string,
	DisplayName: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts,
	Upstreams: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.endpointMatchers">EndpointMatchers</a></code> | <code>interface{}</code> | endpoint_matchers block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.securityGatewaysId">SecurityGatewaysId</a></code> | <code>*string</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#id GoogleBeyondcorpApplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#project GoogleBeyondcorpApplication#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts">GoogleBeyondcorpApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.upstreams">Upstreams</a></code> | <code>interface{}</code> | upstreams block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Optional.

User-settable Application resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#application_id GoogleBeyondcorpApplication#application_id}

---

##### `EndpointMatchers`<sup>Required</sup> <a name="EndpointMatchers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.endpointMatchers"></a>

```go
EndpointMatchers interface{}
```

- *Type:* interface{}

endpoint_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#endpoint_matchers GoogleBeyondcorpApplication#endpoint_matchers}

---

##### `SecurityGatewaysId`<sup>Required</sup> <a name="SecurityGatewaysId" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.securityGatewaysId"></a>

```go
SecurityGatewaysId *string
```

- *Type:* *string

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#security_gateways_id GoogleBeyondcorpApplication#security_gateways_id}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#display_name GoogleBeyondcorpApplication#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#id GoogleBeyondcorpApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#project GoogleBeyondcorpApplication#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.timeouts"></a>

```go
Timeouts GoogleBeyondcorpApplicationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts">GoogleBeyondcorpApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#timeouts GoogleBeyondcorpApplication#timeouts}

---

##### `Upstreams`<sup>Optional</sup> <a name="Upstreams" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.upstreams"></a>

```go
Upstreams interface{}
```

- *Type:* interface{}

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#upstreams GoogleBeyondcorpApplication#upstreams}

---

### GoogleBeyondcorpApplicationEndpointMatchers <a name="GoogleBeyondcorpApplicationEndpointMatchers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpapplication"

&googlebeyondcorpapplication.GoogleBeyondcorpApplicationEndpointMatchers {
	Hostname: *string,
	Ports: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers.property.hostname">Hostname</a></code> | <code>*string</code> | Required. Hostname of the application. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers.property.ports">Ports</a></code> | <code>*[]*f64</code> | Optional. Ports of the application. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Required. Hostname of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#hostname GoogleBeyondcorpApplication#hostname}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers.property.ports"></a>

```go
Ports *[]*f64
```

- *Type:* *[]*f64

Optional. Ports of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#ports GoogleBeyondcorpApplication#ports}

---

### GoogleBeyondcorpApplicationTimeouts <a name="GoogleBeyondcorpApplicationTimeouts" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpapplication"

&googlebeyondcorpapplication.GoogleBeyondcorpApplicationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#create GoogleBeyondcorpApplication#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#delete GoogleBeyondcorpApplication#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#update GoogleBeyondcorpApplication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#create GoogleBeyondcorpApplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#delete GoogleBeyondcorpApplication#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#update GoogleBeyondcorpApplication#update}.

---

### GoogleBeyondcorpApplicationUpstreams <a name="GoogleBeyondcorpApplicationUpstreams" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpapplication"

&googlebeyondcorpapplication.GoogleBeyondcorpApplicationUpstreams {
	EgressPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicy,
	Network: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetwork,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreams.property.egressPolicy">EgressPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicy">GoogleBeyondcorpApplicationUpstreamsEgressPolicy</a></code> | egress_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreams.property.network">Network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetwork">GoogleBeyondcorpApplicationUpstreamsNetwork</a></code> | network block. |

---

##### `EgressPolicy`<sup>Optional</sup> <a name="EgressPolicy" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreams.property.egressPolicy"></a>

```go
EgressPolicy GoogleBeyondcorpApplicationUpstreamsEgressPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicy">GoogleBeyondcorpApplicationUpstreamsEgressPolicy</a>

egress_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#egress_policy GoogleBeyondcorpApplication#egress_policy}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreams.property.network"></a>

```go
Network GoogleBeyondcorpApplicationUpstreamsNetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetwork">GoogleBeyondcorpApplicationUpstreamsNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#network GoogleBeyondcorpApplication#network}

---

### GoogleBeyondcorpApplicationUpstreamsEgressPolicy <a name="GoogleBeyondcorpApplicationUpstreamsEgressPolicy" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpapplication"

&googlebeyondcorpapplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicy {
	Regions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicy.property.regions">Regions</a></code> | <code>*[]*string</code> | Required. List of regions where the application sends traffic to. |

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicy.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Required. List of regions where the application sends traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#regions GoogleBeyondcorpApplication#regions}

---

### GoogleBeyondcorpApplicationUpstreamsNetwork <a name="GoogleBeyondcorpApplicationUpstreamsNetwork" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpapplication"

&googlebeyondcorpapplication.GoogleBeyondcorpApplicationUpstreamsNetwork {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetwork.property.name">Name</a></code> | <code>*string</code> | Required. Network name is of the format: 'projects/{project}/global/networks/{network}'. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetwork.property.name"></a>

```go
Name *string
```

- *Type:* *string

Required. Network name is of the format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_beyondcorp_application#name GoogleBeyondcorpApplication#name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBeyondcorpApplicationEndpointMatchersList <a name="GoogleBeyondcorpApplicationEndpointMatchersList" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpapplication"

googlebeyondcorpapplication.NewGoogleBeyondcorpApplicationEndpointMatchersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBeyondcorpApplicationEndpointMatchersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.get"></a>

```go
func Get(index *f64) GoogleBeyondcorpApplicationEndpointMatchersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBeyondcorpApplicationEndpointMatchersOutputReference <a name="GoogleBeyondcorpApplicationEndpointMatchersOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpapplication"

googlebeyondcorpapplication.NewGoogleBeyondcorpApplicationEndpointMatchersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBeyondcorpApplicationEndpointMatchersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.resetPorts"></a>

```go
func ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.portsInput">PortsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.ports">Ports</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.portsInput"></a>

```go
func PortsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.ports"></a>

```go
func Ports() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBeyondcorpApplicationTimeoutsOutputReference <a name="GoogleBeyondcorpApplicationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpapplication"

googlebeyondcorpapplication.NewGoogleBeyondcorpApplicationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBeyondcorpApplicationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference <a name="GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpapplication"

googlebeyondcorpapplication.NewGoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicy">GoogleBeyondcorpApplicationUpstreamsEgressPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBeyondcorpApplicationUpstreamsEgressPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicy">GoogleBeyondcorpApplicationUpstreamsEgressPolicy</a>

---


### GoogleBeyondcorpApplicationUpstreamsList <a name="GoogleBeyondcorpApplicationUpstreamsList" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpapplication"

googlebeyondcorpapplication.NewGoogleBeyondcorpApplicationUpstreamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBeyondcorpApplicationUpstreamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.get"></a>

```go
func Get(index *f64) GoogleBeyondcorpApplicationUpstreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference <a name="GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpapplication"

googlebeyondcorpapplication.NewGoogleBeyondcorpApplicationUpstreamsNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetwork">GoogleBeyondcorpApplicationUpstreamsNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBeyondcorpApplicationUpstreamsNetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetwork">GoogleBeyondcorpApplicationUpstreamsNetwork</a>

---


### GoogleBeyondcorpApplicationUpstreamsOutputReference <a name="GoogleBeyondcorpApplicationUpstreamsOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpapplication"

googlebeyondcorpapplication.NewGoogleBeyondcorpApplicationUpstreamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBeyondcorpApplicationUpstreamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.putEgressPolicy">PutEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.resetEgressPolicy">ResetEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEgressPolicy` <a name="PutEgressPolicy" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.putEgressPolicy"></a>

```go
func PutEgressPolicy(value GoogleBeyondcorpApplicationUpstreamsEgressPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.putEgressPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicy">GoogleBeyondcorpApplicationUpstreamsEgressPolicy</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.putNetwork"></a>

```go
func PutNetwork(value GoogleBeyondcorpApplicationUpstreamsNetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetwork">GoogleBeyondcorpApplicationUpstreamsNetwork</a>

---

##### `ResetEgressPolicy` <a name="ResetEgressPolicy" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.resetEgressPolicy"></a>

```go
func ResetEgressPolicy()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.property.egressPolicy">EgressPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference">GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.property.network">Network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference">GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.property.egressPolicyInput">EgressPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicy">GoogleBeyondcorpApplicationUpstreamsEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetwork">GoogleBeyondcorpApplicationUpstreamsNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EgressPolicy`<sup>Required</sup> <a name="EgressPolicy" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.property.egressPolicy"></a>

```go
func EgressPolicy() GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference">GoogleBeyondcorpApplicationUpstreamsEgressPolicyOutputReference</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.property.network"></a>

```go
func Network() GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference">GoogleBeyondcorpApplicationUpstreamsNetworkOutputReference</a>

---

##### `EgressPolicyInput`<sup>Optional</sup> <a name="EgressPolicyInput" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.property.egressPolicyInput"></a>

```go
func EgressPolicyInput() GoogleBeyondcorpApplicationUpstreamsEgressPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsEgressPolicy">GoogleBeyondcorpApplicationUpstreamsEgressPolicy</a>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.property.networkInput"></a>

```go
func NetworkInput() GoogleBeyondcorpApplicationUpstreamsNetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsNetwork">GoogleBeyondcorpApplicationUpstreamsNetwork</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationUpstreamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



