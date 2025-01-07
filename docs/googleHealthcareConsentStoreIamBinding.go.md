# `googleHealthcareConsentStoreIamBinding` Submodule <a name="`googleHealthcareConsentStoreIamBinding` Submodule" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleHealthcareConsentStoreIamBinding <a name="GoogleHealthcareConsentStoreIamBinding" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding google_healthcare_consent_store_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlehealthcareconsentstoreiambinding"

googlehealthcareconsentstoreiambinding.NewGoogleHealthcareConsentStoreIamBinding(scope Construct, id *string, config GoogleHealthcareConsentStoreIamBindingConfig) GoogleHealthcareConsentStoreIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig">GoogleHealthcareConsentStoreIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig">GoogleHealthcareConsentStoreIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.putCondition"></a>

```go
func PutCondition(value GoogleHealthcareConsentStoreIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition">GoogleHealthcareConsentStoreIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleHealthcareConsentStoreIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlehealthcareconsentstoreiambinding"

googlehealthcareconsentstoreiambinding.GoogleHealthcareConsentStoreIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlehealthcareconsentstoreiambinding"

googlehealthcareconsentstoreiambinding.GoogleHealthcareConsentStoreIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlehealthcareconsentstoreiambinding"

googlehealthcareconsentstoreiambinding.GoogleHealthcareConsentStoreIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlehealthcareconsentstoreiambinding"

googlehealthcareconsentstoreiambinding.GoogleHealthcareConsentStoreIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleHealthcareConsentStoreIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleHealthcareConsentStoreIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleHealthcareConsentStoreIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleHealthcareConsentStoreIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference">GoogleHealthcareConsentStoreIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition">GoogleHealthcareConsentStoreIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.consentStoreIdInput">ConsentStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.datasetInput">DatasetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.consentStoreId">ConsentStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.condition"></a>

```go
func Condition() GoogleHealthcareConsentStoreIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference">GoogleHealthcareConsentStoreIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.conditionInput"></a>

```go
func ConditionInput() GoogleHealthcareConsentStoreIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition">GoogleHealthcareConsentStoreIamBindingCondition</a>

---

##### `ConsentStoreIdInput`<sup>Optional</sup> <a name="ConsentStoreIdInput" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.consentStoreIdInput"></a>

```go
func ConsentStoreIdInput() *string
```

- *Type:* *string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.datasetInput"></a>

```go
func DatasetInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `ConsentStoreId`<sup>Required</sup> <a name="ConsentStoreId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.consentStoreId"></a>

```go
func ConsentStoreId() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleHealthcareConsentStoreIamBindingCondition <a name="GoogleHealthcareConsentStoreIamBindingCondition" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlehealthcareconsentstoreiambinding"

&googlehealthcareconsentstoreiambinding.GoogleHealthcareConsentStoreIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding#expression GoogleHealthcareConsentStoreIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding#title GoogleHealthcareConsentStoreIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding#description GoogleHealthcareConsentStoreIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding#expression GoogleHealthcareConsentStoreIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding#title GoogleHealthcareConsentStoreIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding#description GoogleHealthcareConsentStoreIamBinding#description}.

---

### GoogleHealthcareConsentStoreIamBindingConfig <a name="GoogleHealthcareConsentStoreIamBindingConfig" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlehealthcareconsentstoreiambinding"

&googlehealthcareconsentstoreiambinding.GoogleHealthcareConsentStoreIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConsentStoreId: *string,
	Dataset: *string,
	Members: *[]*string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.consentStoreId">ConsentStoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding#consent_store_id GoogleHealthcareConsentStoreIamBinding#consent_store_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.dataset">Dataset</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding#dataset GoogleHealthcareConsentStoreIamBinding#dataset}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding#members GoogleHealthcareConsentStoreIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding#role GoogleHealthcareConsentStoreIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition">GoogleHealthcareConsentStoreIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding#id GoogleHealthcareConsentStoreIamBinding#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConsentStoreId`<sup>Required</sup> <a name="ConsentStoreId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.consentStoreId"></a>

```go
ConsentStoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding#consent_store_id GoogleHealthcareConsentStoreIamBinding#consent_store_id}.

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.dataset"></a>

```go
Dataset *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding#dataset GoogleHealthcareConsentStoreIamBinding#dataset}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding#members GoogleHealthcareConsentStoreIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding#role GoogleHealthcareConsentStoreIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.condition"></a>

```go
Condition GoogleHealthcareConsentStoreIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition">GoogleHealthcareConsentStoreIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding#condition GoogleHealthcareConsentStoreIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_healthcare_consent_store_iam_binding#id GoogleHealthcareConsentStoreIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleHealthcareConsentStoreIamBindingConditionOutputReference <a name="GoogleHealthcareConsentStoreIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlehealthcareconsentstoreiambinding"

googlehealthcareconsentstoreiambinding.NewGoogleHealthcareConsentStoreIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleHealthcareConsentStoreIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition">GoogleHealthcareConsentStoreIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleHealthcareConsentStoreIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition">GoogleHealthcareConsentStoreIamBindingCondition</a>

---



