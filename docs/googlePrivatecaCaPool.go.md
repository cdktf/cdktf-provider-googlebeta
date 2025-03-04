# `googlePrivatecaCaPool` Submodule <a name="`googlePrivatecaCaPool` Submodule" id="@cdktf/provider-google-beta.googlePrivatecaCaPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePrivatecaCaPool <a name="GooglePrivatecaCaPool" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool google_privateca_ca_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPool(scope Construct, id *string, config GooglePrivatecaCaPoolConfig) GooglePrivatecaCaPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig">GooglePrivatecaCaPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig">GooglePrivatecaCaPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putIssuancePolicy">PutIssuancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putPublishingOptions">PutPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetIssuancePolicy">ResetIssuancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetPublishingOptions">ResetPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIssuancePolicy` <a name="PutIssuancePolicy" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putIssuancePolicy"></a>

```go
func PutIssuancePolicy(value GooglePrivatecaCaPoolIssuancePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putIssuancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a>

---

##### `PutPublishingOptions` <a name="PutPublishingOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putPublishingOptions"></a>

```go
func PutPublishingOptions(value GooglePrivatecaCaPoolPublishingOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putPublishingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putTimeouts"></a>

```go
func PutTimeouts(value GooglePrivatecaCaPoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts">GooglePrivatecaCaPoolTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetId"></a>

```go
func ResetId()
```

##### `ResetIssuancePolicy` <a name="ResetIssuancePolicy" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetIssuancePolicy"></a>

```go
func ResetIssuancePolicy()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPublishingOptions` <a name="ResetPublishingOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetPublishingOptions"></a>

```go
func ResetPublishingOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GooglePrivatecaCaPool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.GooglePrivatecaCaPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.GooglePrivatecaCaPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.GooglePrivatecaCaPool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.GooglePrivatecaCaPool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GooglePrivatecaCaPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GooglePrivatecaCaPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GooglePrivatecaCaPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GooglePrivatecaCaPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.issuancePolicy">IssuancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference">GooglePrivatecaCaPoolIssuancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.publishingOptions">PublishingOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference">GooglePrivatecaCaPoolPublishingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference">GooglePrivatecaCaPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.issuancePolicyInput">IssuancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.publishingOptionsInput">PublishingOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IssuancePolicy`<sup>Required</sup> <a name="IssuancePolicy" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.issuancePolicy"></a>

```go
func IssuancePolicy() GooglePrivatecaCaPoolIssuancePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference">GooglePrivatecaCaPoolIssuancePolicyOutputReference</a>

---

##### `PublishingOptions`<sup>Required</sup> <a name="PublishingOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.publishingOptions"></a>

```go
func PublishingOptions() GooglePrivatecaCaPoolPublishingOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference">GooglePrivatecaCaPoolPublishingOptionsOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.timeouts"></a>

```go
func Timeouts() GooglePrivatecaCaPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference">GooglePrivatecaCaPoolTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuancePolicyInput`<sup>Optional</sup> <a name="IssuancePolicyInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.issuancePolicyInput"></a>

```go
func IssuancePolicyInput() GooglePrivatecaCaPoolIssuancePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PublishingOptionsInput`<sup>Optional</sup> <a name="PublishingOptionsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.publishingOptionsInput"></a>

```go
func PublishingOptionsInput() GooglePrivatecaCaPoolPublishingOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a>

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePrivatecaCaPoolConfig <a name="GooglePrivatecaCaPoolConfig" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Tier: *string,
	Id: *string,
	IssuancePolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy,
	Labels: *map[string]*string,
	Project: *string,
	PublishingOptions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.location">Location</a></code> | <code>*string</code> | Location of the CaPool. A full list of valid locations can be found by running 'gcloud privateca locations list'. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.name">Name</a></code> | <code>*string</code> | The name for this CaPool. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.tier">Tier</a></code> | <code>*string</code> | The Tier of this CaPool. Possible values: ["ENTERPRISE", "DEVOPS"]. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#id GooglePrivatecaCaPool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.issuancePolicy">IssuancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a></code> | issuance_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#project GooglePrivatecaCaPool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.publishingOptions">PublishingOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a></code> | publishing_options block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts">GooglePrivatecaCaPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location of the CaPool. A full list of valid locations can be found by running 'gcloud privateca locations list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#location GooglePrivatecaCaPool#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for this CaPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#name GooglePrivatecaCaPool#name}

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

The Tier of this CaPool. Possible values: ["ENTERPRISE", "DEVOPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#tier GooglePrivatecaCaPool#tier}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#id GooglePrivatecaCaPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuancePolicy`<sup>Optional</sup> <a name="IssuancePolicy" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.issuancePolicy"></a>

```go
IssuancePolicy GooglePrivatecaCaPoolIssuancePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a>

issuance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#issuance_policy GooglePrivatecaCaPool#issuance_policy}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels with user-defined metadata.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#labels GooglePrivatecaCaPool#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#project GooglePrivatecaCaPool#project}.

---

##### `PublishingOptions`<sup>Optional</sup> <a name="PublishingOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.publishingOptions"></a>

```go
PublishingOptions GooglePrivatecaCaPoolPublishingOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a>

publishing_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#publishing_options GooglePrivatecaCaPool#publishing_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.timeouts"></a>

```go
Timeouts GooglePrivatecaCaPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts">GooglePrivatecaCaPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#timeouts GooglePrivatecaCaPool#timeouts}

---

### GooglePrivatecaCaPoolIssuancePolicy <a name="GooglePrivatecaCaPoolIssuancePolicy" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolIssuancePolicy {
	AllowedIssuanceModes: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes,
	AllowedKeyTypes: interface{},
	BaselineValues: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues,
	IdentityConstraints: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints,
	MaximumLifetime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.allowedIssuanceModes">AllowedIssuanceModes</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a></code> | allowed_issuance_modes block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.allowedKeyTypes">AllowedKeyTypes</a></code> | <code>interface{}</code> | allowed_key_types block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.baselineValues">BaselineValues</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a></code> | baseline_values block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.identityConstraints">IdentityConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a></code> | identity_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.maximumLifetime">MaximumLifetime</a></code> | <code>*string</code> | The maximum lifetime allowed for issued Certificates. |

---

##### `AllowedIssuanceModes`<sup>Optional</sup> <a name="AllowedIssuanceModes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.allowedIssuanceModes"></a>

```go
AllowedIssuanceModes GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

allowed_issuance_modes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#allowed_issuance_modes GooglePrivatecaCaPool#allowed_issuance_modes}

---

##### `AllowedKeyTypes`<sup>Optional</sup> <a name="AllowedKeyTypes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.allowedKeyTypes"></a>

```go
AllowedKeyTypes interface{}
```

- *Type:* interface{}

allowed_key_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#allowed_key_types GooglePrivatecaCaPool#allowed_key_types}

---

##### `BaselineValues`<sup>Optional</sup> <a name="BaselineValues" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.baselineValues"></a>

```go
BaselineValues GooglePrivatecaCaPoolIssuancePolicyBaselineValues
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a>

baseline_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#baseline_values GooglePrivatecaCaPool#baseline_values}

---

##### `IdentityConstraints`<sup>Optional</sup> <a name="IdentityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.identityConstraints"></a>

```go
IdentityConstraints GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

identity_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#identity_constraints GooglePrivatecaCaPool#identity_constraints}

---

##### `MaximumLifetime`<sup>Optional</sup> <a name="MaximumLifetime" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.maximumLifetime"></a>

```go
MaximumLifetime *string
```

- *Type:* *string

The maximum lifetime allowed for issued Certificates.

Note that if the issuing CertificateAuthority
expires before a Certificate's requested maximumLifetime, the effective lifetime will be explicitly truncated to match it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#maximum_lifetime GooglePrivatecaCaPool#maximum_lifetime}

---

### GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes {
	AllowConfigBasedIssuance: interface{},
	AllowCsrBasedIssuance: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowConfigBasedIssuance">AllowConfigBasedIssuance</a></code> | <code>interface{}</code> | When true, allows callers to create Certificates by specifying a CertificateConfig. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowCsrBasedIssuance">AllowCsrBasedIssuance</a></code> | <code>interface{}</code> | When true, allows callers to create Certificates by specifying a CSR. |

---

##### `AllowConfigBasedIssuance`<sup>Required</sup> <a name="AllowConfigBasedIssuance" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowConfigBasedIssuance"></a>

```go
AllowConfigBasedIssuance interface{}
```

- *Type:* interface{}

When true, allows callers to create Certificates by specifying a CertificateConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#allow_config_based_issuance GooglePrivatecaCaPool#allow_config_based_issuance}

---

##### `AllowCsrBasedIssuance`<sup>Required</sup> <a name="AllowCsrBasedIssuance" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowCsrBasedIssuance"></a>

```go
AllowCsrBasedIssuance interface{}
```

- *Type:* interface{}

When true, allows callers to create Certificates by specifying a CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#allow_csr_based_issuance GooglePrivatecaCaPool#allow_csr_based_issuance}

---

### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes {
	EllipticCurve: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve,
	Rsa: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.ellipticCurve">EllipticCurve</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a></code> | elliptic_curve block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.rsa">Rsa</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a></code> | rsa block. |

---

##### `EllipticCurve`<sup>Optional</sup> <a name="EllipticCurve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.ellipticCurve"></a>

```go
EllipticCurve GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

elliptic_curve block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#elliptic_curve GooglePrivatecaCaPool#elliptic_curve}

---

##### `Rsa`<sup>Optional</sup> <a name="Rsa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.rsa"></a>

```go
Rsa GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

rsa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#rsa GooglePrivatecaCaPool#rsa}

---

### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve {
	SignatureAlgorithm: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | The algorithm used. Possible values: ["ECDSA_P256", "ECDSA_P384", "EDDSA_25519"]. |

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.property.signatureAlgorithm"></a>

```go
SignatureAlgorithm *string
```

- *Type:* *string

The algorithm used. Possible values: ["ECDSA_P256", "ECDSA_P384", "EDDSA_25519"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#signature_algorithm GooglePrivatecaCaPool#signature_algorithm}

---

### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa {
	MaxModulusSize: *string,
	MinModulusSize: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.maxModulusSize">MaxModulusSize</a></code> | <code>*string</code> | The maximum allowed RSA modulus size, in bits. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.minModulusSize">MinModulusSize</a></code> | <code>*string</code> | The minimum allowed RSA modulus size, in bits. |

---

##### `MaxModulusSize`<sup>Optional</sup> <a name="MaxModulusSize" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.maxModulusSize"></a>

```go
MaxModulusSize *string
```

- *Type:* *string

The maximum allowed RSA modulus size, in bits.

If this is not set, or if set to zero, the
service will not enforce an explicit upper bound on RSA modulus sizes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#max_modulus_size GooglePrivatecaCaPool#max_modulus_size}

---

##### `MinModulusSize`<sup>Optional</sup> <a name="MinModulusSize" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.minModulusSize"></a>

```go
MinModulusSize *string
```

- *Type:* *string

The minimum allowed RSA modulus size, in bits.

If this is not set, or if set to zero, the
service-level min RSA modulus size will continue to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#min_modulus_size GooglePrivatecaCaPool#min_modulus_size}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValues <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValues" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues {
	CaOptions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions,
	KeyUsage: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage,
	AdditionalExtensions: interface{},
	AiaOcspServers: *[]*string,
	NameConstraints: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints,
	PolicyIds: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.caOptions">CaOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a></code> | ca_options block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.keyUsage">KeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a></code> | key_usage block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.additionalExtensions">AdditionalExtensions</a></code> | <code>interface{}</code> | additional_extensions block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.aiaOcspServers">AiaOcspServers</a></code> | <code>*[]*string</code> | Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.nameConstraints">NameConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a></code> | name_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.policyIds">PolicyIds</a></code> | <code>interface{}</code> | policy_ids block. |

---

##### `CaOptions`<sup>Required</sup> <a name="CaOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.caOptions"></a>

```go
CaOptions GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

ca_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#ca_options GooglePrivatecaCaPool#ca_options}

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.keyUsage"></a>

```go
KeyUsage GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#key_usage GooglePrivatecaCaPool#key_usage}

---

##### `AdditionalExtensions`<sup>Optional</sup> <a name="AdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.additionalExtensions"></a>

```go
AdditionalExtensions interface{}
```

- *Type:* interface{}

additional_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#additional_extensions GooglePrivatecaCaPool#additional_extensions}

---

##### `AiaOcspServers`<sup>Optional</sup> <a name="AiaOcspServers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.aiaOcspServers"></a>

```go
AiaOcspServers *[]*string
```

- *Type:* *[]*string

Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#aia_ocsp_servers GooglePrivatecaCaPool#aia_ocsp_servers}

---

##### `NameConstraints`<sup>Optional</sup> <a name="NameConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.nameConstraints"></a>

```go
NameConstraints GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

name_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#name_constraints GooglePrivatecaCaPool#name_constraints}

---

##### `PolicyIds`<sup>Optional</sup> <a name="PolicyIds" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.policyIds"></a>

```go
PolicyIds interface{}
```

- *Type:* interface{}

policy_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#policy_ids GooglePrivatecaCaPool#policy_ids}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions {
	Critical: interface{},
	ObjectId: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.critical">Critical</a></code> | <code>interface{}</code> | Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error). |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.objectId">ObjectId</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a></code> | object_id block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.value">Value</a></code> | <code>*string</code> | The value of this X.509 extension. A base64-encoded string. |

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.critical"></a>

```go
Critical interface{}
```

- *Type:* interface{}

Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#critical GooglePrivatecaCaPool#critical}

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.objectId"></a>

```go
ObjectId GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

object_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#object_id GooglePrivatecaCaPool#object_id}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of this X.509 extension. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#value GooglePrivatecaCaPool#value}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId {
	ObjectIdPath: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.property.objectIdPath">ObjectIdPath</a></code> | <code>*[]*f64</code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.property.objectIdPath"></a>

```go
ObjectIdPath *[]*f64
```

- *Type:* *[]*f64

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#object_id_path GooglePrivatecaCaPool#object_id_path}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions {
	IsCa: interface{},
	MaxIssuerPathLength: *f64,
	NonCa: interface{},
	ZeroMaxIssuerPathLength: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.isCa">IsCa</a></code> | <code>interface{}</code> | When true, the "CA" in Basic Constraints extension will be set to true. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.maxIssuerPathLength">MaxIssuerPathLength</a></code> | <code>*f64</code> | Refers to the "path length constraint" in Basic Constraints extension. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.nonCa">NonCa</a></code> | <code>interface{}</code> | When true, the "CA" in Basic Constraints extension will be set to false. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.zeroMaxIssuerPathLength">ZeroMaxIssuerPathLength</a></code> | <code>interface{}</code> | When true, the "path length constraint" in Basic Constraints extension will be set to 0. |

---

##### `IsCa`<sup>Optional</sup> <a name="IsCa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.isCa"></a>

```go
IsCa interface{}
```

- *Type:* interface{}

When true, the "CA" in Basic Constraints extension will be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#is_ca GooglePrivatecaCaPool#is_ca}

---

##### `MaxIssuerPathLength`<sup>Optional</sup> <a name="MaxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.maxIssuerPathLength"></a>

```go
MaxIssuerPathLength *f64
```

- *Type:* *f64

Refers to the "path length constraint" in Basic Constraints extension.

For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#max_issuer_path_length GooglePrivatecaCaPool#max_issuer_path_length}

---

##### `NonCa`<sup>Optional</sup> <a name="NonCa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.nonCa"></a>

```go
NonCa interface{}
```

- *Type:* interface{}

When true, the "CA" in Basic Constraints extension will be set to false.

If both 'is_ca' and 'non_ca' are unset, the extension will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#non_ca GooglePrivatecaCaPool#non_ca}

---

##### `ZeroMaxIssuerPathLength`<sup>Optional</sup> <a name="ZeroMaxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.zeroMaxIssuerPathLength"></a>

```go
ZeroMaxIssuerPathLength interface{}
```

- *Type:* interface{}

When true, the "path length constraint" in Basic Constraints extension will be set to 0.

if both 'max_issuer_path_length' and 'zero_max_issuer_path_length' are unset,
the max path length will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#zero_max_issuer_path_length GooglePrivatecaCaPool#zero_max_issuer_path_length}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage {
	BaseKeyUsage: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage,
	ExtendedKeyUsage: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage,
	UnknownExtendedKeyUsages: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.baseKeyUsage">BaseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a></code> | base_key_usage block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a></code> | extended_key_usage block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.unknownExtendedKeyUsages">UnknownExtendedKeyUsages</a></code> | <code>interface{}</code> | unknown_extended_key_usages block. |

---

##### `BaseKeyUsage`<sup>Required</sup> <a name="BaseKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.baseKeyUsage"></a>

```go
BaseKeyUsage GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

base_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#base_key_usage GooglePrivatecaCaPool#base_key_usage}

---

##### `ExtendedKeyUsage`<sup>Required</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.extendedKeyUsage"></a>

```go
ExtendedKeyUsage GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

extended_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#extended_key_usage GooglePrivatecaCaPool#extended_key_usage}

---

##### `UnknownExtendedKeyUsages`<sup>Optional</sup> <a name="UnknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.unknownExtendedKeyUsages"></a>

```go
UnknownExtendedKeyUsages interface{}
```

- *Type:* interface{}

unknown_extended_key_usages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#unknown_extended_key_usages GooglePrivatecaCaPool#unknown_extended_key_usages}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage {
	CertSign: interface{},
	ContentCommitment: interface{},
	CrlSign: interface{},
	DataEncipherment: interface{},
	DecipherOnly: interface{},
	DigitalSignature: interface{},
	EncipherOnly: interface{},
	KeyAgreement: interface{},
	KeyEncipherment: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.certSign">CertSign</a></code> | <code>interface{}</code> | The key may be used to sign certificates. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.contentCommitment">ContentCommitment</a></code> | <code>interface{}</code> | The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.crlSign">CrlSign</a></code> | <code>interface{}</code> | The key may be used sign certificate revocation lists. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.dataEncipherment">DataEncipherment</a></code> | <code>interface{}</code> | The key may be used to encipher data. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.decipherOnly">DecipherOnly</a></code> | <code>interface{}</code> | The key may be used to decipher only. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.digitalSignature">DigitalSignature</a></code> | <code>interface{}</code> | The key may be used for digital signatures. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.encipherOnly">EncipherOnly</a></code> | <code>interface{}</code> | The key may be used to encipher only. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyAgreement">KeyAgreement</a></code> | <code>interface{}</code> | The key may be used in a key agreement protocol. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyEncipherment">KeyEncipherment</a></code> | <code>interface{}</code> | The key may be used to encipher other keys. |

---

##### `CertSign`<sup>Optional</sup> <a name="CertSign" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.certSign"></a>

```go
CertSign interface{}
```

- *Type:* interface{}

The key may be used to sign certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#cert_sign GooglePrivatecaCaPool#cert_sign}

---

##### `ContentCommitment`<sup>Optional</sup> <a name="ContentCommitment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.contentCommitment"></a>

```go
ContentCommitment interface{}
```

- *Type:* interface{}

The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#content_commitment GooglePrivatecaCaPool#content_commitment}

---

##### `CrlSign`<sup>Optional</sup> <a name="CrlSign" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.crlSign"></a>

```go
CrlSign interface{}
```

- *Type:* interface{}

The key may be used sign certificate revocation lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#crl_sign GooglePrivatecaCaPool#crl_sign}

---

##### `DataEncipherment`<sup>Optional</sup> <a name="DataEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.dataEncipherment"></a>

```go
DataEncipherment interface{}
```

- *Type:* interface{}

The key may be used to encipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#data_encipherment GooglePrivatecaCaPool#data_encipherment}

---

##### `DecipherOnly`<sup>Optional</sup> <a name="DecipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.decipherOnly"></a>

```go
DecipherOnly interface{}
```

- *Type:* interface{}

The key may be used to decipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#decipher_only GooglePrivatecaCaPool#decipher_only}

---

##### `DigitalSignature`<sup>Optional</sup> <a name="DigitalSignature" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.digitalSignature"></a>

```go
DigitalSignature interface{}
```

- *Type:* interface{}

The key may be used for digital signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#digital_signature GooglePrivatecaCaPool#digital_signature}

---

##### `EncipherOnly`<sup>Optional</sup> <a name="EncipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.encipherOnly"></a>

```go
EncipherOnly interface{}
```

- *Type:* interface{}

The key may be used to encipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#encipher_only GooglePrivatecaCaPool#encipher_only}

---

##### `KeyAgreement`<sup>Optional</sup> <a name="KeyAgreement" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyAgreement"></a>

```go
KeyAgreement interface{}
```

- *Type:* interface{}

The key may be used in a key agreement protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#key_agreement GooglePrivatecaCaPool#key_agreement}

---

##### `KeyEncipherment`<sup>Optional</sup> <a name="KeyEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyEncipherment"></a>

```go
KeyEncipherment interface{}
```

- *Type:* interface{}

The key may be used to encipher other keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#key_encipherment GooglePrivatecaCaPool#key_encipherment}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage {
	ClientAuth: interface{},
	CodeSigning: interface{},
	EmailProtection: interface{},
	OcspSigning: interface{},
	ServerAuth: interface{},
	TimeStamping: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.clientAuth">ClientAuth</a></code> | <code>interface{}</code> | Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.codeSigning">CodeSigning</a></code> | <code>interface{}</code> | Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.emailProtection">EmailProtection</a></code> | <code>interface{}</code> | Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.ocspSigning">OcspSigning</a></code> | <code>interface{}</code> | Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.serverAuth">ServerAuth</a></code> | <code>interface{}</code> | Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.timeStamping">TimeStamping</a></code> | <code>interface{}</code> | Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time". |

---

##### `ClientAuth`<sup>Optional</sup> <a name="ClientAuth" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.clientAuth"></a>

```go
ClientAuth interface{}
```

- *Type:* interface{}

Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#client_auth GooglePrivatecaCaPool#client_auth}

---

##### `CodeSigning`<sup>Optional</sup> <a name="CodeSigning" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.codeSigning"></a>

```go
CodeSigning interface{}
```

- *Type:* interface{}

Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#code_signing GooglePrivatecaCaPool#code_signing}

---

##### `EmailProtection`<sup>Optional</sup> <a name="EmailProtection" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.emailProtection"></a>

```go
EmailProtection interface{}
```

- *Type:* interface{}

Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#email_protection GooglePrivatecaCaPool#email_protection}

---

##### `OcspSigning`<sup>Optional</sup> <a name="OcspSigning" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.ocspSigning"></a>

```go
OcspSigning interface{}
```

- *Type:* interface{}

Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#ocsp_signing GooglePrivatecaCaPool#ocsp_signing}

---

##### `ServerAuth`<sup>Optional</sup> <a name="ServerAuth" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.serverAuth"></a>

```go
ServerAuth interface{}
```

- *Type:* interface{}

Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#server_auth GooglePrivatecaCaPool#server_auth}

---

##### `TimeStamping`<sup>Optional</sup> <a name="TimeStamping" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.timeStamping"></a>

```go
TimeStamping interface{}
```

- *Type:* interface{}

Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#time_stamping GooglePrivatecaCaPool#time_stamping}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages {
	ObjectIdPath: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.property.objectIdPath">ObjectIdPath</a></code> | <code>*[]*f64</code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.property.objectIdPath"></a>

```go
ObjectIdPath *[]*f64
```

- *Type:* *[]*f64

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#object_id_path GooglePrivatecaCaPool#object_id_path}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints {
	Critical: interface{},
	ExcludedDnsNames: *[]*string,
	ExcludedEmailAddresses: *[]*string,
	ExcludedIpRanges: *[]*string,
	ExcludedUris: *[]*string,
	PermittedDnsNames: *[]*string,
	PermittedEmailAddresses: *[]*string,
	PermittedIpRanges: *[]*string,
	PermittedUris: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.critical">Critical</a></code> | <code>interface{}</code> | Indicates whether or not the name constraints are marked critical. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedDnsNames">ExcludedDnsNames</a></code> | <code>*[]*string</code> | Contains excluded DNS names. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedEmailAddresses">ExcludedEmailAddresses</a></code> | <code>*[]*string</code> | Contains the excluded email addresses. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedIpRanges">ExcludedIpRanges</a></code> | <code>*[]*string</code> | Contains the excluded IP ranges. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedUris">ExcludedUris</a></code> | <code>*[]*string</code> | Contains the excluded URIs that apply to the host part of the name. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedDnsNames">PermittedDnsNames</a></code> | <code>*[]*string</code> | Contains permitted DNS names. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedEmailAddresses">PermittedEmailAddresses</a></code> | <code>*[]*string</code> | Contains the permitted email addresses. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedIpRanges">PermittedIpRanges</a></code> | <code>*[]*string</code> | Contains the permitted IP ranges. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedUris">PermittedUris</a></code> | <code>*[]*string</code> | Contains the permitted URIs that apply to the host part of the name. |

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.critical"></a>

```go
Critical interface{}
```

- *Type:* interface{}

Indicates whether or not the name constraints are marked critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#critical GooglePrivatecaCaPool#critical}

---

##### `ExcludedDnsNames`<sup>Optional</sup> <a name="ExcludedDnsNames" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedDnsNames"></a>

```go
ExcludedDnsNames *[]*string
```

- *Type:* *[]*string

Contains excluded DNS names.

Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, 'example.com', 'www.example.com', 'www.sub.example.com'
would satisfy 'example.com' while 'example1.com' does not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#excluded_dns_names GooglePrivatecaCaPool#excluded_dns_names}

---

##### `ExcludedEmailAddresses`<sup>Optional</sup> <a name="ExcludedEmailAddresses" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedEmailAddresses"></a>

```go
ExcludedEmailAddresses *[]*string
```

- *Type:* *[]*string

Contains the excluded email addresses.

The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. '.example.com') to indicate
all email addresses in that domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#excluded_email_addresses GooglePrivatecaCaPool#excluded_email_addresses}

---

##### `ExcludedIpRanges`<sup>Optional</sup> <a name="ExcludedIpRanges" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedIpRanges"></a>

```go
ExcludedIpRanges *[]*string
```

- *Type:* *[]*string

Contains the excluded IP ranges.

For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#excluded_ip_ranges GooglePrivatecaCaPool#excluded_ip_ranges}

---

##### `ExcludedUris`<sup>Optional</sup> <a name="ExcludedUris" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedUris"></a>

```go
ExcludedUris *[]*string
```

- *Type:* *[]*string

Contains the excluded URIs that apply to the host part of the name.

The value can be a hostname or a domain with a
leading period (like '.example.com')

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#excluded_uris GooglePrivatecaCaPool#excluded_uris}

---

##### `PermittedDnsNames`<sup>Optional</sup> <a name="PermittedDnsNames" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedDnsNames"></a>

```go
PermittedDnsNames *[]*string
```

- *Type:* *[]*string

Contains permitted DNS names.

Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, 'example.com', 'www.example.com', 'www.sub.example.com'
would satisfy 'example.com' while 'example1.com' does not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#permitted_dns_names GooglePrivatecaCaPool#permitted_dns_names}

---

##### `PermittedEmailAddresses`<sup>Optional</sup> <a name="PermittedEmailAddresses" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedEmailAddresses"></a>

```go
PermittedEmailAddresses *[]*string
```

- *Type:* *[]*string

Contains the permitted email addresses.

The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. '.example.com') to indicate
all email addresses in that domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#permitted_email_addresses GooglePrivatecaCaPool#permitted_email_addresses}

