# `googleDataprocAutoscalingPolicyIamBinding` Submodule <a name="`googleDataprocAutoscalingPolicyIamBinding` Submodule" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocAutoscalingPolicyIamBinding <a name="GoogleDataprocAutoscalingPolicyIamBinding" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding google_dataproc_autoscaling_policy_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicyiambinding"

googledataprocautoscalingpolicyiambinding.NewGoogleDataprocAutoscalingPolicyIamBinding(scope Construct, id *string, config GoogleDataprocAutoscalingPolicyIamBindingConfig) GoogleDataprocAutoscalingPolicyIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig">GoogleDataprocAutoscalingPolicyIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig">GoogleDataprocAutoscalingPolicyIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.putCondition"></a>

```go
func PutCondition(value GoogleDataprocAutoscalingPolicyIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingCondition">GoogleDataprocAutoscalingPolicyIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocAutoscalingPolicyIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicyiambinding"

googledataprocautoscalingpolicyiambinding.GoogleDataprocAutoscalingPolicyIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicyiambinding"

googledataprocautoscalingpolicyiambinding.GoogleDataprocAutoscalingPolicyIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicyiambinding"

googledataprocautoscalingpolicyiambinding.GoogleDataprocAutoscalingPolicyIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicyiambinding"

googledataprocautoscalingpolicyiambinding.GoogleDataprocAutoscalingPolicyIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDataprocAutoscalingPolicyIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDataprocAutoscalingPolicyIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDataprocAutoscalingPolicyIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocAutoscalingPolicyIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference">GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingCondition">GoogleDataprocAutoscalingPolicyIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.condition"></a>

```go
func Condition() GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference">GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.conditionInput"></a>

```go
func ConditionInput() GoogleDataprocAutoscalingPolicyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingCondition">GoogleDataprocAutoscalingPolicyIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocAutoscalingPolicyIamBindingCondition <a name="GoogleDataprocAutoscalingPolicyIamBindingCondition" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicyiambinding"

&googledataprocautoscalingpolicyiambinding.GoogleDataprocAutoscalingPolicyIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#expression GoogleDataprocAutoscalingPolicyIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#title GoogleDataprocAutoscalingPolicyIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#description GoogleDataprocAutoscalingPolicyIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#expression GoogleDataprocAutoscalingPolicyIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#title GoogleDataprocAutoscalingPolicyIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#description GoogleDataprocAutoscalingPolicyIamBinding#description}.

---

### GoogleDataprocAutoscalingPolicyIamBindingConfig <a name="GoogleDataprocAutoscalingPolicyIamBindingConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicyiambinding"

&googledataprocautoscalingpolicyiambinding.GoogleDataprocAutoscalingPolicyIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Members: *[]*string,
	PolicyId: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#members GoogleDataprocAutoscalingPolicyIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#policy_id GoogleDataprocAutoscalingPolicyIamBinding#policy_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#role GoogleDataprocAutoscalingPolicyIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingCondition">GoogleDataprocAutoscalingPolicyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#id GoogleDataprocAutoscalingPolicyIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#location GoogleDataprocAutoscalingPolicyIamBinding#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#project GoogleDataprocAutoscalingPolicyIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#members GoogleDataprocAutoscalingPolicyIamBinding#members}.

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#policy_id GoogleDataprocAutoscalingPolicyIamBinding#policy_id}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#role GoogleDataprocAutoscalingPolicyIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.condition"></a>

```go
Condition GoogleDataprocAutoscalingPolicyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingCondition">GoogleDataprocAutoscalingPolicyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#condition GoogleDataprocAutoscalingPolicyIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#id GoogleDataprocAutoscalingPolicyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#location GoogleDataprocAutoscalingPolicyIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_autoscaling_policy_iam_binding#project GoogleDataprocAutoscalingPolicyIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference <a name="GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicyiambinding"

googledataprocautoscalingpolicyiambinding.NewGoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingCondition">GoogleDataprocAutoscalingPolicyIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocAutoscalingPolicyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicyIamBinding.GoogleDataprocAutoscalingPolicyIamBindingCondition">GoogleDataprocAutoscalingPolicyIamBindingCondition</a>

---



