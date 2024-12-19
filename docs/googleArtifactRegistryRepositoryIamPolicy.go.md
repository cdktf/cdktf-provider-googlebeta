# `googleArtifactRegistryRepositoryIamPolicy` Submodule <a name="`googleArtifactRegistryRepositoryIamPolicy` Submodule" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleArtifactRegistryRepositoryIamPolicy <a name="GoogleArtifactRegistryRepositoryIamPolicy" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_artifact_registry_repository_iam_policy google_artifact_registry_repository_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleartifactregistryrepositoryiampolicy"

googleartifactregistryrepositoryiampolicy.NewGoogleArtifactRegistryRepositoryIamPolicy(scope Construct, id *string, config GoogleArtifactRegistryRepositoryIamPolicyConfig) GoogleArtifactRegistryRepositoryIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig">GoogleArtifactRegistryRepositoryIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig">GoogleArtifactRegistryRepositoryIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleArtifactRegistryRepositoryIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleartifactregistryrepositoryiampolicy"

googleartifactregistryrepositoryiampolicy.GoogleArtifactRegistryRepositoryIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleartifactregistryrepositoryiampolicy"

googleartifactregistryrepositoryiampolicy.GoogleArtifactRegistryRepositoryIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleartifactregistryrepositoryiampolicy"

googleartifactregistryrepositoryiampolicy.GoogleArtifactRegistryRepositoryIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleartifactregistryrepositoryiampolicy"

googleartifactregistryrepositoryiampolicy.GoogleArtifactRegistryRepositoryIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleArtifactRegistryRepositoryIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleArtifactRegistryRepositoryIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleArtifactRegistryRepositoryIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_artifact_registry_repository_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleArtifactRegistryRepositoryIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleArtifactRegistryRepositoryIamPolicyConfig <a name="GoogleArtifactRegistryRepositoryIamPolicyConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleartifactregistryrepositoryiampolicy"

&googleartifactregistryrepositoryiampolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PolicyData: *string,
	Repository: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_artifact_registry_repository_iam_policy#policy_data GoogleArtifactRegistryRepositoryIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.repository">Repository</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_artifact_registry_repository_iam_policy#repository GoogleArtifactRegistryRepositoryIamPolicy#repository}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_artifact_registry_repository_iam_policy#id GoogleArtifactRegistryRepositoryIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_artifact_registry_repository_iam_policy#location GoogleArtifactRegistryRepositoryIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_artifact_registry_repository_iam_policy#project GoogleArtifactRegistryRepositoryIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_artifact_registry_repository_iam_policy#policy_data GoogleArtifactRegistryRepositoryIamPolicy#policy_data}.

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_artifact_registry_repository_iam_policy#repository GoogleArtifactRegistryRepositoryIamPolicy#repository}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_artifact_registry_repository_iam_policy#id GoogleArtifactRegistryRepositoryIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_artifact_registry_repository_iam_policy#location GoogleArtifactRegistryRepositoryIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleArtifactRegistryRepositoryIamPolicy.GoogleArtifactRegistryRepositoryIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_artifact_registry_repository_iam_policy#project GoogleArtifactRegistryRepositoryIamPolicy#project}.

---



