# `googleRuntimeconfigConfigIamMember` Submodule <a name="`googleRuntimeconfigConfigIamMember` Submodule" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleRuntimeconfigConfigIamMember <a name="GoogleRuntimeconfigConfigIamMember" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member google_runtimeconfig_config_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleruntimeconfigconfigiammember"

googleruntimeconfigconfigiammember.NewGoogleRuntimeconfigConfigIamMember(scope Construct, id *string, config GoogleRuntimeconfigConfigIamMemberConfig) GoogleRuntimeconfigConfigIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig">GoogleRuntimeconfigConfigIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig">GoogleRuntimeconfigConfigIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.putCondition"></a>

```go
func PutCondition(value GoogleRuntimeconfigConfigIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition">GoogleRuntimeconfigConfigIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleRuntimeconfigConfigIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleruntimeconfigconfigiammember"

googleruntimeconfigconfigiammember.GoogleRuntimeconfigConfigIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleruntimeconfigconfigiammember"

googleruntimeconfigconfigiammember.GoogleRuntimeconfigConfigIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleruntimeconfigconfigiammember"

googleruntimeconfigconfigiammember.GoogleRuntimeconfigConfigIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleruntimeconfigconfigiammember"

googleruntimeconfigconfigiammember.GoogleRuntimeconfigConfigIamMember_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleRuntimeconfigConfigIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleRuntimeconfigConfigIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleRuntimeconfigConfigIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleRuntimeconfigConfigIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference">GoogleRuntimeconfigConfigIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition">GoogleRuntimeconfigConfigIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.configInput">ConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.config">Config</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.condition"></a>

```go
func Condition() GoogleRuntimeconfigConfigIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference">GoogleRuntimeconfigConfigIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.conditionInput"></a>

```go
func ConditionInput() GoogleRuntimeconfigConfigIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition">GoogleRuntimeconfigConfigIamMemberCondition</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.configInput"></a>

```go
func ConfigInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.config"></a>

```go
func Config() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleRuntimeconfigConfigIamMemberCondition <a name="GoogleRuntimeconfigConfigIamMemberCondition" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleruntimeconfigconfigiammember"

&googleruntimeconfigconfigiammember.GoogleRuntimeconfigConfigIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member#expression GoogleRuntimeconfigConfigIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member#title GoogleRuntimeconfigConfigIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member#description GoogleRuntimeconfigConfigIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member#expression GoogleRuntimeconfigConfigIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member#title GoogleRuntimeconfigConfigIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member#description GoogleRuntimeconfigConfigIamMember#description}.

---

### GoogleRuntimeconfigConfigIamMemberConfig <a name="GoogleRuntimeconfigConfigIamMemberConfig" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleruntimeconfigconfigiammember"

&googleruntimeconfigconfigiammember.GoogleRuntimeconfigConfigIamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Config: *string,
	Member: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.config">Config</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member#config GoogleRuntimeconfigConfigIamMember#config}. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member#member GoogleRuntimeconfigConfigIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member#role GoogleRuntimeconfigConfigIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition">GoogleRuntimeconfigConfigIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member#id GoogleRuntimeconfigConfigIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member#project GoogleRuntimeconfigConfigIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.config"></a>

```go
Config *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member#config GoogleRuntimeconfigConfigIamMember#config}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member#member GoogleRuntimeconfigConfigIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member#role GoogleRuntimeconfigConfigIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.condition"></a>

```go
Condition GoogleRuntimeconfigConfigIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition">GoogleRuntimeconfigConfigIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member#condition GoogleRuntimeconfigConfigIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member#id GoogleRuntimeconfigConfigIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_runtimeconfig_config_iam_member#project GoogleRuntimeconfigConfigIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleRuntimeconfigConfigIamMemberConditionOutputReference <a name="GoogleRuntimeconfigConfigIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleruntimeconfigconfigiammember"

googleruntimeconfigconfigiammember.NewGoogleRuntimeconfigConfigIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleRuntimeconfigConfigIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition">GoogleRuntimeconfigConfigIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleRuntimeconfigConfigIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition">GoogleRuntimeconfigConfigIamMemberCondition</a>

---



