# `googleIamAccessBoundaryPolicy` Submodule <a name="`googleIamAccessBoundaryPolicy` Submodule" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamAccessBoundaryPolicy <a name="GoogleIamAccessBoundaryPolicy" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy google_iam_access_boundary_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamaccessboundarypolicy"

googleiamaccessboundarypolicy.NewGoogleIamAccessBoundaryPolicy(scope Construct, id *string, config GoogleIamAccessBoundaryPolicyConfig) GoogleIamAccessBoundaryPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig">GoogleIamAccessBoundaryPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig">GoogleIamAccessBoundaryPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleIamAccessBoundaryPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts">GoogleIamAccessBoundaryPolicyTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamaccessboundarypolicy"

googleiamaccessboundarypolicy.GoogleIamAccessBoundaryPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamaccessboundarypolicy"

googleiamaccessboundarypolicy.GoogleIamAccessBoundaryPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamaccessboundarypolicy"

googleiamaccessboundarypolicy.GoogleIamAccessBoundaryPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamaccessboundarypolicy"

googleiamaccessboundarypolicy.GoogleIamAccessBoundaryPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleIamAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIamAccessBoundaryPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIamAccessBoundaryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamAccessBoundaryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList">GoogleIamAccessBoundaryPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference">GoogleIamAccessBoundaryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.rules"></a>

```go
func Rules() GoogleIamAccessBoundaryPolicyRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList">GoogleIamAccessBoundaryPolicyRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleIamAccessBoundaryPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference">GoogleIamAccessBoundaryPolicyTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamAccessBoundaryPolicyConfig <a name="GoogleIamAccessBoundaryPolicyConfig" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamaccessboundarypolicy"

&googleiamaccessboundarypolicy.GoogleIamAccessBoundaryPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Parent: *string,
	Rules: interface{},
	DisplayName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.name">Name</a></code> | <code>*string</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.parent">Parent</a></code> | <code>*string</code> | The attachment point is identified by its URL-encoded full resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#id GoogleIamAccessBoundaryPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts">GoogleIamAccessBoundaryPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#name GoogleIamAccessBoundaryPolicy#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The attachment point is identified by its URL-encoded full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#parent GoogleIamAccessBoundaryPolicy#parent}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#rules GoogleIamAccessBoundaryPolicy#rules}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#display_name GoogleIamAccessBoundaryPolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#id GoogleIamAccessBoundaryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleIamAccessBoundaryPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts">GoogleIamAccessBoundaryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#timeouts GoogleIamAccessBoundaryPolicy#timeouts}

---

### GoogleIamAccessBoundaryPolicyRules <a name="GoogleIamAccessBoundaryPolicyRules" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamaccessboundarypolicy"

&googleiamaccessboundarypolicy.GoogleIamAccessBoundaryPolicyRules {
	AccessBoundaryRule: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules.property.accessBoundaryRule">AccessBoundaryRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a></code> | access_boundary_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules.property.description">Description</a></code> | <code>*string</code> | The description of the rule. |

---

##### `AccessBoundaryRule`<sup>Optional</sup> <a name="AccessBoundaryRule" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules.property.accessBoundaryRule"></a>

```go
AccessBoundaryRule GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a>

access_boundary_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#access_boundary_rule GoogleIamAccessBoundaryPolicy#access_boundary_rule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#description GoogleIamAccessBoundaryPolicy#description}

---

### GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule <a name="GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamaccessboundarypolicy"

&googleiamaccessboundarypolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule {
	AvailabilityCondition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition,
	AvailablePermissions: *[]*string,
	AvailableResource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availabilityCondition">AvailabilityCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a></code> | availability_condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availablePermissions">AvailablePermissions</a></code> | <code>*[]*string</code> | A list of permissions that may be allowed for use on the specified resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availableResource">AvailableResource</a></code> | <code>*string</code> | The full resource name of a Google Cloud resource entity. |

---

##### `AvailabilityCondition`<sup>Optional</sup> <a name="AvailabilityCondition" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availabilityCondition"></a>

```go
AvailabilityCondition GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a>

availability_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#availability_condition GoogleIamAccessBoundaryPolicy#availability_condition}

---

##### `AvailablePermissions`<sup>Optional</sup> <a name="AvailablePermissions" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availablePermissions"></a>

```go
AvailablePermissions *[]*string
```

- *Type:* *[]*string

A list of permissions that may be allowed for use on the specified resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#available_permissions GoogleIamAccessBoundaryPolicy#available_permissions}

---

##### `AvailableResource`<sup>Optional</sup> <a name="AvailableResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availableResource"></a>

```go
AvailableResource *string
```

- *Type:* *string

The full resource name of a Google Cloud resource entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#available_resource GoogleIamAccessBoundaryPolicy#available_resource}

---

### GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition <a name="GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamaccessboundarypolicy"

&googleiamaccessboundarypolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition {
	Expression: *string,
	Description: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.description">Description</a></code> | <code>*string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.location">Location</a></code> | <code>*string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.title">Title</a></code> | <code>*string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#expression GoogleIamAccessBoundaryPolicy#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#description GoogleIamAccessBoundaryPolicy#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.location"></a>

```go
Location *string
```

- *Type:* *string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#location GoogleIamAccessBoundaryPolicy#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#title GoogleIamAccessBoundaryPolicy#title}

---

### GoogleIamAccessBoundaryPolicyTimeouts <a name="GoogleIamAccessBoundaryPolicyTimeouts" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamaccessboundarypolicy"

&googleiamaccessboundarypolicy.GoogleIamAccessBoundaryPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#create GoogleIamAccessBoundaryPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#delete GoogleIamAccessBoundaryPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#update GoogleIamAccessBoundaryPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#create GoogleIamAccessBoundaryPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#delete GoogleIamAccessBoundaryPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iam_access_boundary_policy#update GoogleIamAccessBoundaryPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference <a name="GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamaccessboundarypolicy"

googleiamaccessboundarypolicy.NewGoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a>

---


### GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference <a name="GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamaccessboundarypolicy"

googleiamaccessboundarypolicy.NewGoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.putAvailabilityCondition">PutAvailabilityCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailabilityCondition">ResetAvailabilityCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailablePermissions">ResetAvailablePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailableResource">ResetAvailableResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvailabilityCondition` <a name="PutAvailabilityCondition" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.putAvailabilityCondition"></a>

```go
func PutAvailabilityCondition(value GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.putAvailabilityCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a>

---

##### `ResetAvailabilityCondition` <a name="ResetAvailabilityCondition" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailabilityCondition"></a>

```go
func ResetAvailabilityCondition()
```

##### `ResetAvailablePermissions` <a name="ResetAvailablePermissions" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailablePermissions"></a>

```go
func ResetAvailablePermissions()
```

##### `ResetAvailableResource` <a name="ResetAvailableResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailableResource"></a>

```go
func ResetAvailableResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availabilityCondition">AvailabilityCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availabilityConditionInput">AvailabilityConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availablePermissionsInput">AvailablePermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availableResourceInput">AvailableResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availablePermissions">AvailablePermissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availableResource">AvailableResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityCondition`<sup>Required</sup> <a name="AvailabilityCondition" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availabilityCondition"></a>

```go
func AvailabilityCondition() GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference</a>

---

##### `AvailabilityConditionInput`<sup>Optional</sup> <a name="AvailabilityConditionInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availabilityConditionInput"></a>

```go
func AvailabilityConditionInput() GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a>

---

##### `AvailablePermissionsInput`<sup>Optional</sup> <a name="AvailablePermissionsInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availablePermissionsInput"></a>

```go
func AvailablePermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AvailableResourceInput`<sup>Optional</sup> <a name="AvailableResourceInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availableResourceInput"></a>

```go
func AvailableResourceInput() *string
```

- *Type:* *string

---

##### `AvailablePermissions`<sup>Required</sup> <a name="AvailablePermissions" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availablePermissions"></a>

```go
func AvailablePermissions() *[]*string
```

- *Type:* *[]*string

---

##### `AvailableResource`<sup>Required</sup> <a name="AvailableResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availableResource"></a>

```go
func AvailableResource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a>

---


### GoogleIamAccessBoundaryPolicyRulesList <a name="GoogleIamAccessBoundaryPolicyRulesList" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamaccessboundarypolicy"

googleiamaccessboundarypolicy.NewGoogleIamAccessBoundaryPolicyRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleIamAccessBoundaryPolicyRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.get"></a>

```go
func Get(index *f64) GoogleIamAccessBoundaryPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleIamAccessBoundaryPolicyRulesOutputReference <a name="GoogleIamAccessBoundaryPolicyRulesOutputReference" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamaccessboundarypolicy"

googleiamaccessboundarypolicy.NewGoogleIamAccessBoundaryPolicyRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleIamAccessBoundaryPolicyRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.putAccessBoundaryRule">PutAccessBoundaryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resetAccessBoundaryRule">ResetAccessBoundaryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessBoundaryRule` <a name="PutAccessBoundaryRule" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.putAccessBoundaryRule"></a>

```go
func PutAccessBoundaryRule(value GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.putAccessBoundaryRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a>

---

##### `ResetAccessBoundaryRule` <a name="ResetAccessBoundaryRule" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resetAccessBoundaryRule"></a>

```go
func ResetAccessBoundaryRule()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.accessBoundaryRule">AccessBoundaryRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.accessBoundaryRuleInput">AccessBoundaryRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessBoundaryRule`<sup>Required</sup> <a name="AccessBoundaryRule" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.accessBoundaryRule"></a>

```go
func AccessBoundaryRule() GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference</a>

---

##### `AccessBoundaryRuleInput`<sup>Optional</sup> <a name="AccessBoundaryRuleInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.accessBoundaryRuleInput"></a>

```go
func AccessBoundaryRuleInput() GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleIamAccessBoundaryPolicyTimeoutsOutputReference <a name="GoogleIamAccessBoundaryPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamaccessboundarypolicy"

googleiamaccessboundarypolicy.NewGoogleIamAccessBoundaryPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamAccessBoundaryPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



