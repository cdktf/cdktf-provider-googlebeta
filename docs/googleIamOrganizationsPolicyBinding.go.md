# `googleIamOrganizationsPolicyBinding` Submodule <a name="`googleIamOrganizationsPolicyBinding` Submodule" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamOrganizationsPolicyBinding <a name="GoogleIamOrganizationsPolicyBinding" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding google_iam_organizations_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamorganizationspolicybinding"

googleiamorganizationspolicybinding.NewGoogleIamOrganizationsPolicyBinding(scope Construct, id *string, config GoogleIamOrganizationsPolicyBindingConfig) GoogleIamOrganizationsPolicyBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig">GoogleIamOrganizationsPolicyBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig">GoogleIamOrganizationsPolicyBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetPolicyKind">ResetPolicyKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putCondition"></a>

```go
func PutCondition(value GoogleIamOrganizationsPolicyBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTarget"></a>

```go
func PutTarget(value GoogleIamOrganizationsPolicyBindingTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTimeouts"></a>

```go
func PutTimeouts(value GoogleIamOrganizationsPolicyBindingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetPolicyKind` <a name="ResetPolicyKind" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetPolicyKind"></a>

```go
func ResetPolicyKind()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamOrganizationsPolicyBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamorganizationspolicybinding"

googleiamorganizationspolicybinding.GoogleIamOrganizationsPolicyBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamorganizationspolicybinding"

googleiamorganizationspolicybinding.GoogleIamOrganizationsPolicyBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamorganizationspolicybinding"

googleiamorganizationspolicybinding.GoogleIamOrganizationsPolicyBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamorganizationspolicybinding"

googleiamorganizationspolicybinding.GoogleIamOrganizationsPolicyBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleIamOrganizationsPolicyBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIamOrganizationsPolicyBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIamOrganizationsPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamOrganizationsPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference">GoogleIamOrganizationsPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyUid">PolicyUid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference">GoogleIamOrganizationsPolicyBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference">GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyBindingIdInput">PolicyBindingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyKindInput">PolicyKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyBindingId">PolicyBindingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyKind">PolicyKind</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.condition"></a>

```go
func Condition() GoogleIamOrganizationsPolicyBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference">GoogleIamOrganizationsPolicyBindingConditionOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyUid`<sup>Required</sup> <a name="PolicyUid" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyUid"></a>

```go
func PolicyUid() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.target"></a>

```go
func Target() GoogleIamOrganizationsPolicyBindingTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference">GoogleIamOrganizationsPolicyBindingTargetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.timeouts"></a>

```go
func Timeouts() GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference">GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.conditionInput"></a>

```go
func ConditionInput() GoogleIamOrganizationsPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `PolicyBindingIdInput`<sup>Optional</sup> <a name="PolicyBindingIdInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyBindingIdInput"></a>

```go
func PolicyBindingIdInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `PolicyKindInput`<sup>Optional</sup> <a name="PolicyKindInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyKindInput"></a>

```go
func PolicyKindInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.targetInput"></a>

```go
func TargetInput() GoogleIamOrganizationsPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `PolicyBindingId`<sup>Required</sup> <a name="PolicyBindingId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyBindingId"></a>

```go
func PolicyBindingId() *string
```

- *Type:* *string

---

##### `PolicyKind`<sup>Required</sup> <a name="PolicyKind" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyKind"></a>

```go
func PolicyKind() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamOrganizationsPolicyBindingCondition <a name="GoogleIamOrganizationsPolicyBindingCondition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamorganizationspolicybinding"

&googleiamorganizationspolicybinding.GoogleIamOrganizationsPolicyBindingCondition {
	Description: *string,
	Expression: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.description">Description</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.location">Location</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.title">Title</a></code> | <code>*string</code> | Optional. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#description GoogleIamOrganizationsPolicyBinding#description}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#expression GoogleIamOrganizationsPolicyBinding#expression}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.location"></a>

```go
Location *string
```

- *Type:* *string

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#location GoogleIamOrganizationsPolicyBinding#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#title GoogleIamOrganizationsPolicyBinding#title}

---

### GoogleIamOrganizationsPolicyBindingConfig <a name="GoogleIamOrganizationsPolicyBindingConfig" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamorganizationspolicybinding"

&googleiamorganizationspolicybinding.GoogleIamOrganizationsPolicyBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Organization: *string,
	Policy: *string,
	PolicyBindingId: *string,
	Target: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget,
	Annotations: *map[string]*string,
	Condition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition,
	DisplayName: *string,
	Id: *string,
	PolicyKind: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.location">Location</a></code> | <code>*string</code> | The location of the Policy Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.organization">Organization</a></code> | <code>*string</code> | The parent organization of the Policy Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policy">Policy</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policyBindingId">PolicyBindingId</a></code> | <code>*string</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#id GoogleIamOrganizationsPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policyKind">PolicyKind</a></code> | <code>*string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#location GoogleIamOrganizationsPolicyBinding#location}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The parent organization of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#organization GoogleIamOrganizationsPolicyBinding#organization}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#policy GoogleIamOrganizationsPolicyBinding#policy}

---

##### `PolicyBindingId`<sup>Required</sup> <a name="PolicyBindingId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policyBindingId"></a>

```go
PolicyBindingId *string
```

- *Type:* *string

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#policy_binding_id GoogleIamOrganizationsPolicyBinding#policy_binding_id}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.target"></a>

```go
Target GoogleIamOrganizationsPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#target GoogleIamOrganizationsPolicyBinding#target}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#annotations GoogleIamOrganizationsPolicyBinding#annotations}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.condition"></a>

```go
Condition GoogleIamOrganizationsPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#condition GoogleIamOrganizationsPolicyBinding#condition}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#display_name GoogleIamOrganizationsPolicyBinding#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#id GoogleIamOrganizationsPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyKind`<sup>Optional</sup> <a name="PolicyKind" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policyKind"></a>

```go
PolicyKind *string
```

- *Type:* *string

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#policy_kind GoogleIamOrganizationsPolicyBinding#policy_kind}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.timeouts"></a>

```go
Timeouts GoogleIamOrganizationsPolicyBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#timeouts GoogleIamOrganizationsPolicyBinding#timeouts}

---

### GoogleIamOrganizationsPolicyBindingTarget <a name="GoogleIamOrganizationsPolicyBindingTarget" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamorganizationspolicybinding"

&googleiamorganizationspolicybinding.GoogleIamOrganizationsPolicyBindingTarget {
	PrincipalSet: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget.property.principalSet">PrincipalSet</a></code> | <code>*string</code> | Required. |

---

##### `PrincipalSet`<sup>Optional</sup> <a name="PrincipalSet" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget.property.principalSet"></a>

```go
PrincipalSet *string
```

- *Type:* *string

Required.

Immutable. The resource name of the policy to be bound.
The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#principal_set GoogleIamOrganizationsPolicyBinding#principal_set}

---

### GoogleIamOrganizationsPolicyBindingTimeouts <a name="GoogleIamOrganizationsPolicyBindingTimeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamorganizationspolicybinding"

&googleiamorganizationspolicybinding.GoogleIamOrganizationsPolicyBindingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#create GoogleIamOrganizationsPolicyBinding#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#delete GoogleIamOrganizationsPolicyBinding#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#update GoogleIamOrganizationsPolicyBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#create GoogleIamOrganizationsPolicyBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#delete GoogleIamOrganizationsPolicyBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_organizations_policy_binding#update GoogleIamOrganizationsPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamOrganizationsPolicyBindingConditionOutputReference <a name="GoogleIamOrganizationsPolicyBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamorganizationspolicybinding"

googleiamorganizationspolicybinding.NewGoogleIamOrganizationsPolicyBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamOrganizationsPolicyBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamOrganizationsPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a>

---


### GoogleIamOrganizationsPolicyBindingTargetOutputReference <a name="GoogleIamOrganizationsPolicyBindingTargetOutputReference" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamorganizationspolicybinding"

googleiamorganizationspolicybinding.NewGoogleIamOrganizationsPolicyBindingTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamOrganizationsPolicyBindingTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resetPrincipalSet">ResetPrincipalSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrincipalSet` <a name="ResetPrincipalSet" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resetPrincipalSet"></a>

```go
func ResetPrincipalSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.principalSetInput">PrincipalSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.principalSet">PrincipalSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalSetInput`<sup>Optional</sup> <a name="PrincipalSetInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.principalSetInput"></a>

```go
func PrincipalSetInput() *string
```

- *Type:* *string

---

##### `PrincipalSet`<sup>Required</sup> <a name="PrincipalSet" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.principalSet"></a>

```go
func PrincipalSet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamOrganizationsPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a>

---


### GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference <a name="GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamorganizationspolicybinding"

googleiamorganizationspolicybinding.NewGoogleIamOrganizationsPolicyBindingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