---

##### `PermittedIpRanges`<sup>Optional</sup> <a name="PermittedIpRanges" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedIpRanges"></a>

```go
PermittedIpRanges *[]*string
```

- *Type:* *[]*string

Contains the permitted IP ranges.

For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#permitted_ip_ranges GooglePrivatecaCaPool#permitted_ip_ranges}

---

##### `PermittedUris`<sup>Optional</sup> <a name="PermittedUris" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedUris"></a>

```go
PermittedUris *[]*string
```

- *Type:* *[]*string

Contains the permitted URIs that apply to the host part of the name.

The value can be a hostname or a domain with a
leading period (like '.example.com')

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#permitted_uris GooglePrivatecaCaPool#permitted_uris}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds {
	ObjectIdPath: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.property.objectIdPath">ObjectIdPath</a></code> | <code>*[]*f64</code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.property.objectIdPath"></a>

```go
ObjectIdPath *[]*f64
```

- *Type:* *[]*f64

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#object_id_path GooglePrivatecaCaPool#object_id_path}

---

### GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints <a name="GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints {
	AllowSubjectAltNamesPassthrough: interface{},
	AllowSubjectPassthrough: interface{},
	CelExpression: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectAltNamesPassthrough">AllowSubjectAltNamesPassthrough</a></code> | <code>interface{}</code> | If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectPassthrough">AllowSubjectPassthrough</a></code> | <code>interface{}</code> | If this is set, the Subject field may be copied from a certificate request into the signed certificate. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.property.celExpression">CelExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a></code> | cel_expression block. |

