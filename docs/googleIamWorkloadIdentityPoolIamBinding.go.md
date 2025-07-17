# `googleIamWorkloadIdentityPoolIamBinding` Submodule <a name="`googleIamWorkloadIdentityPoolIamBinding` Submodule" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkloadIdentityPoolIamBinding <a name="GoogleIamWorkloadIdentityPoolIamBinding" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding google_iam_workload_identity_pool_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypooliambinding"

googleiamworkloadidentitypooliambinding.NewGoogleIamWorkloadIdentityPoolIamBinding(scope Construct, id *string, config GoogleIamWorkloadIdentityPoolIamBindingConfig) GoogleIamWorkloadIdentityPoolIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig">GoogleIamWorkloadIdentityPoolIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig">GoogleIamWorkloadIdentityPoolIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.putCondition"></a>

```go
func PutCondition(value GoogleIamWorkloadIdentityPoolIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition">GoogleIamWorkloadIdentityPoolIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypooliambinding"

googleiamworkloadidentitypooliambinding.GoogleIamWorkloadIdentityPoolIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypooliambinding"

googleiamworkloadidentitypooliambinding.GoogleIamWorkloadIdentityPoolIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypooliambinding"

googleiamworkloadidentitypooliambinding.GoogleIamWorkloadIdentityPoolIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypooliambinding"

googleiamworkloadidentitypooliambinding.GoogleIamWorkloadIdentityPoolIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIamWorkloadIdentityPoolIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIamWorkloadIdentityPoolIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkloadIdentityPoolIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference">GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition">GoogleIamWorkloadIdentityPoolIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.workloadIdentityPoolIdInput">WorkloadIdentityPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.condition"></a>

```go
func Condition() GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference">GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.conditionInput"></a>

```go
func ConditionInput() GoogleIamWorkloadIdentityPoolIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition">GoogleIamWorkloadIdentityPoolIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `WorkloadIdentityPoolIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolIdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.workloadIdentityPoolIdInput"></a>

```go
func WorkloadIdentityPoolIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.workloadIdentityPoolId"></a>

```go
func WorkloadIdentityPoolId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkloadIdentityPoolIamBindingCondition <a name="GoogleIamWorkloadIdentityPoolIamBindingCondition" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypooliambinding"

&googleiamworkloadidentitypooliambinding.GoogleIamWorkloadIdentityPoolIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding#expression GoogleIamWorkloadIdentityPoolIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding#title GoogleIamWorkloadIdentityPoolIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding#description GoogleIamWorkloadIdentityPoolIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding#expression GoogleIamWorkloadIdentityPoolIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding#title GoogleIamWorkloadIdentityPoolIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding#description GoogleIamWorkloadIdentityPoolIamBinding#description}.

---

### GoogleIamWorkloadIdentityPoolIamBindingConfig <a name="GoogleIamWorkloadIdentityPoolIamBindingConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypooliambinding"

&googleiamworkloadidentitypooliambinding.GoogleIamWorkloadIdentityPoolIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Members: *[]*string,
	Role: *string,
	WorkloadIdentityPoolId: *string,
	Condition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding#members GoogleIamWorkloadIdentityPoolIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding#role GoogleIamWorkloadIdentityPoolIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding#workload_identity_pool_id GoogleIamWorkloadIdentityPoolIamBinding#workload_identity_pool_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition">GoogleIamWorkloadIdentityPoolIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding#id GoogleIamWorkloadIdentityPoolIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding#project GoogleIamWorkloadIdentityPoolIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding#members GoogleIamWorkloadIdentityPoolIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding#role GoogleIamWorkloadIdentityPoolIamBinding#role}.

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.workloadIdentityPoolId"></a>

```go
WorkloadIdentityPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding#workload_identity_pool_id GoogleIamWorkloadIdentityPoolIamBinding#workload_identity_pool_id}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.condition"></a>

```go
Condition GoogleIamWorkloadIdentityPoolIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition">GoogleIamWorkloadIdentityPoolIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding#condition GoogleIamWorkloadIdentityPoolIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding#id GoogleIamWorkloadIdentityPoolIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_iam_binding#project GoogleIamWorkloadIdentityPoolIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference <a name="GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypooliambinding"

googleiamworkloadidentitypooliambinding.NewGoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition">GoogleIamWorkloadIdentityPoolIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamWorkloadIdentityPoolIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition">GoogleIamWorkloadIdentityPoolIamBindingCondition</a>

---



