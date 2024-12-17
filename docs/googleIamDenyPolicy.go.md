# `googleIamDenyPolicy` Submodule <a name="`googleIamDenyPolicy` Submodule" id="@cdktf/provider-google-beta.googleIamDenyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamDenyPolicy <a name="GoogleIamDenyPolicy" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy google_iam_deny_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamdenypolicy"

googleiamdenypolicy.NewGoogleIamDenyPolicy(scope Construct, id *string, config GoogleIamDenyPolicyConfig) GoogleIamDenyPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig">GoogleIamDenyPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig">GoogleIamDenyPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleIamDenyPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamDenyPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamdenypolicy"

googleiamdenypolicy.GoogleIamDenyPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamdenypolicy"

googleiamdenypolicy.GoogleIamDenyPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamdenypolicy"

googleiamdenypolicy.GoogleIamDenyPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamdenypolicy"

googleiamdenypolicy.GoogleIamDenyPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleIamDenyPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIamDenyPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIamDenyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamDenyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList">GoogleIamDenyPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference">GoogleIamDenyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.rules"></a>

```go
func Rules() GoogleIamDenyPolicyRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList">GoogleIamDenyPolicyRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleIamDenyPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference">GoogleIamDenyPolicyTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamDenyPolicyConfig <a name="GoogleIamDenyPolicyConfig" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamdenypolicy"

&googleiamdenypolicy.GoogleIamDenyPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Parent: *string,
	Rules: interface{},
	DisplayName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.name">Name</a></code> | <code>*string</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.parent">Parent</a></code> | <code>*string</code> | The attachment point is identified by its URL-encoded full resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#id GoogleIamDenyPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#name GoogleIamDenyPolicy#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The attachment point is identified by its URL-encoded full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#parent GoogleIamDenyPolicy#parent}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#rules GoogleIamDenyPolicy#rules}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#display_name GoogleIamDenyPolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#id GoogleIamDenyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleIamDenyPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#timeouts GoogleIamDenyPolicy#timeouts}

---

### GoogleIamDenyPolicyRules <a name="GoogleIamDenyPolicyRules" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamdenypolicy"

&googleiamdenypolicy.GoogleIamDenyPolicyRules {
	DenyRule: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules.property.denyRule">DenyRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a></code> | deny_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules.property.description">Description</a></code> | <code>*string</code> | The description of the rule. |

---

##### `DenyRule`<sup>Optional</sup> <a name="DenyRule" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules.property.denyRule"></a>

```go
DenyRule GoogleIamDenyPolicyRulesDenyRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a>

deny_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#deny_rule GoogleIamDenyPolicy#deny_rule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#description GoogleIamDenyPolicy#description}

---

### GoogleIamDenyPolicyRulesDenyRule <a name="GoogleIamDenyPolicyRulesDenyRule" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamdenypolicy"

