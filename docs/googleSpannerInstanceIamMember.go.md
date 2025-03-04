# `googleSpannerInstanceIamMember` Submodule <a name="`googleSpannerInstanceIamMember` Submodule" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSpannerInstanceIamMember <a name="GoogleSpannerInstanceIamMember" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member google_spanner_instance_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlespannerinstanceiammember"

googlespannerinstanceiammember.NewGoogleSpannerInstanceIamMember(scope Construct, id *string, config GoogleSpannerInstanceIamMemberConfig) GoogleSpannerInstanceIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig">GoogleSpannerInstanceIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig">GoogleSpannerInstanceIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.putCondition"></a>

```go
func PutCondition(value GoogleSpannerInstanceIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberCondition">GoogleSpannerInstanceIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSpannerInstanceIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlespannerinstanceiammember"

googlespannerinstanceiammember.GoogleSpannerInstanceIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlespannerinstanceiammember"

googlespannerinstanceiammember.GoogleSpannerInstanceIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlespannerinstanceiammember"

googlespannerinstanceiammember.GoogleSpannerInstanceIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlespannerinstanceiammember"

googlespannerinstanceiammember.GoogleSpannerInstanceIamMember_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleSpannerInstanceIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleSpannerInstanceIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleSpannerInstanceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSpannerInstanceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference">GoogleSpannerInstanceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberCondition">GoogleSpannerInstanceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.condition"></a>

```go
func Condition() GoogleSpannerInstanceIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference">GoogleSpannerInstanceIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.conditionInput"></a>

```go
func ConditionInput() GoogleSpannerInstanceIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberCondition">GoogleSpannerInstanceIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSpannerInstanceIamMemberCondition <a name="GoogleSpannerInstanceIamMemberCondition" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlespannerinstanceiammember"

&googlespannerinstanceiammember.GoogleSpannerInstanceIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member#expression GoogleSpannerInstanceIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member#title GoogleSpannerInstanceIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member#description GoogleSpannerInstanceIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member#expression GoogleSpannerInstanceIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member#title GoogleSpannerInstanceIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member#description GoogleSpannerInstanceIamMember#description}.

---

### GoogleSpannerInstanceIamMemberConfig <a name="GoogleSpannerInstanceIamMemberConfig" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlespannerinstanceiammember"

&googlespannerinstanceiammember.GoogleSpannerInstanceIamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Instance: *string,
	Member: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberCondition,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.instance">Instance</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member#instance GoogleSpannerInstanceIamMember#instance}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member#member GoogleSpannerInstanceIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member#role GoogleSpannerInstanceIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberCondition">GoogleSpannerInstanceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member#id GoogleSpannerInstanceIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member#project GoogleSpannerInstanceIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member#instance GoogleSpannerInstanceIamMember#instance}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member#member GoogleSpannerInstanceIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member#role GoogleSpannerInstanceIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.condition"></a>

```go
Condition GoogleSpannerInstanceIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberCondition">GoogleSpannerInstanceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member#condition GoogleSpannerInstanceIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member#id GoogleSpannerInstanceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_iam_member#project GoogleSpannerInstanceIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSpannerInstanceIamMemberConditionOutputReference <a name="GoogleSpannerInstanceIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlespannerinstanceiammember"

googlespannerinstanceiammember.NewGoogleSpannerInstanceIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSpannerInstanceIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberCondition">GoogleSpannerInstanceIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSpannerInstanceIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstanceIamMember.GoogleSpannerInstanceIamMemberCondition">GoogleSpannerInstanceIamMemberCondition</a>

---