---

##### `AllowSubjectAltNamesPassthrough`<sup>Required</sup> <a name="AllowSubjectAltNamesPassthrough" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectAltNamesPassthrough"></a>

```go
AllowSubjectAltNamesPassthrough interface{}
```

- *Type:* interface{}

If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate.

Otherwise, the requested SubjectAltNames will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#allow_subject_alt_names_passthrough GooglePrivatecaCaPool#allow_subject_alt_names_passthrough}

---

##### `AllowSubjectPassthrough`<sup>Required</sup> <a name="AllowSubjectPassthrough" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectPassthrough"></a>

```go
AllowSubjectPassthrough interface{}
```

- *Type:* interface{}

If this is set, the Subject field may be copied from a certificate request into the signed certificate.

Otherwise, the requested Subject will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#allow_subject_passthrough GooglePrivatecaCaPool#allow_subject_passthrough}

---

##### `CelExpression`<sup>Optional</sup> <a name="CelExpression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.property.celExpression"></a>

```go
CelExpression GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

cel_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#cel_expression GooglePrivatecaCaPool#cel_expression}

---

### GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression <a name="GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression {
	Expression: *string,
	Description: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.description">Description</a></code> | <code>*string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.location">Location</a></code> | <code>*string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.title">Title</a></code> | <code>*string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#expression GooglePrivatecaCaPool#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the expression.

This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#description GooglePrivatecaCaPool#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.location"></a>

```go
Location *string
```

- *Type:* *string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#location GooglePrivatecaCaPool#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#title GooglePrivatecaCaPool#title}

---

### GooglePrivatecaCaPoolPublishingOptions <a name="GooglePrivatecaCaPoolPublishingOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolPublishingOptions {
	PublishCaCert: interface{},
	PublishCrl: interface{},
	EncodingFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.property.publishCaCert">PublishCaCert</a></code> | <code>interface{}</code> | When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access" X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding X.509 extension will not be written in issued certificates. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.property.publishCrl">PublishCrl</a></code> | <code>interface{}</code> | When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.property.encodingFormat">EncodingFormat</a></code> | <code>*string</code> | Specifies the encoding format of each CertificateAuthority's CA certificate and CRLs. |

---

##### `PublishCaCert`<sup>Required</sup> <a name="PublishCaCert" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.property.publishCaCert"></a>

```go
PublishCaCert interface{}
```

- *Type:* interface{}

When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access" X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding X.509 extension will not be written in issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#publish_ca_cert GooglePrivatecaCaPool#publish_ca_cert}

---

##### `PublishCrl`<sup>Required</sup> <a name="PublishCrl" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.property.publishCrl"></a>

```go
PublishCrl interface{}
```

- *Type:* interface{}

When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#publish_crl GooglePrivatecaCaPool#publish_crl}

---

##### `EncodingFormat`<sup>Optional</sup> <a name="EncodingFormat" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.property.encodingFormat"></a>

```go
EncodingFormat *string
```

- *Type:* *string

Specifies the encoding format of each CertificateAuthority's CA certificate and CRLs.

If this is omitted, CA certificates and CRLs
will be published in PEM. Possible values: ["PEM", "DER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#encoding_format GooglePrivatecaCaPool#encoding_format}

---

### GooglePrivatecaCaPoolTimeouts <a name="GooglePrivatecaCaPoolTimeouts" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

&googleprivatecacapool.GooglePrivatecaCaPoolTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#create GooglePrivatecaCaPool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#delete GooglePrivatecaCaPool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#update GooglePrivatecaCaPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#create GooglePrivatecaCaPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#delete GooglePrivatecaCaPool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_privateca_ca_pool#update GooglePrivatecaCaPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuanceInput">AllowConfigBasedIssuanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuanceInput">AllowCsrBasedIssuanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuance">AllowConfigBasedIssuance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuance">AllowCsrBasedIssuance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowConfigBasedIssuanceInput`<sup>Optional</sup> <a name="AllowConfigBasedIssuanceInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuanceInput"></a>

