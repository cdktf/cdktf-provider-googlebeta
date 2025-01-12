# `googleIamFoldersPolicyBinding` Submodule <a name="`googleIamFoldersPolicyBinding` Submodule" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamFoldersPolicyBinding <a name="GoogleIamFoldersPolicyBinding" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding google_iam_folders_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiamfolderspolicybinding"

googleiamfolderspolicybinding.NewGoogleIamFoldersPolicyBinding(scope Construct, id *string, config GoogleIamFoldersPolicyBindingConfig) GoogleIamFoldersPolicyBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig">GoogleIamFoldersPolicyBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig">GoogleIamFoldersPolicyBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetPolicyKind">ResetPolicyKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putCondition"></a>

```go
func PutCondition(value GoogleIamFoldersPolicyBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition">GoogleIamFoldersPolicyBindingCondition</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putTarget"></a>

```go
func PutTarget(value GoogleIamFoldersPolicyBindingTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget">GoogleIamFoldersPolicyBindingTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putTimeouts"></a>

```go
func PutTimeouts(value GoogleIamFoldersPolicyBindingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts">GoogleIamFoldersPolicyBindingTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetPolicyKind` <a name="ResetPolicyKind" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetPolicyKind"></a>

```go
func ResetPolicyKind()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamFoldersPolicyBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiamfolderspolicybinding"

googleiamfolderspolicybinding.GoogleIamFoldersPolicyBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiamfolderspolicybinding"

googleiamfolderspolicybinding.GoogleIamFoldersPolicyBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiamfolderspolicybinding"

googleiamfolderspolicybinding.GoogleIamFoldersPolicyBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiamfolderspolicybinding"

googleiamfolderspolicybinding.GoogleIamFoldersPolicyBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleIamFoldersPolicyBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIamFoldersPolicyBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIamFoldersPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamFoldersPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference">GoogleIamFoldersPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyUid">PolicyUid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference">GoogleIamFoldersPolicyBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference">GoogleIamFoldersPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition">GoogleIamFoldersPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyBindingIdInput">PolicyBindingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyKindInput">PolicyKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget">GoogleIamFoldersPolicyBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyBindingId">PolicyBindingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyKind">PolicyKind</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.condition"></a>

```go
func Condition() GoogleIamFoldersPolicyBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference">GoogleIamFoldersPolicyBindingConditionOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyUid`<sup>Required</sup> <a name="PolicyUid" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyUid"></a>

```go
func PolicyUid() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.target"></a>

```go
func Target() GoogleIamFoldersPolicyBindingTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference">GoogleIamFoldersPolicyBindingTargetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.timeouts"></a>

```go
func Timeouts() GoogleIamFoldersPolicyBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference">GoogleIamFoldersPolicyBindingTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.conditionInput"></a>

```go
func ConditionInput() GoogleIamFoldersPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition">GoogleIamFoldersPolicyBindingCondition</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PolicyBindingIdInput`<sup>Optional</sup> <a name="PolicyBindingIdInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyBindingIdInput"></a>

```go
func PolicyBindingIdInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `PolicyKindInput`<sup>Optional</sup> <a name="PolicyKindInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyKindInput"></a>

```go
func PolicyKindInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.targetInput"></a>

```go
func TargetInput() GoogleIamFoldersPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget">GoogleIamFoldersPolicyBindingTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `PolicyBindingId`<sup>Required</sup> <a name="PolicyBindingId" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyBindingId"></a>

```go
func PolicyBindingId() *string
```

- *Type:* *string

---

##### `PolicyKind`<sup>Required</sup> <a name="PolicyKind" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyKind"></a>

```go
func PolicyKind() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamFoldersPolicyBindingCondition <a name="GoogleIamFoldersPolicyBindingCondition" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiamfolderspolicybinding"

&googleiamfolderspolicybinding.GoogleIamFoldersPolicyBindingCondition {
	Description: *string,
	Expression: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition.property.description">Description</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition.property.location">Location</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition.property.title">Title</a></code> | <code>*string</code> | Optional. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#description GoogleIamFoldersPolicyBinding#description}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#expression GoogleIamFoldersPolicyBinding#expression}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition.property.location"></a>

```go
Location *string
```

- *Type:* *string

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#location GoogleIamFoldersPolicyBinding#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#title GoogleIamFoldersPolicyBinding#title}

---

### GoogleIamFoldersPolicyBindingConfig <a name="GoogleIamFoldersPolicyBindingConfig" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiamfolderspolicybinding"

&googleiamfolderspolicybinding.GoogleIamFoldersPolicyBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Folder: *string,
	Location: *string,
	Policy: *string,
	PolicyBindingId: *string,
	Target: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget,
	Annotations: *map[string]*string,
	Condition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition,
	DisplayName: *string,
	Id: *string,
	PolicyKind: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.folder">Folder</a></code> | <code>*string</code> | The parent folder for the PolicyBinding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.location">Location</a></code> | <code>*string</code> | The location of the PolicyBinding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.policy">Policy</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.policyBindingId">PolicyBindingId</a></code> | <code>*string</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget">GoogleIamFoldersPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition">GoogleIamFoldersPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#id GoogleIamFoldersPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.policyKind">PolicyKind</a></code> | <code>*string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts">GoogleIamFoldersPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

The parent folder for the PolicyBinding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#folder GoogleIamFoldersPolicyBinding#folder}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the PolicyBinding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#location GoogleIamFoldersPolicyBinding#location}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#policy GoogleIamFoldersPolicyBinding#policy}

---

##### `PolicyBindingId`<sup>Required</sup> <a name="PolicyBindingId" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.policyBindingId"></a>

```go
PolicyBindingId *string
```

- *Type:* *string

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#policy_binding_id GoogleIamFoldersPolicyBinding#policy_binding_id}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.target"></a>

```go
Target GoogleIamFoldersPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget">GoogleIamFoldersPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#target GoogleIamFoldersPolicyBinding#target}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#annotations GoogleIamFoldersPolicyBinding#annotations}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.condition"></a>

```go
Condition GoogleIamFoldersPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition">GoogleIamFoldersPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#condition GoogleIamFoldersPolicyBinding#condition}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#display_name GoogleIamFoldersPolicyBinding#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#id GoogleIamFoldersPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyKind`<sup>Optional</sup> <a name="PolicyKind" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.policyKind"></a>

```go
PolicyKind *string
```

- *Type:* *string

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#policy_kind GoogleIamFoldersPolicyBinding#policy_kind}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.timeouts"></a>

```go
Timeouts GoogleIamFoldersPolicyBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts">GoogleIamFoldersPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#timeouts GoogleIamFoldersPolicyBinding#timeouts}

---

### GoogleIamFoldersPolicyBindingTarget <a name="GoogleIamFoldersPolicyBindingTarget" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiamfolderspolicybinding"

&googleiamfolderspolicybinding.GoogleIamFoldersPolicyBindingTarget {
	PrincipalSet: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget.property.principalSet">PrincipalSet</a></code> | <code>*string</code> | Required. |

---

##### `PrincipalSet`<sup>Optional</sup> <a name="PrincipalSet" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget.property.principalSet"></a>

```go
PrincipalSet *string
```

- *Type:* *string

Required.

Immutable. The resource name of the policy to be bound.
The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#principal_set GoogleIamFoldersPolicyBinding#principal_set}

---

### GoogleIamFoldersPolicyBindingTimeouts <a name="GoogleIamFoldersPolicyBindingTimeouts" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiamfolderspolicybinding"

&googleiamfolderspolicybinding.GoogleIamFoldersPolicyBindingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#create GoogleIamFoldersPolicyBinding#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#delete GoogleIamFoldersPolicyBinding#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#update GoogleIamFoldersPolicyBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#create GoogleIamFoldersPolicyBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#delete GoogleIamFoldersPolicyBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_folders_policy_binding#update GoogleIamFoldersPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamFoldersPolicyBindingConditionOutputReference <a name="GoogleIamFoldersPolicyBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiamfolderspolicybinding"

googleiamfolderspolicybinding.NewGoogleIamFoldersPolicyBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamFoldersPolicyBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition">GoogleIamFoldersPolicyBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamFoldersPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition">GoogleIamFoldersPolicyBindingCondition</a>

---


### GoogleIamFoldersPolicyBindingTargetOutputReference <a name="GoogleIamFoldersPolicyBindingTargetOutputReference" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiamfolderspolicybinding"

googleiamfolderspolicybinding.NewGoogleIamFoldersPolicyBindingTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamFoldersPolicyBindingTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.resetPrincipalSet">ResetPrincipalSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrincipalSet` <a name="ResetPrincipalSet" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.resetPrincipalSet"></a>

```go
func ResetPrincipalSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.principalSetInput">PrincipalSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.principalSet">PrincipalSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget">GoogleIamFoldersPolicyBindingTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalSetInput`<sup>Optional</sup> <a name="PrincipalSetInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.principalSetInput"></a>

```go
func PrincipalSetInput() *string
```

- *Type:* *string

---

##### `PrincipalSet`<sup>Required</sup> <a name="PrincipalSet" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.principalSet"></a>

```go
func PrincipalSet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamFoldersPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget">GoogleIamFoldersPolicyBindingTarget</a>

---


### GoogleIamFoldersPolicyBindingTimeoutsOutputReference <a name="GoogleIamFoldersPolicyBindingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiamfolderspolicybinding"

googleiamfolderspolicybinding.NewGoogleIamFoldersPolicyBindingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamFoldersPolicyBindingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



