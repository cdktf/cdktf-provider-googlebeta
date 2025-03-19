# `googleBigqueryDatapolicyDataPolicy` Submodule <a name="`googleBigqueryDatapolicyDataPolicy` Submodule" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryDatapolicyDataPolicy <a name="GoogleBigqueryDatapolicyDataPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy google_bigquery_datapolicy_data_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatapolicydatapolicy"

googlebigquerydatapolicydatapolicy.NewGoogleBigqueryDatapolicyDataPolicy(scope Construct, id *string, config GoogleBigqueryDatapolicyDataPolicyConfig) GoogleBigqueryDatapolicyDataPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig">GoogleBigqueryDatapolicyDataPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig">GoogleBigqueryDatapolicyDataPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putDataMaskingPolicy">PutDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetDataMaskingPolicy">ResetDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataMaskingPolicy` <a name="PutDataMaskingPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putDataMaskingPolicy"></a>

```go
func PutDataMaskingPolicy(value GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putDataMaskingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBigqueryDatapolicyDataPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a>

---

##### `ResetDataMaskingPolicy` <a name="ResetDataMaskingPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetDataMaskingPolicy"></a>

```go
func ResetDataMaskingPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryDatapolicyDataPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatapolicydatapolicy"

googlebigquerydatapolicydatapolicy.GoogleBigqueryDatapolicyDataPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatapolicydatapolicy"

googlebigquerydatapolicydatapolicy.GoogleBigqueryDatapolicyDataPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatapolicydatapolicy"

googlebigquerydatapolicydatapolicy.GoogleBigqueryDatapolicyDataPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatapolicydatapolicy"

googlebigquerydatapolicydatapolicy.GoogleBigqueryDatapolicyDataPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleBigqueryDatapolicyDataPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBigqueryDatapolicyDataPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBigqueryDatapolicyDataPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryDatapolicyDataPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataMaskingPolicy">DataMaskingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference">GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataMaskingPolicyInput">DataMaskingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyIdInput">DataPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyTypeInput">DataPolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.policyTagInput">PolicyTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyId">DataPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyType">DataPolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.policyTag">PolicyTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataMaskingPolicy`<sup>Required</sup> <a name="DataMaskingPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataMaskingPolicy"></a>

```go
func DataMaskingPolicy() GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference">GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference</a>

---

##### `DataMaskingPolicyInput`<sup>Optional</sup> <a name="DataMaskingPolicyInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataMaskingPolicyInput"></a>

```go
func DataMaskingPolicyInput() GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---

##### `DataPolicyIdInput`<sup>Optional</sup> <a name="DataPolicyIdInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyIdInput"></a>

```go
func DataPolicyIdInput() *string
```

- *Type:* *string

---

##### `DataPolicyTypeInput`<sup>Optional</sup> <a name="DataPolicyTypeInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyTypeInput"></a>

```go
func DataPolicyTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PolicyTagInput`<sup>Optional</sup> <a name="PolicyTagInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.policyTagInput"></a>

```go
func PolicyTagInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyId"></a>

```go
func DataPolicyId() *string
```

- *Type:* *string

---

##### `DataPolicyType`<sup>Required</sup> <a name="DataPolicyType" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyType"></a>

```go
func DataPolicyType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PolicyTag`<sup>Required</sup> <a name="PolicyTag" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.policyTag"></a>

```go
func PolicyTag() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryDatapolicyDataPolicyConfig <a name="GoogleBigqueryDatapolicyDataPolicyConfig" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatapolicydatapolicy"

&googlebigquerydatapolicydatapolicy.GoogleBigqueryDatapolicyDataPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataPolicyId: *string,
	DataPolicyType: *string,
	Location: *string,
	PolicyTag: *string,
	DataMaskingPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataPolicyId">DataPolicyId</a></code> | <code>*string</code> | User-assigned (human readable) ID of the data policy that needs to be unique within a project. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataPolicyType">DataPolicyType</a></code> | <code>*string</code> | The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The name of the location of the data policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.policyTag">PolicyTag</a></code> | <code>*string</code> | Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataMaskingPolicy">DataMaskingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | data_masking_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#id GoogleBigqueryDatapolicyDataPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#project GoogleBigqueryDatapolicyDataPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataPolicyId"></a>

```go
DataPolicyId *string
```

- *Type:* *string

User-assigned (human readable) ID of the data policy that needs to be unique within a project.

Used as {dataPolicyId} in part of the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#data_policy_id GoogleBigqueryDatapolicyDataPolicy#data_policy_id}

---

##### `DataPolicyType`<sup>Required</sup> <a name="DataPolicyType" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataPolicyType"></a>

```go
DataPolicyType *string
```

- *Type:* *string

The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#data_policy_type GoogleBigqueryDatapolicyDataPolicy#data_policy_type}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The name of the location of the data policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#location GoogleBigqueryDatapolicyDataPolicy#location}

---

##### `PolicyTag`<sup>Required</sup> <a name="PolicyTag" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.policyTag"></a>

```go
PolicyTag *string
```

- *Type:* *string

Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#policy_tag GoogleBigqueryDatapolicyDataPolicy#policy_tag}

---

##### `DataMaskingPolicy`<sup>Optional</sup> <a name="DataMaskingPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataMaskingPolicy"></a>

```go
DataMaskingPolicy GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

data_masking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#data_masking_policy GoogleBigqueryDatapolicyDataPolicy#data_masking_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#id GoogleBigqueryDatapolicyDataPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#project GoogleBigqueryDatapolicyDataPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleBigqueryDatapolicyDataPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#timeouts GoogleBigqueryDatapolicyDataPolicy#timeouts}

---

### GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy <a name="GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatapolicydatapolicy"

&googlebigquerydatapolicydatapolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy {
	PredefinedExpression: *string,
	Routine: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.property.predefinedExpression">PredefinedExpression</a></code> | <code>*string</code> | The available masking rules. Learn more here: https://cloud.google.com/bigquery/docs/column-data-masking-intro#masking_options. Possible values: ["SHA256", "ALWAYS_NULL", "DEFAULT_MASKING_VALUE", "LAST_FOUR_CHARACTERS", "FIRST_FOUR_CHARACTERS", "EMAIL_MASK", "DATE_YEAR_MASK"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.property.routine">Routine</a></code> | <code>*string</code> | The name of the BigQuery routine that contains the custom masking routine, in the format of projects/{projectNumber}/datasets/{dataset_id}/routines/{routine_id}. |

---

##### `PredefinedExpression`<sup>Optional</sup> <a name="PredefinedExpression" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.property.predefinedExpression"></a>

```go
PredefinedExpression *string
```

- *Type:* *string

The available masking rules. Learn more here: https://cloud.google.com/bigquery/docs/column-data-masking-intro#masking_options. Possible values: ["SHA256", "ALWAYS_NULL", "DEFAULT_MASKING_VALUE", "LAST_FOUR_CHARACTERS", "FIRST_FOUR_CHARACTERS", "EMAIL_MASK", "DATE_YEAR_MASK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#predefined_expression GoogleBigqueryDatapolicyDataPolicy#predefined_expression}

---

##### `Routine`<sup>Optional</sup> <a name="Routine" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.property.routine"></a>

```go
Routine *string
```

- *Type:* *string

The name of the BigQuery routine that contains the custom masking routine, in the format of projects/{projectNumber}/datasets/{dataset_id}/routines/{routine_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#routine GoogleBigqueryDatapolicyDataPolicy#routine}

---

### GoogleBigqueryDatapolicyDataPolicyTimeouts <a name="GoogleBigqueryDatapolicyDataPolicyTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatapolicydatapolicy"

&googlebigquerydatapolicydatapolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#create GoogleBigqueryDatapolicyDataPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#delete GoogleBigqueryDatapolicyDataPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#update GoogleBigqueryDatapolicyDataPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#create GoogleBigqueryDatapolicyDataPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#delete GoogleBigqueryDatapolicyDataPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_bigquery_datapolicy_data_policy#update GoogleBigqueryDatapolicyDataPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference <a name="GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatapolicydatapolicy"

googlebigquerydatapolicydatapolicy.NewGoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression">ResetPredefinedExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetRoutine">ResetRoutine</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPredefinedExpression` <a name="ResetPredefinedExpression" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression"></a>

```go
func ResetPredefinedExpression()
```

##### `ResetRoutine` <a name="ResetRoutine" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetRoutine"></a>

```go
func ResetRoutine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput">PredefinedExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routineInput">RoutineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression">PredefinedExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routine">Routine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PredefinedExpressionInput`<sup>Optional</sup> <a name="PredefinedExpressionInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput"></a>

```go
func PredefinedExpressionInput() *string
```

- *Type:* *string

---

##### `RoutineInput`<sup>Optional</sup> <a name="RoutineInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routineInput"></a>

```go
func RoutineInput() *string
```

- *Type:* *string

---

##### `PredefinedExpression`<sup>Required</sup> <a name="PredefinedExpression" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression"></a>

```go
func PredefinedExpression() *string
```

- *Type:* *string

---

##### `Routine`<sup>Required</sup> <a name="Routine" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routine"></a>

```go
func Routine() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---


### GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference <a name="GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatapolicydatapolicy"

googlebigquerydatapolicydatapolicy.NewGoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