```go
func AllowConfigBasedIssuanceInput() interface{}
```

- *Type:* interface{}

---

##### `AllowCsrBasedIssuanceInput`<sup>Optional</sup> <a name="AllowCsrBasedIssuanceInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuanceInput"></a>

```go
func AllowCsrBasedIssuanceInput() interface{}
```

- *Type:* interface{}

---

##### `AllowConfigBasedIssuance`<sup>Required</sup> <a name="AllowConfigBasedIssuance" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuance"></a>

```go
func AllowConfigBasedIssuance() interface{}
```

- *Type:* interface{}

---

##### `AllowCsrBasedIssuance`<sup>Required</sup> <a name="AllowCsrBasedIssuance" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuance"></a>

```go
func AllowCsrBasedIssuance() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

---


### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithmInput">SignatureAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SignatureAlgorithmInput`<sup>Optional</sup> <a name="SignatureAlgorithmInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithmInput"></a>

```go
func SignatureAlgorithmInput() *string
```

- *Type:* *string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithm"></a>

```go
func SignatureAlgorithm() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

---


### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.get"></a>

```go
func Get(index *f64) GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putEllipticCurve">PutEllipticCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putRsa">PutRsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetEllipticCurve">ResetEllipticCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetRsa">ResetRsa</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEllipticCurve` <a name="PutEllipticCurve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putEllipticCurve"></a>

```go
func PutEllipticCurve(value GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putEllipticCurve.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

---

##### `PutRsa` <a name="PutRsa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putRsa"></a>

```go
func PutRsa(value GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putRsa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

---

##### `ResetEllipticCurve` <a name="ResetEllipticCurve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetEllipticCurve"></a>

```go
func ResetEllipticCurve()
```

##### `ResetRsa` <a name="ResetRsa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetRsa"></a>

```go
func ResetRsa()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurve">EllipticCurve</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsa">Rsa</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurveInput">EllipticCurveInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsaInput">RsaInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EllipticCurve`<sup>Required</sup> <a name="EllipticCurve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurve"></a>

```go
func EllipticCurve() GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference</a>

---

##### `Rsa`<sup>Required</sup> <a name="Rsa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsa"></a>

```go
func Rsa() GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference</a>

---

##### `EllipticCurveInput`<sup>Optional</sup> <a name="EllipticCurveInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurveInput"></a>

```go
func EllipticCurveInput() GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

---

##### `RsaInput`<sup>Optional</sup> <a name="RsaInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsaInput"></a>

```go
func RsaInput() GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMaxModulusSize">ResetMaxModulusSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMinModulusSize">ResetMinModulusSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxModulusSize` <a name="ResetMaxModulusSize" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMaxModulusSize"></a>

```go
func ResetMaxModulusSize()
```

##### `ResetMinModulusSize` <a name="ResetMinModulusSize" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMinModulusSize"></a>

```go
func ResetMinModulusSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSizeInput">MaxModulusSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSizeInput">MinModulusSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSize">MaxModulusSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSize">MinModulusSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxModulusSizeInput`<sup>Optional</sup> <a name="MaxModulusSizeInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSizeInput"></a>

```go
func MaxModulusSizeInput() *string
```

- *Type:* *string

---

##### `MinModulusSizeInput`<sup>Optional</sup> <a name="MinModulusSizeInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSizeInput"></a>

```go
func MinModulusSizeInput() *string
```

- *Type:* *string

---

##### `MaxModulusSize`<sup>Required</sup> <a name="MaxModulusSize" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSize"></a>

```go
func MaxModulusSize() *string
```

- *Type:* *string

---

##### `MinModulusSize`<sup>Required</sup> <a name="MinModulusSize" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSize"></a>

```go
func MinModulusSize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.get"></a>

```go
func Get(index *f64) GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput">ObjectIdPathInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectIdPathInput`<sup>Optional</sup> <a name="ObjectIdPathInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput"></a>

```go
func ObjectIdPathInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPath"></a>

```go
func ObjectIdPath() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.putObjectId">PutObjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutObjectId` <a name="PutObjectId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.putObjectId"></a>

```go
func PutObjectId(value GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.putObjectId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectId">ObjectId</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.criticalInput">CriticalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.critical">Critical</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectId"></a>

```go
func ObjectId() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference</a>

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.criticalInput"></a>

```go
func CriticalInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectIdInput"></a>

```go
func ObjectIdInput() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.critical"></a>

```go
func Critical() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetIsCa">ResetIsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetMaxIssuerPathLength">ResetMaxIssuerPathLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetNonCa">ResetNonCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetZeroMaxIssuerPathLength">ResetZeroMaxIssuerPathLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsCa` <a name="ResetIsCa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetIsCa"></a>

```go
func ResetIsCa()
```

##### `ResetMaxIssuerPathLength` <a name="ResetMaxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetMaxIssuerPathLength"></a>

```go
func ResetMaxIssuerPathLength()
```

##### `ResetNonCa` <a name="ResetNonCa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetNonCa"></a>

```go
func ResetNonCa()
```

##### `ResetZeroMaxIssuerPathLength` <a name="ResetZeroMaxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetZeroMaxIssuerPathLength"></a>

```go
func ResetZeroMaxIssuerPathLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCaInput">IsCaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLengthInput">MaxIssuerPathLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCaInput">NonCaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLengthInput">ZeroMaxIssuerPathLengthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCa">IsCa</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLength">MaxIssuerPathLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCa">NonCa</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLength">ZeroMaxIssuerPathLength</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsCaInput`<sup>Optional</sup> <a name="IsCaInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCaInput"></a>

```go
func IsCaInput() interface{}
```

- *Type:* interface{}

---

##### `MaxIssuerPathLengthInput`<sup>Optional</sup> <a name="MaxIssuerPathLengthInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLengthInput"></a>

```go
func MaxIssuerPathLengthInput() *f64
```

- *Type:* *f64

---

##### `NonCaInput`<sup>Optional</sup> <a name="NonCaInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCaInput"></a>

```go
func NonCaInput() interface{}
```

- *Type:* interface{}

---

##### `ZeroMaxIssuerPathLengthInput`<sup>Optional</sup> <a name="ZeroMaxIssuerPathLengthInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLengthInput"></a>

```go
func ZeroMaxIssuerPathLengthInput() interface{}
```

- *Type:* interface{}

---

##### `IsCa`<sup>Required</sup> <a name="IsCa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCa"></a>

```go
func IsCa() interface{}
```

- *Type:* interface{}

---

##### `MaxIssuerPathLength`<sup>Required</sup> <a name="MaxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLength"></a>

```go
func MaxIssuerPathLength() *f64
```

- *Type:* *f64

---

##### `NonCa`<sup>Required</sup> <a name="NonCa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCa"></a>

```go
func NonCa() interface{}
```

- *Type:* interface{}

---

##### `ZeroMaxIssuerPathLength`<sup>Required</sup> <a name="ZeroMaxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLength"></a>

```go
func ZeroMaxIssuerPathLength() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCertSign">ResetCertSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetContentCommitment">ResetContentCommitment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCrlSign">ResetCrlSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment">ResetDataEncipherment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly">ResetDecipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature">ResetDigitalSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly">ResetEncipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement">ResetKeyAgreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment">ResetKeyEncipherment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertSign` <a name="ResetCertSign" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCertSign"></a>

```go
func ResetCertSign()
```

##### `ResetContentCommitment` <a name="ResetContentCommitment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetContentCommitment"></a>

```go
func ResetContentCommitment()
```

##### `ResetCrlSign` <a name="ResetCrlSign" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCrlSign"></a>

```go
func ResetCrlSign()
```

##### `ResetDataEncipherment` <a name="ResetDataEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment"></a>

```go
func ResetDataEncipherment()
```

##### `ResetDecipherOnly` <a name="ResetDecipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly"></a>

```go
func ResetDecipherOnly()
```

##### `ResetDigitalSignature` <a name="ResetDigitalSignature" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature"></a>

```go
func ResetDigitalSignature()
```

##### `ResetEncipherOnly` <a name="ResetEncipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly"></a>

```go
func ResetEncipherOnly()
```

##### `ResetKeyAgreement` <a name="ResetKeyAgreement" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement"></a>

```go
func ResetKeyAgreement()
```

##### `ResetKeyEncipherment` <a name="ResetKeyEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment"></a>

```go
func ResetKeyEncipherment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSignInput">CertSignInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput">ContentCommitmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSignInput">CrlSignInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput">DataEnciphermentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput">DecipherOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput">DigitalSignatureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput">EncipherOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput">KeyAgreementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput">KeyEnciphermentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSign">CertSign</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitment">ContentCommitment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSign">CrlSign</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment">DataEncipherment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnly">DecipherOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignature">DigitalSignature</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnly">EncipherOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreement">KeyAgreement</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment">KeyEncipherment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertSignInput`<sup>Optional</sup> <a name="CertSignInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSignInput"></a>

```go
func CertSignInput() interface{}
```

- *Type:* interface{}

---

##### `ContentCommitmentInput`<sup>Optional</sup> <a name="ContentCommitmentInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput"></a>

```go
func ContentCommitmentInput() interface{}
```

- *Type:* interface{}

---

##### `CrlSignInput`<sup>Optional</sup> <a name="CrlSignInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSignInput"></a>

```go
func CrlSignInput() interface{}
```

- *Type:* interface{}

---

##### `DataEnciphermentInput`<sup>Optional</sup> <a name="DataEnciphermentInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput"></a>

```go
func DataEnciphermentInput() interface{}
```

- *Type:* interface{}

---

##### `DecipherOnlyInput`<sup>Optional</sup> <a name="DecipherOnlyInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput"></a>

```go
func DecipherOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `DigitalSignatureInput`<sup>Optional</sup> <a name="DigitalSignatureInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput"></a>

```go
func DigitalSignatureInput() interface{}
```

- *Type:* interface{}

---

##### `EncipherOnlyInput`<sup>Optional</sup> <a name="EncipherOnlyInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput"></a>

```go
func EncipherOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `KeyAgreementInput`<sup>Optional</sup> <a name="KeyAgreementInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput"></a>

```go
func KeyAgreementInput() interface{}
```

- *Type:* interface{}

---

##### `KeyEnciphermentInput`<sup>Optional</sup> <a name="KeyEnciphermentInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput"></a>

```go
func KeyEnciphermentInput() interface{}
```

- *Type:* interface{}

---

##### `CertSign`<sup>Required</sup> <a name="CertSign" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSign"></a>

```go
func CertSign() interface{}
```

- *Type:* interface{}

---

##### `ContentCommitment`<sup>Required</sup> <a name="ContentCommitment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitment"></a>

```go
func ContentCommitment() interface{}
```

- *Type:* interface{}

---

##### `CrlSign`<sup>Required</sup> <a name="CrlSign" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSign"></a>

```go
func CrlSign() interface{}
```

- *Type:* interface{}

---

##### `DataEncipherment`<sup>Required</sup> <a name="DataEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment"></a>

```go
func DataEncipherment() interface{}
```

- *Type:* interface{}

---

##### `DecipherOnly`<sup>Required</sup> <a name="DecipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnly"></a>

```go
func DecipherOnly() interface{}
```

- *Type:* interface{}

---

##### `DigitalSignature`<sup>Required</sup> <a name="DigitalSignature" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignature"></a>

```go
func DigitalSignature() interface{}
```

- *Type:* interface{}

---

##### `EncipherOnly`<sup>Required</sup> <a name="EncipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnly"></a>

```go
func EncipherOnly() interface{}
```

- *Type:* interface{}

---

##### `KeyAgreement`<sup>Required</sup> <a name="KeyAgreement" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreement"></a>

```go
func KeyAgreement() interface{}
```

- *Type:* interface{}

---

##### `KeyEncipherment`<sup>Required</sup> <a name="KeyEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment"></a>

```go
func KeyEncipherment() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetClientAuth">ResetClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning">ResetCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection">ResetEmailProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning">ResetOcspSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetServerAuth">ResetServerAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping">ResetTimeStamping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientAuth` <a name="ResetClientAuth" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetClientAuth"></a>

```go
func ResetClientAuth()
```

##### `ResetCodeSigning` <a name="ResetCodeSigning" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning"></a>

```go
func ResetCodeSigning()
```

##### `ResetEmailProtection` <a name="ResetEmailProtection" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection"></a>

```go
func ResetEmailProtection()
```

##### `ResetOcspSigning` <a name="ResetOcspSigning" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning"></a>

```go
func ResetOcspSigning()
```

##### `ResetServerAuth` <a name="ResetServerAuth" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetServerAuth"></a>

```go
func ResetServerAuth()
```

##### `ResetTimeStamping` <a name="ResetTimeStamping" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping"></a>

```go
func ResetTimeStamping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput">ClientAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput">CodeSigningInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput">EmailProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput">OcspSigningInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput">ServerAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput">TimeStampingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuth">ClientAuth</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigning">CodeSigning</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtection">EmailProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning">OcspSigning</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuth">ServerAuth</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStamping">TimeStamping</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientAuthInput`<sup>Optional</sup> <a name="ClientAuthInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput"></a>

```go
func ClientAuthInput() interface{}
```

- *Type:* interface{}

---

##### `CodeSigningInput`<sup>Optional</sup> <a name="CodeSigningInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput"></a>

```go
func CodeSigningInput() interface{}
```

- *Type:* interface{}

---

##### `EmailProtectionInput`<sup>Optional</sup> <a name="EmailProtectionInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput"></a>

```go
func EmailProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `OcspSigningInput`<sup>Optional</sup> <a name="OcspSigningInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput"></a>

```go
func OcspSigningInput() interface{}
```

- *Type:* interface{}

---

##### `ServerAuthInput`<sup>Optional</sup> <a name="ServerAuthInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput"></a>

```go
func ServerAuthInput() interface{}
```

- *Type:* interface{}

---

##### `TimeStampingInput`<sup>Optional</sup> <a name="TimeStampingInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput"></a>

```go
func TimeStampingInput() interface{}
```

- *Type:* interface{}

---

##### `ClientAuth`<sup>Required</sup> <a name="ClientAuth" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuth"></a>

```go
func ClientAuth() interface{}
```

- *Type:* interface{}

---

##### `CodeSigning`<sup>Required</sup> <a name="CodeSigning" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigning"></a>

```go
func CodeSigning() interface{}
```

- *Type:* interface{}

---

##### `EmailProtection`<sup>Required</sup> <a name="EmailProtection" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtection"></a>

```go
func EmailProtection() interface{}
```

- *Type:* interface{}

---

##### `OcspSigning`<sup>Required</sup> <a name="OcspSigning" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning"></a>

```go
func OcspSigning() interface{}
```

- *Type:* interface{}

---

##### `ServerAuth`<sup>Required</sup> <a name="ServerAuth" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuth"></a>

```go
func ServerAuth() interface{}
```

- *Type:* interface{}

---

##### `TimeStamping`<sup>Required</sup> <a name="TimeStamping" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStamping"></a>

```go
func TimeStamping() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putBaseKeyUsage">PutBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putExtendedKeyUsage">PutExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages">PutUnknownExtendedKeyUsages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resetUnknownExtendedKeyUsages">ResetUnknownExtendedKeyUsages</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBaseKeyUsage` <a name="PutBaseKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putBaseKeyUsage"></a>

```go
func PutBaseKeyUsage(value GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putBaseKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

---

##### `PutExtendedKeyUsage` <a name="PutExtendedKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putExtendedKeyUsage"></a>

```go
func PutExtendedKeyUsage(value GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putExtendedKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

---

##### `PutUnknownExtendedKeyUsages` <a name="PutUnknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages"></a>

```go
func PutUnknownExtendedKeyUsages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetUnknownExtendedKeyUsages` <a name="ResetUnknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resetUnknownExtendedKeyUsages"></a>

```go
func ResetUnknownExtendedKeyUsages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsage">BaseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsages">UnknownExtendedKeyUsages</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsageInput">BaseKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsageInput">ExtendedKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput">UnknownExtendedKeyUsagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseKeyUsage`<sup>Required</sup> <a name="BaseKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsage"></a>

```go
func BaseKeyUsage() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference</a>

---

##### `ExtendedKeyUsage`<sup>Required</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsage"></a>

```go
func ExtendedKeyUsage() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference</a>

---

##### `UnknownExtendedKeyUsages`<sup>Required</sup> <a name="UnknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsages"></a>

```go
func UnknownExtendedKeyUsages() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList</a>

---

##### `BaseKeyUsageInput`<sup>Optional</sup> <a name="BaseKeyUsageInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsageInput"></a>

```go
func BaseKeyUsageInput() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

---

##### `ExtendedKeyUsageInput`<sup>Optional</sup> <a name="ExtendedKeyUsageInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsageInput"></a>

```go
func ExtendedKeyUsageInput() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

---

##### `UnknownExtendedKeyUsagesInput`<sup>Optional</sup> <a name="UnknownExtendedKeyUsagesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput"></a>

```go
func UnknownExtendedKeyUsagesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.get"></a>

```go
func Get(index *f64) GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput">ObjectIdPathInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectIdPathInput`<sup>Optional</sup> <a name="ObjectIdPathInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput"></a>

```go
func ObjectIdPathInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath"></a>

```go
func ObjectIdPath() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedDnsNames">ResetExcludedDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedEmailAddresses">ResetExcludedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedIpRanges">ResetExcludedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedUris">ResetExcludedUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedDnsNames">ResetPermittedDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedEmailAddresses">ResetPermittedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedIpRanges">ResetPermittedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedUris">ResetPermittedUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedDnsNames` <a name="ResetExcludedDnsNames" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedDnsNames"></a>

```go
func ResetExcludedDnsNames()
```

##### `ResetExcludedEmailAddresses` <a name="ResetExcludedEmailAddresses" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedEmailAddresses"></a>

```go
func ResetExcludedEmailAddresses()
```

##### `ResetExcludedIpRanges` <a name="ResetExcludedIpRanges" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedIpRanges"></a>

```go
func ResetExcludedIpRanges()
```

##### `ResetExcludedUris` <a name="ResetExcludedUris" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedUris"></a>

```go
func ResetExcludedUris()
```

##### `ResetPermittedDnsNames` <a name="ResetPermittedDnsNames" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedDnsNames"></a>

```go
func ResetPermittedDnsNames()
```

##### `ResetPermittedEmailAddresses` <a name="ResetPermittedEmailAddresses" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedEmailAddresses"></a>

```go
func ResetPermittedEmailAddresses()
```

##### `ResetPermittedIpRanges` <a name="ResetPermittedIpRanges" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedIpRanges"></a>

```go
func ResetPermittedIpRanges()
```

##### `ResetPermittedUris` <a name="ResetPermittedUris" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedUris"></a>

```go
func ResetPermittedUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.criticalInput">CriticalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNamesInput">ExcludedDnsNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddressesInput">ExcludedEmailAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRangesInput">ExcludedIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUrisInput">ExcludedUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNamesInput">PermittedDnsNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddressesInput">PermittedEmailAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRangesInput">PermittedIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUrisInput">PermittedUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.critical">Critical</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNames">ExcludedDnsNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddresses">ExcludedEmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRanges">ExcludedIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUris">ExcludedUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNames">PermittedDnsNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddresses">PermittedEmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRanges">PermittedIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUris">PermittedUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.criticalInput"></a>

```go
func CriticalInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludedDnsNamesInput`<sup>Optional</sup> <a name="ExcludedDnsNamesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNamesInput"></a>

```go
func ExcludedDnsNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedEmailAddressesInput`<sup>Optional</sup> <a name="ExcludedEmailAddressesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddressesInput"></a>

```go
func ExcludedEmailAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedIpRangesInput`<sup>Optional</sup> <a name="ExcludedIpRangesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRangesInput"></a>

```go
func ExcludedIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedUrisInput`<sup>Optional</sup> <a name="ExcludedUrisInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUrisInput"></a>

```go
func ExcludedUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedDnsNamesInput`<sup>Optional</sup> <a name="PermittedDnsNamesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNamesInput"></a>

```go
func PermittedDnsNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedEmailAddressesInput`<sup>Optional</sup> <a name="PermittedEmailAddressesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddressesInput"></a>

```go
func PermittedEmailAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedIpRangesInput`<sup>Optional</sup> <a name="PermittedIpRangesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRangesInput"></a>

```go
func PermittedIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedUrisInput`<sup>Optional</sup> <a name="PermittedUrisInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUrisInput"></a>

```go
func PermittedUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.critical"></a>

```go
func Critical() interface{}
```

- *Type:* interface{}

---

##### `ExcludedDnsNames`<sup>Required</sup> <a name="ExcludedDnsNames" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNames"></a>

```go
func ExcludedDnsNames() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedEmailAddresses`<sup>Required</sup> <a name="ExcludedEmailAddresses" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddresses"></a>

```go
func ExcludedEmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedIpRanges`<sup>Required</sup> <a name="ExcludedIpRanges" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRanges"></a>

```go
func ExcludedIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedUris`<sup>Required</sup> <a name="ExcludedUris" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUris"></a>

```go
func ExcludedUris() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedDnsNames`<sup>Required</sup> <a name="PermittedDnsNames" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNames"></a>

```go
func PermittedDnsNames() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedEmailAddresses`<sup>Required</sup> <a name="PermittedEmailAddresses" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddresses"></a>

```go
func PermittedEmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedIpRanges`<sup>Required</sup> <a name="PermittedIpRanges" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRanges"></a>

```go
func PermittedIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedUris`<sup>Required</sup> <a name="PermittedUris" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUris"></a>

```go
func PermittedUris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putAdditionalExtensions">PutAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putCaOptions">PutCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putKeyUsage">PutKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putNameConstraints">PutNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putPolicyIds">PutPolicyIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAdditionalExtensions">ResetAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAiaOcspServers">ResetAiaOcspServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetNameConstraints">ResetNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetPolicyIds">ResetPolicyIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalExtensions` <a name="PutAdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putAdditionalExtensions"></a>

```go
func PutAdditionalExtensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putAdditionalExtensions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCaOptions` <a name="PutCaOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putCaOptions"></a>

```go
func PutCaOptions(value GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putCaOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

---

##### `PutKeyUsage` <a name="PutKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putKeyUsage"></a>

```go
func PutKeyUsage(value GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

---

##### `PutNameConstraints` <a name="PutNameConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putNameConstraints"></a>

```go
func PutNameConstraints(value GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putNameConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

---

##### `PutPolicyIds` <a name="PutPolicyIds" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putPolicyIds"></a>

```go
func PutPolicyIds(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putPolicyIds.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalExtensions` <a name="ResetAdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAdditionalExtensions"></a>

```go
func ResetAdditionalExtensions()
```

##### `ResetAiaOcspServers` <a name="ResetAiaOcspServers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAiaOcspServers"></a>

```go
func ResetAiaOcspServers()
```

##### `ResetNameConstraints` <a name="ResetNameConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetNameConstraints"></a>

```go
func ResetNameConstraints()
```

##### `ResetPolicyIds` <a name="ResetPolicyIds" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetPolicyIds"></a>

```go
func ResetPolicyIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensions">AdditionalExtensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptions">CaOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsage">KeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraints">NameConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIds">PolicyIds</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensionsInput">AdditionalExtensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServersInput">AiaOcspServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptionsInput">CaOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsageInput">KeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraintsInput">NameConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIdsInput">PolicyIdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServers">AiaOcspServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalExtensions`<sup>Required</sup> <a name="AdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensions"></a>

```go
func AdditionalExtensions() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList</a>

---

##### `CaOptions`<sup>Required</sup> <a name="CaOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptions"></a>

```go
func CaOptions() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference</a>

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsage"></a>

```go
func KeyUsage() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference</a>

---

##### `NameConstraints`<sup>Required</sup> <a name="NameConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraints"></a>

```go
func NameConstraints() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference</a>

---

##### `PolicyIds`<sup>Required</sup> <a name="PolicyIds" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIds"></a>

```go
func PolicyIds() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList</a>

---

##### `AdditionalExtensionsInput`<sup>Optional</sup> <a name="AdditionalExtensionsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensionsInput"></a>

```go
func AdditionalExtensionsInput() interface{}
```

- *Type:* interface{}

---

##### `AiaOcspServersInput`<sup>Optional</sup> <a name="AiaOcspServersInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServersInput"></a>

```go
func AiaOcspServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `CaOptionsInput`<sup>Optional</sup> <a name="CaOptionsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptionsInput"></a>

```go
func CaOptionsInput() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

---

##### `KeyUsageInput`<sup>Optional</sup> <a name="KeyUsageInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsageInput"></a>

```go
func KeyUsageInput() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

---

##### `NameConstraintsInput`<sup>Optional</sup> <a name="NameConstraintsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraintsInput"></a>

```go
func NameConstraintsInput() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

---

##### `PolicyIdsInput`<sup>Optional</sup> <a name="PolicyIdsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIdsInput"></a>

```go
func PolicyIdsInput() interface{}
```

- *Type:* interface{}

---

##### `AiaOcspServers`<sup>Required</sup> <a name="AiaOcspServers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServers"></a>

```go
func AiaOcspServers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivatecaCaPoolIssuancePolicyBaselineValues
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.get"></a>

```go
func Get(index *f64) GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPathInput">ObjectIdPathInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectIdPathInput`<sup>Optional</sup> <a name="ObjectIdPathInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPathInput"></a>

```go
func ObjectIdPathInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPath"></a>

```go
func ObjectIdPath() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

---


### GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.putCelExpression">PutCelExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resetCelExpression">ResetCelExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCelExpression` <a name="PutCelExpression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.putCelExpression"></a>

```go
func PutCelExpression(value GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.putCelExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

---

##### `ResetCelExpression` <a name="ResetCelExpression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resetCelExpression"></a>

```go
func ResetCelExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpression">CelExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthroughInput">AllowSubjectAltNamesPassthroughInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthroughInput">AllowSubjectPassthroughInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpressionInput">CelExpressionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthrough">AllowSubjectAltNamesPassthrough</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthrough">AllowSubjectPassthrough</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpression"></a>

```go
func CelExpression() GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference</a>

---

##### `AllowSubjectAltNamesPassthroughInput`<sup>Optional</sup> <a name="AllowSubjectAltNamesPassthroughInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthroughInput"></a>

```go
func AllowSubjectAltNamesPassthroughInput() interface{}
```

- *Type:* interface{}

---

##### `AllowSubjectPassthroughInput`<sup>Optional</sup> <a name="AllowSubjectPassthroughInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthroughInput"></a>

```go
func AllowSubjectPassthroughInput() interface{}
```

- *Type:* interface{}

---

##### `CelExpressionInput`<sup>Optional</sup> <a name="CelExpressionInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpressionInput"></a>

```go
func CelExpressionInput() GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

---

##### `AllowSubjectAltNamesPassthrough`<sup>Required</sup> <a name="AllowSubjectAltNamesPassthrough" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthrough"></a>

```go
func AllowSubjectAltNamesPassthrough() interface{}
```

- *Type:* interface{}

---

##### `AllowSubjectPassthrough`<sup>Required</sup> <a name="AllowSubjectPassthrough" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthrough"></a>

```go
func AllowSubjectPassthrough() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

---


### GooglePrivatecaCaPoolIssuancePolicyOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolIssuancePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivatecaCaPoolIssuancePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putAllowedIssuanceModes">PutAllowedIssuanceModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putAllowedKeyTypes">PutAllowedKeyTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putBaselineValues">PutBaselineValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putIdentityConstraints">PutIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedIssuanceModes">ResetAllowedIssuanceModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedKeyTypes">ResetAllowedKeyTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetBaselineValues">ResetBaselineValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetIdentityConstraints">ResetIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetMaximumLifetime">ResetMaximumLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedIssuanceModes` <a name="PutAllowedIssuanceModes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putAllowedIssuanceModes"></a>

```go
func PutAllowedIssuanceModes(value GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putAllowedIssuanceModes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

---

##### `PutAllowedKeyTypes` <a name="PutAllowedKeyTypes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putAllowedKeyTypes"></a>

```go
func PutAllowedKeyTypes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putAllowedKeyTypes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBaselineValues` <a name="PutBaselineValues" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putBaselineValues"></a>

```go
func PutBaselineValues(value GooglePrivatecaCaPoolIssuancePolicyBaselineValues)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putBaselineValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a>

---

##### `PutIdentityConstraints` <a name="PutIdentityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putIdentityConstraints"></a>

```go
func PutIdentityConstraints(value GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putIdentityConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

---

##### `ResetAllowedIssuanceModes` <a name="ResetAllowedIssuanceModes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedIssuanceModes"></a>

```go
func ResetAllowedIssuanceModes()
```

##### `ResetAllowedKeyTypes` <a name="ResetAllowedKeyTypes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedKeyTypes"></a>

```go
func ResetAllowedKeyTypes()
```

##### `ResetBaselineValues` <a name="ResetBaselineValues" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetBaselineValues"></a>

```go
func ResetBaselineValues()
```

##### `ResetIdentityConstraints` <a name="ResetIdentityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetIdentityConstraints"></a>

```go
func ResetIdentityConstraints()
```

##### `ResetMaximumLifetime` <a name="ResetMaximumLifetime" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetMaximumLifetime"></a>

```go
func ResetMaximumLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModes">AllowedIssuanceModes</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypes">AllowedKeyTypes</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValues">BaselineValues</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraints">IdentityConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModesInput">AllowedIssuanceModesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypesInput">AllowedKeyTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValuesInput">BaselineValuesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraintsInput">IdentityConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetimeInput">MaximumLifetimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetime">MaximumLifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedIssuanceModes`<sup>Required</sup> <a name="AllowedIssuanceModes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModes"></a>

```go
func AllowedIssuanceModes() GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference</a>

---

##### `AllowedKeyTypes`<sup>Required</sup> <a name="AllowedKeyTypes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypes"></a>

```go
func AllowedKeyTypes() GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList</a>

---

##### `BaselineValues`<sup>Required</sup> <a name="BaselineValues" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValues"></a>

```go
func BaselineValues() GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference</a>

---

##### `IdentityConstraints`<sup>Required</sup> <a name="IdentityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraints"></a>

```go
func IdentityConstraints() GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference</a>

---

##### `AllowedIssuanceModesInput`<sup>Optional</sup> <a name="AllowedIssuanceModesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModesInput"></a>

```go
func AllowedIssuanceModesInput() GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

---

##### `AllowedKeyTypesInput`<sup>Optional</sup> <a name="AllowedKeyTypesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypesInput"></a>

```go
func AllowedKeyTypesInput() interface{}
```

- *Type:* interface{}

---

##### `BaselineValuesInput`<sup>Optional</sup> <a name="BaselineValuesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValuesInput"></a>

```go
func BaselineValuesInput() GooglePrivatecaCaPoolIssuancePolicyBaselineValues
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a>

---

##### `IdentityConstraintsInput`<sup>Optional</sup> <a name="IdentityConstraintsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraintsInput"></a>

```go
func IdentityConstraintsInput() GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

---

##### `MaximumLifetimeInput`<sup>Optional</sup> <a name="MaximumLifetimeInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetimeInput"></a>

```go
func MaximumLifetimeInput() *string
```

- *Type:* *string

---

##### `MaximumLifetime`<sup>Required</sup> <a name="MaximumLifetime" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetime"></a>

```go
func MaximumLifetime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivatecaCaPoolIssuancePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a>

---


### GooglePrivatecaCaPoolPublishingOptionsOutputReference <a name="GooglePrivatecaCaPoolPublishingOptionsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolPublishingOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivatecaCaPoolPublishingOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.resetEncodingFormat">ResetEncodingFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncodingFormat` <a name="ResetEncodingFormat" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.resetEncodingFormat"></a>

```go
func ResetEncodingFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormatInput">EncodingFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCertInput">PublishCaCertInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrlInput">PublishCrlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormat">EncodingFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCert">PublishCaCert</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrl">PublishCrl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncodingFormatInput`<sup>Optional</sup> <a name="EncodingFormatInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormatInput"></a>

```go
func EncodingFormatInput() *string
```

- *Type:* *string

---

##### `PublishCaCertInput`<sup>Optional</sup> <a name="PublishCaCertInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCertInput"></a>

```go
func PublishCaCertInput() interface{}
```

- *Type:* interface{}

---

##### `PublishCrlInput`<sup>Optional</sup> <a name="PublishCrlInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrlInput"></a>

```go
func PublishCrlInput() interface{}
```

- *Type:* interface{}

---

##### `EncodingFormat`<sup>Required</sup> <a name="EncodingFormat" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormat"></a>

```go
func EncodingFormat() *string
```

- *Type:* *string

---

##### `PublishCaCert`<sup>Required</sup> <a name="PublishCaCert" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCert"></a>

```go
func PublishCaCert() interface{}
```

- *Type:* interface{}

---

##### `PublishCrl`<sup>Required</sup> <a name="PublishCrl" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrl"></a>

```go
func PublishCrl() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivatecaCaPoolPublishingOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a>

---


### GooglePrivatecaCaPoolTimeoutsOutputReference <a name="GooglePrivatecaCaPoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprivatecacapool"

googleprivatecacapool.NewGooglePrivatecaCaPoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivatecaCaPoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



