# `googleGeminiRepositoryGroupIamMember` Submodule <a name="`googleGeminiRepositoryGroupIamMember` Submodule" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiRepositoryGroupIamMember <a name="GoogleGeminiRepositoryGroupIamMember" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member google_gemini_repository_group_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminirepositorygroupiammember"

googlegeminirepositorygroupiammember.NewGoogleGeminiRepositoryGroupIamMember(scope Construct, id *string, config GoogleGeminiRepositoryGroupIamMemberConfig) GoogleGeminiRepositoryGroupIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig">GoogleGeminiRepositoryGroupIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig">GoogleGeminiRepositoryGroupIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.putCondition"></a>

```go
func PutCondition(value GoogleGeminiRepositoryGroupIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberCondition">GoogleGeminiRepositoryGroupIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGeminiRepositoryGroupIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminirepositorygroupiammember"

googlegeminirepositorygroupiammember.GoogleGeminiRepositoryGroupIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminirepositorygroupiammember"

googlegeminirepositorygroupiammember.GoogleGeminiRepositoryGroupIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminirepositorygroupiammember"

googlegeminirepositorygroupiammember.GoogleGeminiRepositoryGroupIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminirepositorygroupiammember"

googlegeminirepositorygroupiammember.GoogleGeminiRepositoryGroupIamMember_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleGeminiRepositoryGroupIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleGeminiRepositoryGroupIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleGeminiRepositoryGroupIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGeminiRepositoryGroupIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference">GoogleGeminiRepositoryGroupIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.codeRepositoryIndexInput">CodeRepositoryIndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberCondition">GoogleGeminiRepositoryGroupIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.repositoryGroupIdInput">RepositoryGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.codeRepositoryIndex">CodeRepositoryIndex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.repositoryGroupId">RepositoryGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.condition"></a>

```go
func Condition() GoogleGeminiRepositoryGroupIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference">GoogleGeminiRepositoryGroupIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `CodeRepositoryIndexInput`<sup>Optional</sup> <a name="CodeRepositoryIndexInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.codeRepositoryIndexInput"></a>

```go
func CodeRepositoryIndexInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.conditionInput"></a>

```go
func ConditionInput() GoogleGeminiRepositoryGroupIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberCondition">GoogleGeminiRepositoryGroupIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RepositoryGroupIdInput`<sup>Optional</sup> <a name="RepositoryGroupIdInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.repositoryGroupIdInput"></a>

```go
func RepositoryGroupIdInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `CodeRepositoryIndex`<sup>Required</sup> <a name="CodeRepositoryIndex" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.codeRepositoryIndex"></a>

```go
func CodeRepositoryIndex() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RepositoryGroupId`<sup>Required</sup> <a name="RepositoryGroupId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.repositoryGroupId"></a>

```go
func RepositoryGroupId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiRepositoryGroupIamMemberCondition <a name="GoogleGeminiRepositoryGroupIamMemberCondition" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminirepositorygroupiammember"

&googlegeminirepositorygroupiammember.GoogleGeminiRepositoryGroupIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#expression GoogleGeminiRepositoryGroupIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#title GoogleGeminiRepositoryGroupIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#description GoogleGeminiRepositoryGroupIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#expression GoogleGeminiRepositoryGroupIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#title GoogleGeminiRepositoryGroupIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#description GoogleGeminiRepositoryGroupIamMember#description}.

---

### GoogleGeminiRepositoryGroupIamMemberConfig <a name="GoogleGeminiRepositoryGroupIamMemberConfig" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminirepositorygroupiammember"

&googlegeminirepositorygroupiammember.GoogleGeminiRepositoryGroupIamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CodeRepositoryIndex: *string,
	Member: *string,
	RepositoryGroupId: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.codeRepositoryIndex">CodeRepositoryIndex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#code_repository_index GoogleGeminiRepositoryGroupIamMember#code_repository_index}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#member GoogleGeminiRepositoryGroupIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.repositoryGroupId">RepositoryGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#repository_group_id GoogleGeminiRepositoryGroupIamMember#repository_group_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#role GoogleGeminiRepositoryGroupIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberCondition">GoogleGeminiRepositoryGroupIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#id GoogleGeminiRepositoryGroupIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#location GoogleGeminiRepositoryGroupIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#project GoogleGeminiRepositoryGroupIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CodeRepositoryIndex`<sup>Required</sup> <a name="CodeRepositoryIndex" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.codeRepositoryIndex"></a>

```go
CodeRepositoryIndex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#code_repository_index GoogleGeminiRepositoryGroupIamMember#code_repository_index}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#member GoogleGeminiRepositoryGroupIamMember#member}.

---

##### `RepositoryGroupId`<sup>Required</sup> <a name="RepositoryGroupId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.repositoryGroupId"></a>

```go
RepositoryGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#repository_group_id GoogleGeminiRepositoryGroupIamMember#repository_group_id}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#role GoogleGeminiRepositoryGroupIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.condition"></a>

```go
Condition GoogleGeminiRepositoryGroupIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberCondition">GoogleGeminiRepositoryGroupIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#condition GoogleGeminiRepositoryGroupIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#id GoogleGeminiRepositoryGroupIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#location GoogleGeminiRepositoryGroupIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group_iam_member#project GoogleGeminiRepositoryGroupIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiRepositoryGroupIamMemberConditionOutputReference <a name="GoogleGeminiRepositoryGroupIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminirepositorygroupiammember"

googlegeminirepositorygroupiammember.NewGoogleGeminiRepositoryGroupIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGeminiRepositoryGroupIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberCondition">GoogleGeminiRepositoryGroupIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGeminiRepositoryGroupIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamMember.GoogleGeminiRepositoryGroupIamMemberCondition">GoogleGeminiRepositoryGroupIamMemberCondition</a>

---



