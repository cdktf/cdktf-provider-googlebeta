# `googleVertexAiEndpointIamMember` Submodule <a name="`googleVertexAiEndpointIamMember` Submodule" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiEndpointIamMember <a name="GoogleVertexAiEndpointIamMember" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member google_vertex_ai_endpoint_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaiendpointiammember"

googlevertexaiendpointiammember.NewGoogleVertexAiEndpointIamMember(scope Construct, id *string, config GoogleVertexAiEndpointIamMemberConfig) GoogleVertexAiEndpointIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig">GoogleVertexAiEndpointIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig">GoogleVertexAiEndpointIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.putCondition"></a>

```go
func PutCondition(value GoogleVertexAiEndpointIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberCondition">GoogleVertexAiEndpointIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiEndpointIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaiendpointiammember"

googlevertexaiendpointiammember.GoogleVertexAiEndpointIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaiendpointiammember"

googlevertexaiendpointiammember.GoogleVertexAiEndpointIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaiendpointiammember"

googlevertexaiendpointiammember.GoogleVertexAiEndpointIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaiendpointiammember"

googlevertexaiendpointiammember.GoogleVertexAiEndpointIamMember_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleVertexAiEndpointIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleVertexAiEndpointIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleVertexAiEndpointIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiEndpointIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference">GoogleVertexAiEndpointIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberCondition">GoogleVertexAiEndpointIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.condition"></a>

```go
func Condition() GoogleVertexAiEndpointIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference">GoogleVertexAiEndpointIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.conditionInput"></a>

```go
func ConditionInput() GoogleVertexAiEndpointIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberCondition">GoogleVertexAiEndpointIamMemberCondition</a>

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiEndpointIamMemberCondition <a name="GoogleVertexAiEndpointIamMemberCondition" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaiendpointiammember"

&googlevertexaiendpointiammember.GoogleVertexAiEndpointIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#expression GoogleVertexAiEndpointIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#title GoogleVertexAiEndpointIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#description GoogleVertexAiEndpointIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#expression GoogleVertexAiEndpointIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#title GoogleVertexAiEndpointIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#description GoogleVertexAiEndpointIamMember#description}.

---

### GoogleVertexAiEndpointIamMemberConfig <a name="GoogleVertexAiEndpointIamMemberConfig" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaiendpointiammember"

&googlevertexaiendpointiammember.GoogleVertexAiEndpointIamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Endpoint: *string,
	Member: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#endpoint GoogleVertexAiEndpointIamMember#endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#member GoogleVertexAiEndpointIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#role GoogleVertexAiEndpointIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberCondition">GoogleVertexAiEndpointIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#id GoogleVertexAiEndpointIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#location GoogleVertexAiEndpointIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#project GoogleVertexAiEndpointIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#endpoint GoogleVertexAiEndpointIamMember#endpoint}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#member GoogleVertexAiEndpointIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#role GoogleVertexAiEndpointIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.condition"></a>

```go
Condition GoogleVertexAiEndpointIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberCondition">GoogleVertexAiEndpointIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#condition GoogleVertexAiEndpointIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#id GoogleVertexAiEndpointIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#location GoogleVertexAiEndpointIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_endpoint_iam_member#project GoogleVertexAiEndpointIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiEndpointIamMemberConditionOutputReference <a name="GoogleVertexAiEndpointIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaiendpointiammember"

googlevertexaiendpointiammember.NewGoogleVertexAiEndpointIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiEndpointIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberCondition">GoogleVertexAiEndpointIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiEndpointIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpointIamMember.GoogleVertexAiEndpointIamMemberCondition">GoogleVertexAiEndpointIamMemberCondition</a>

---



