# `googleCloudfunctionsFunctionIamBinding` Submodule <a name="`googleCloudfunctionsFunctionIamBinding` Submodule" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudfunctionsFunctionIamBinding <a name="GoogleCloudfunctionsFunctionIamBinding" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding google_cloudfunctions_function_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudfunctionsfunctioniambinding"

googlecloudfunctionsfunctioniambinding.NewGoogleCloudfunctionsFunctionIamBinding(scope Construct, id *string, config GoogleCloudfunctionsFunctionIamBindingConfig) GoogleCloudfunctionsFunctionIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig">GoogleCloudfunctionsFunctionIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig">GoogleCloudfunctionsFunctionIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.putCondition"></a>

```go
func PutCondition(value GoogleCloudfunctionsFunctionIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingCondition">GoogleCloudfunctionsFunctionIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudfunctionsFunctionIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudfunctionsfunctioniambinding"

googlecloudfunctionsfunctioniambinding.GoogleCloudfunctionsFunctionIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudfunctionsfunctioniambinding"

googlecloudfunctionsfunctioniambinding.GoogleCloudfunctionsFunctionIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudfunctionsfunctioniambinding"

googlecloudfunctionsfunctioniambinding.GoogleCloudfunctionsFunctionIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudfunctionsfunctioniambinding"

googlecloudfunctionsfunctioniambinding.GoogleCloudfunctionsFunctionIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleCloudfunctionsFunctionIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCloudfunctionsFunctionIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCloudfunctionsFunctionIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudfunctionsFunctionIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference">GoogleCloudfunctionsFunctionIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.cloudFunctionInput">CloudFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingCondition">GoogleCloudfunctionsFunctionIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.cloudFunction">CloudFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.condition"></a>

```go
func Condition() GoogleCloudfunctionsFunctionIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference">GoogleCloudfunctionsFunctionIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `CloudFunctionInput`<sup>Optional</sup> <a name="CloudFunctionInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.cloudFunctionInput"></a>

```go
func CloudFunctionInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.conditionInput"></a>

```go
func ConditionInput() GoogleCloudfunctionsFunctionIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingCondition">GoogleCloudfunctionsFunctionIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `CloudFunction`<sup>Required</sup> <a name="CloudFunction" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.cloudFunction"></a>

```go
func CloudFunction() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudfunctionsFunctionIamBindingCondition <a name="GoogleCloudfunctionsFunctionIamBindingCondition" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudfunctionsfunctioniambinding"

&googlecloudfunctionsfunctioniambinding.GoogleCloudfunctionsFunctionIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#expression GoogleCloudfunctionsFunctionIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#title GoogleCloudfunctionsFunctionIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#description GoogleCloudfunctionsFunctionIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#expression GoogleCloudfunctionsFunctionIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#title GoogleCloudfunctionsFunctionIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#description GoogleCloudfunctionsFunctionIamBinding#description}.

---

### GoogleCloudfunctionsFunctionIamBindingConfig <a name="GoogleCloudfunctionsFunctionIamBindingConfig" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudfunctionsfunctioniambinding"

&googlecloudfunctionsfunctioniambinding.GoogleCloudfunctionsFunctionIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloudFunction: *string,
	Members: *[]*string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingCondition,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.cloudFunction">CloudFunction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#cloud_function GoogleCloudfunctionsFunctionIamBinding#cloud_function}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#members GoogleCloudfunctionsFunctionIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#role GoogleCloudfunctionsFunctionIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingCondition">GoogleCloudfunctionsFunctionIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#id GoogleCloudfunctionsFunctionIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#project GoogleCloudfunctionsFunctionIamBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#region GoogleCloudfunctionsFunctionIamBinding#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudFunction`<sup>Required</sup> <a name="CloudFunction" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.cloudFunction"></a>

```go
CloudFunction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#cloud_function GoogleCloudfunctionsFunctionIamBinding#cloud_function}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#members GoogleCloudfunctionsFunctionIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#role GoogleCloudfunctionsFunctionIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.condition"></a>

```go
Condition GoogleCloudfunctionsFunctionIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingCondition">GoogleCloudfunctionsFunctionIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#condition GoogleCloudfunctionsFunctionIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#id GoogleCloudfunctionsFunctionIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#project GoogleCloudfunctionsFunctionIamBinding#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function_iam_binding#region GoogleCloudfunctionsFunctionIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudfunctionsFunctionIamBindingConditionOutputReference <a name="GoogleCloudfunctionsFunctionIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudfunctionsfunctioniambinding"

googlecloudfunctionsfunctioniambinding.NewGoogleCloudfunctionsFunctionIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudfunctionsFunctionIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingCondition">GoogleCloudfunctionsFunctionIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudfunctionsFunctionIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunctionIamBinding.GoogleCloudfunctionsFunctionIamBindingCondition">GoogleCloudfunctionsFunctionIamBindingCondition</a>

---