&googleiamdenypolicy.GoogleIamDenyPolicyRulesDenyRule {
	DenialCondition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition,
	DeniedPermissions: *[]*string,
	DeniedPrincipals: *[]*string,
	ExceptionPermissions: *[]*string,
	ExceptionPrincipals: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.denialCondition">DenialCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a></code> | denial_condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.deniedPermissions">DeniedPermissions</a></code> | <code>*[]*string</code> | The permissions that are explicitly denied by this rule. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.deniedPrincipals">DeniedPrincipals</a></code> | <code>*[]*string</code> | The identities that are prevented from using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.exceptionPermissions">ExceptionPermissions</a></code> | <code>*[]*string</code> | Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.exceptionPrincipals">ExceptionPrincipals</a></code> | <code>*[]*string</code> | The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals. |

---

##### `DenialCondition`<sup>Optional</sup> <a name="DenialCondition" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.denialCondition"></a>

```go
DenialCondition GoogleIamDenyPolicyRulesDenyRuleDenialCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a>

denial_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#denial_condition GoogleIamDenyPolicy#denial_condition}

---

##### `DeniedPermissions`<sup>Optional</sup> <a name="DeniedPermissions" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.deniedPermissions"></a>

```go
DeniedPermissions *[]*string
```

- *Type:* *[]*string

The permissions that are explicitly denied by this rule.

Each permission uses the format '{service-fqdn}/{resource}.{verb}',
where '{service-fqdn}' is the fully qualified domain name for the service. For example, 'iam.googleapis.com/roles.list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#denied_permissions GoogleIamDenyPolicy#denied_permissions}

---

##### `DeniedPrincipals`<sup>Optional</sup> <a name="DeniedPrincipals" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.deniedPrincipals"></a>

```go
DeniedPrincipals *[]*string
```

- *Type:* *[]*string

The identities that are prevented from using one or more permissions on Google Cloud resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#denied_principals GoogleIamDenyPolicy#denied_principals}

---

##### `ExceptionPermissions`<sup>Optional</sup> <a name="ExceptionPermissions" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.exceptionPermissions"></a>

```go
ExceptionPermissions *[]*string
```

- *Type:* *[]*string

Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions.

If a permission appears in deniedPermissions and in exceptionPermissions then it will not be denied.
The excluded permissions can be specified using the same syntax as deniedPermissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#exception_permissions GoogleIamDenyPolicy#exception_permissions}

---

##### `ExceptionPrincipals`<sup>Optional</sup> <a name="ExceptionPrincipals" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.exceptionPrincipals"></a>

```go
ExceptionPrincipals *[]*string
```

- *Type:* *[]*string

The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals.

For example, you could add a Google group to the deniedPrincipals, then exclude specific users who belong to that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#exception_principals GoogleIamDenyPolicy#exception_principals}

---

### GoogleIamDenyPolicyRulesDenyRuleDenialCondition <a name="GoogleIamDenyPolicyRulesDenyRuleDenialCondition" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamdenypolicy"

&googleiamdenypolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition {
	Expression: *string,
	Description: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.description">Description</a></code> | <code>*string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.location">Location</a></code> | <code>*string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.title">Title</a></code> | <code>*string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#expression GoogleIamDenyPolicy#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#description GoogleIamDenyPolicy#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.location"></a>

```go
Location *string
```

- *Type:* *string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#location GoogleIamDenyPolicy#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#title GoogleIamDenyPolicy#title}

---

### GoogleIamDenyPolicyTimeouts <a name="GoogleIamDenyPolicyTimeouts" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamdenypolicy"

&googleiamdenypolicy.GoogleIamDenyPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#create GoogleIamDenyPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#delete GoogleIamDenyPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#update GoogleIamDenyPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#create GoogleIamDenyPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#delete GoogleIamDenyPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_iam_deny_policy#update GoogleIamDenyPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference <a name="GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamdenypolicy"

googleiamdenypolicy.NewGoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamDenyPolicyRulesDenyRuleDenialCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a>

---


### GoogleIamDenyPolicyRulesDenyRuleOutputReference <a name="GoogleIamDenyPolicyRulesDenyRuleOutputReference" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamdenypolicy"

googleiamdenypolicy.NewGoogleIamDenyPolicyRulesDenyRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamDenyPolicyRulesDenyRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition">PutDenialCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetDenialCondition">ResetDenialCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPermissions">ResetDeniedPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPrincipals">ResetDeniedPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPermissions">ResetExceptionPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPrincipals">ResetExceptionPrincipals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDenialCondition` <a name="PutDenialCondition" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition"></a>

```go
func PutDenialCondition(value GoogleIamDenyPolicyRulesDenyRuleDenialCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a>

---

##### `ResetDenialCondition` <a name="ResetDenialCondition" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetDenialCondition"></a>

```go
func ResetDenialCondition()
```

##### `ResetDeniedPermissions` <a name="ResetDeniedPermissions" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPermissions"></a>

```go
func ResetDeniedPermissions()
```

##### `ResetDeniedPrincipals` <a name="ResetDeniedPrincipals" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPrincipals"></a>

```go
func ResetDeniedPrincipals()
```

##### `ResetExceptionPermissions` <a name="ResetExceptionPermissions" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPermissions"></a>

```go
func ResetExceptionPermissions()
```

##### `ResetExceptionPrincipals` <a name="ResetExceptionPrincipals" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPrincipals"></a>

```go
func ResetExceptionPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.denialCondition">DenialCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference">GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.denialConditionInput">DenialConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissionsInput">DeniedPermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipalsInput">DeniedPrincipalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissionsInput">ExceptionPermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipalsInput">ExceptionPrincipalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissions">DeniedPermissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipals">DeniedPrincipals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissions">ExceptionPermissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipals">ExceptionPrincipals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DenialCondition`<sup>Required</sup> <a name="DenialCondition" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.denialCondition"></a>

```go
func DenialCondition() GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference">GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference</a>

---

##### `DenialConditionInput`<sup>Optional</sup> <a name="DenialConditionInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.denialConditionInput"></a>

```go
func DenialConditionInput() GoogleIamDenyPolicyRulesDenyRuleDenialCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a>

---

##### `DeniedPermissionsInput`<sup>Optional</sup> <a name="DeniedPermissionsInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissionsInput"></a>

```go
func DeniedPermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeniedPrincipalsInput`<sup>Optional</sup> <a name="DeniedPrincipalsInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipalsInput"></a>

```go
func DeniedPrincipalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExceptionPermissionsInput`<sup>Optional</sup> <a name="ExceptionPermissionsInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissionsInput"></a>

```go
func ExceptionPermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExceptionPrincipalsInput`<sup>Optional</sup> <a name="ExceptionPrincipalsInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipalsInput"></a>

```go
func ExceptionPrincipalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeniedPermissions`<sup>Required</sup> <a name="DeniedPermissions" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissions"></a>

```go
func DeniedPermissions() *[]*string
```

- *Type:* *[]*string

---

##### `DeniedPrincipals`<sup>Required</sup> <a name="DeniedPrincipals" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipals"></a>

```go
func DeniedPrincipals() *[]*string
```

- *Type:* *[]*string

---

##### `ExceptionPermissions`<sup>Required</sup> <a name="ExceptionPermissions" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissions"></a>

```go
func ExceptionPermissions() *[]*string
```

- *Type:* *[]*string

---

##### `ExceptionPrincipals`<sup>Required</sup> <a name="ExceptionPrincipals" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipals"></a>

```go
func ExceptionPrincipals() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamDenyPolicyRulesDenyRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a>

---


### GoogleIamDenyPolicyRulesList <a name="GoogleIamDenyPolicyRulesList" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamdenypolicy"

googleiamdenypolicy.NewGoogleIamDenyPolicyRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleIamDenyPolicyRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.get"></a>

```go
func Get(index *f64) GoogleIamDenyPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleIamDenyPolicyRulesOutputReference <a name="GoogleIamDenyPolicyRulesOutputReference" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamdenypolicy"

googleiamdenypolicy.NewGoogleIamDenyPolicyRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleIamDenyPolicyRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.putDenyRule">PutDenyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resetDenyRule">ResetDenyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDenyRule` <a name="PutDenyRule" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.putDenyRule"></a>

```go
func PutDenyRule(value GoogleIamDenyPolicyRulesDenyRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.putDenyRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a>

---

##### `ResetDenyRule` <a name="ResetDenyRule" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resetDenyRule"></a>

```go
func ResetDenyRule()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.denyRule">DenyRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference">GoogleIamDenyPolicyRulesDenyRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.denyRuleInput">DenyRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DenyRule`<sup>Required</sup> <a name="DenyRule" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.denyRule"></a>

```go
func DenyRule() GoogleIamDenyPolicyRulesDenyRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference">GoogleIamDenyPolicyRulesDenyRuleOutputReference</a>

---

##### `DenyRuleInput`<sup>Optional</sup> <a name="DenyRuleInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.denyRuleInput"></a>

```go
func DenyRuleInput() GoogleIamDenyPolicyRulesDenyRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleIamDenyPolicyTimeoutsOutputReference <a name="GoogleIamDenyPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamdenypolicy"

googleiamdenypolicy.NewGoogleIamDenyPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamDenyPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



