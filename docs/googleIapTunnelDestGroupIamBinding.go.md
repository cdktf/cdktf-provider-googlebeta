# `googleIapTunnelDestGroupIamBinding` Submodule <a name="`googleIapTunnelDestGroupIamBinding` Submodule" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapTunnelDestGroupIamBinding <a name="GoogleIapTunnelDestGroupIamBinding" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding google_iap_tunnel_dest_group_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiaptunneldestgroupiambinding"

googleiaptunneldestgroupiambinding.NewGoogleIapTunnelDestGroupIamBinding(scope Construct, id *string, config GoogleIapTunnelDestGroupIamBindingConfig) GoogleIapTunnelDestGroupIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig">GoogleIapTunnelDestGroupIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig">GoogleIapTunnelDestGroupIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.putCondition"></a>

```go
func PutCondition(value GoogleIapTunnelDestGroupIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition">GoogleIapTunnelDestGroupIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIapTunnelDestGroupIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiaptunneldestgroupiambinding"

googleiaptunneldestgroupiambinding.GoogleIapTunnelDestGroupIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiaptunneldestgroupiambinding"

googleiaptunneldestgroupiambinding.GoogleIapTunnelDestGroupIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiaptunneldestgroupiambinding"

googleiaptunneldestgroupiambinding.GoogleIapTunnelDestGroupIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiaptunneldestgroupiambinding"

googleiaptunneldestgroupiambinding.GoogleIapTunnelDestGroupIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleIapTunnelDestGroupIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIapTunnelDestGroupIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIapTunnelDestGroupIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIapTunnelDestGroupIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference">GoogleIapTunnelDestGroupIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition">GoogleIapTunnelDestGroupIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.destGroupInput">DestGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.destGroup">DestGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.condition"></a>

```go
func Condition() GoogleIapTunnelDestGroupIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference">GoogleIapTunnelDestGroupIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.conditionInput"></a>

```go
func ConditionInput() GoogleIapTunnelDestGroupIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition">GoogleIapTunnelDestGroupIamBindingCondition</a>

---

##### `DestGroupInput`<sup>Optional</sup> <a name="DestGroupInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.destGroupInput"></a>

```go
func DestGroupInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `DestGroup`<sup>Required</sup> <a name="DestGroup" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.destGroup"></a>

```go
func DestGroup() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapTunnelDestGroupIamBindingCondition <a name="GoogleIapTunnelDestGroupIamBindingCondition" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiaptunneldestgroupiambinding"

&googleiaptunneldestgroupiambinding.GoogleIapTunnelDestGroupIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#expression GoogleIapTunnelDestGroupIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#title GoogleIapTunnelDestGroupIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#description GoogleIapTunnelDestGroupIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#expression GoogleIapTunnelDestGroupIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#title GoogleIapTunnelDestGroupIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#description GoogleIapTunnelDestGroupIamBinding#description}.

---

### GoogleIapTunnelDestGroupIamBindingConfig <a name="GoogleIapTunnelDestGroupIamBindingConfig" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiaptunneldestgroupiambinding"

&googleiaptunneldestgroupiambinding.GoogleIapTunnelDestGroupIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DestGroup: *string,
	Members: *[]*string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.destGroup">DestGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#dest_group GoogleIapTunnelDestGroupIamBinding#dest_group}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#members GoogleIapTunnelDestGroupIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#role GoogleIapTunnelDestGroupIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition">GoogleIapTunnelDestGroupIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#id GoogleIapTunnelDestGroupIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#project GoogleIapTunnelDestGroupIamBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#region GoogleIapTunnelDestGroupIamBinding#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestGroup`<sup>Required</sup> <a name="DestGroup" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.destGroup"></a>

```go
DestGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#dest_group GoogleIapTunnelDestGroupIamBinding#dest_group}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#members GoogleIapTunnelDestGroupIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#role GoogleIapTunnelDestGroupIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.condition"></a>

```go
Condition GoogleIapTunnelDestGroupIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition">GoogleIapTunnelDestGroupIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#condition GoogleIapTunnelDestGroupIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#id GoogleIapTunnelDestGroupIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#project GoogleIapTunnelDestGroupIamBinding#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iap_tunnel_dest_group_iam_binding#region GoogleIapTunnelDestGroupIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapTunnelDestGroupIamBindingConditionOutputReference <a name="GoogleIapTunnelDestGroupIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleiaptunneldestgroupiambinding"

googleiaptunneldestgroupiambinding.NewGoogleIapTunnelDestGroupIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIapTunnelDestGroupIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition">GoogleIapTunnelDestGroupIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIapTunnelDestGroupIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition">GoogleIapTunnelDestGroupIamBindingCondition</a>

---



