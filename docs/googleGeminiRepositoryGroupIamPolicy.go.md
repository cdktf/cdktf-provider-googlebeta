# `googleGeminiRepositoryGroupIamPolicy` Submodule <a name="`googleGeminiRepositoryGroupIamPolicy` Submodule" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiRepositoryGroupIamPolicy <a name="GoogleGeminiRepositoryGroupIamPolicy" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_repository_group_iam_policy google_gemini_repository_group_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminirepositorygroupiampolicy"

googlegeminirepositorygroupiampolicy.NewGoogleGeminiRepositoryGroupIamPolicy(scope Construct, id *string, config GoogleGeminiRepositoryGroupIamPolicyConfig) GoogleGeminiRepositoryGroupIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig">GoogleGeminiRepositoryGroupIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig">GoogleGeminiRepositoryGroupIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGeminiRepositoryGroupIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminirepositorygroupiampolicy"

googlegeminirepositorygroupiampolicy.GoogleGeminiRepositoryGroupIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminirepositorygroupiampolicy"

googlegeminirepositorygroupiampolicy.GoogleGeminiRepositoryGroupIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminirepositorygroupiampolicy"

googlegeminirepositorygroupiampolicy.GoogleGeminiRepositoryGroupIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminirepositorygroupiampolicy"

googlegeminirepositorygroupiampolicy.GoogleGeminiRepositoryGroupIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleGeminiRepositoryGroupIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleGeminiRepositoryGroupIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleGeminiRepositoryGroupIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_repository_group_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGeminiRepositoryGroupIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.codeRepositoryIndexInput">CodeRepositoryIndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.repositoryGroupIdInput">RepositoryGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.codeRepositoryIndex">CodeRepositoryIndex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.repositoryGroupId">RepositoryGroupId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `CodeRepositoryIndexInput`<sup>Optional</sup> <a name="CodeRepositoryIndexInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.codeRepositoryIndexInput"></a>

```go
func CodeRepositoryIndexInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RepositoryGroupIdInput`<sup>Optional</sup> <a name="RepositoryGroupIdInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.repositoryGroupIdInput"></a>

```go
func RepositoryGroupIdInput() *string
```

- *Type:* *string

---

##### `CodeRepositoryIndex`<sup>Required</sup> <a name="CodeRepositoryIndex" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.codeRepositoryIndex"></a>

```go
func CodeRepositoryIndex() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RepositoryGroupId`<sup>Required</sup> <a name="RepositoryGroupId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.repositoryGroupId"></a>

```go
func RepositoryGroupId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiRepositoryGroupIamPolicyConfig <a name="GoogleGeminiRepositoryGroupIamPolicyConfig" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminirepositorygroupiampolicy"

&googlegeminirepositorygroupiampolicy.GoogleGeminiRepositoryGroupIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CodeRepositoryIndex: *string,
	PolicyData: *string,
	RepositoryGroupId: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.codeRepositoryIndex">CodeRepositoryIndex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_repository_group_iam_policy#code_repository_index GoogleGeminiRepositoryGroupIamPolicy#code_repository_index}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_repository_group_iam_policy#policy_data GoogleGeminiRepositoryGroupIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.repositoryGroupId">RepositoryGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_repository_group_iam_policy#repository_group_id GoogleGeminiRepositoryGroupIamPolicy#repository_group_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_repository_group_iam_policy#id GoogleGeminiRepositoryGroupIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_repository_group_iam_policy#location GoogleGeminiRepositoryGroupIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_repository_group_iam_policy#project GoogleGeminiRepositoryGroupIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CodeRepositoryIndex`<sup>Required</sup> <a name="CodeRepositoryIndex" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.codeRepositoryIndex"></a>

```go
CodeRepositoryIndex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_repository_group_iam_policy#code_repository_index GoogleGeminiRepositoryGroupIamPolicy#code_repository_index}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_repository_group_iam_policy#policy_data GoogleGeminiRepositoryGroupIamPolicy#policy_data}.

---

##### `RepositoryGroupId`<sup>Required</sup> <a name="RepositoryGroupId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.repositoryGroupId"></a>

```go
RepositoryGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_repository_group_iam_policy#repository_group_id GoogleGeminiRepositoryGroupIamPolicy#repository_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_repository_group_iam_policy#id GoogleGeminiRepositoryGroupIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_repository_group_iam_policy#location GoogleGeminiRepositoryGroupIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamPolicy.GoogleGeminiRepositoryGroupIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_repository_group_iam_policy#project GoogleGeminiRepositoryGroupIamPolicy#project}.

---



