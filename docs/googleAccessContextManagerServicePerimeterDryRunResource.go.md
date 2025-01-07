# `googleAccessContextManagerServicePerimeterDryRunResource` Submodule <a name="`googleAccessContextManagerServicePerimeterDryRunResource` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerServicePerimeterDryRunResource <a name="GoogleAccessContextManagerServicePerimeterDryRunResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_resource google_access_context_manager_service_perimeter_dry_run_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeterdryrunresource"

googleaccesscontextmanagerserviceperimeterdryrunresource.NewGoogleAccessContextManagerServicePerimeterDryRunResource(scope Construct, id *string, config GoogleAccessContextManagerServicePerimeterDryRunResourceConfig) GoogleAccessContextManagerServicePerimeterDryRunResource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig">GoogleAccessContextManagerServicePerimeterDryRunResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig">GoogleAccessContextManagerServicePerimeterDryRunResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.putTimeouts"></a>

```go
func PutTimeouts(value GoogleAccessContextManagerServicePerimeterDryRunResourceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeouts">GoogleAccessContextManagerServicePerimeterDryRunResourceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeterDryRunResource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeterdryrunresource"

googleaccesscontextmanagerserviceperimeterdryrunresource.GoogleAccessContextManagerServicePerimeterDryRunResource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeterdryrunresource"

googleaccesscontextmanagerserviceperimeterdryrunresource.GoogleAccessContextManagerServicePerimeterDryRunResource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeterdryrunresource"

googleaccesscontextmanagerserviceperimeterdryrunresource.GoogleAccessContextManagerServicePerimeterDryRunResource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeterdryrunresource"

googleaccesscontextmanagerserviceperimeterdryrunresource.GoogleAccessContextManagerServicePerimeterDryRunResource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeterDryRunResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleAccessContextManagerServicePerimeterDryRunResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleAccessContextManagerServicePerimeterDryRunResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerServicePerimeterDryRunResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.perimeterNameInput">PerimeterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.perimeterName">PerimeterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.timeouts"></a>

```go
func Timeouts() GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PerimeterNameInput`<sup>Optional</sup> <a name="PerimeterNameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.perimeterNameInput"></a>

```go
func PerimeterNameInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PerimeterName`<sup>Required</sup> <a name="PerimeterName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.perimeterName"></a>

```go
func PerimeterName() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerServicePerimeterDryRunResourceConfig <a name="GoogleAccessContextManagerServicePerimeterDryRunResourceConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeterdryrunresource"

&googleaccesscontextmanagerserviceperimeterdryrunresource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PerimeterName: *string,
	Resource: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.perimeterName">PerimeterName</a></code> | <code>*string</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.resource">Resource</a></code> | <code>*string</code> | A GCP resource that is inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_resource#id GoogleAccessContextManagerServicePerimeterDryRunResource#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeouts">GoogleAccessContextManagerServicePerimeterDryRunResourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PerimeterName`<sup>Required</sup> <a name="PerimeterName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.perimeterName"></a>

```go
PerimeterName *string
```

- *Type:* *string

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_resource#perimeter_name GoogleAccessContextManagerServicePerimeterDryRunResource#perimeter_name}

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

A GCP resource that is inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_resource#resource GoogleAccessContextManagerServicePerimeterDryRunResource#resource}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_resource#id GoogleAccessContextManagerServicePerimeterDryRunResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceConfig.property.timeouts"></a>

```go
Timeouts GoogleAccessContextManagerServicePerimeterDryRunResourceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeouts">GoogleAccessContextManagerServicePerimeterDryRunResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_resource#timeouts GoogleAccessContextManagerServicePerimeterDryRunResource#timeouts}

---

### GoogleAccessContextManagerServicePerimeterDryRunResourceTimeouts <a name="GoogleAccessContextManagerServicePerimeterDryRunResourceTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeterdryrunresource"

&googleaccesscontextmanagerserviceperimeterdryrunresource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_resource#create GoogleAccessContextManagerServicePerimeterDryRunResource#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_resource#delete GoogleAccessContextManagerServicePerimeterDryRunResource#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_resource#create GoogleAccessContextManagerServicePerimeterDryRunResource#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_resource#delete GoogleAccessContextManagerServicePerimeterDryRunResource#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeterdryrunresource"

googleaccesscontextmanagerserviceperimeterdryrunresource.NewGoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunResource.GoogleAccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



