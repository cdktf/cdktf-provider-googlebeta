# `googleComputeBackendServiceSignedUrlKey` Submodule <a name="`googleComputeBackendServiceSignedUrlKey` Submodule" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeBackendServiceSignedUrlKey <a name="GoogleComputeBackendServiceSignedUrlKey" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_backend_service_signed_url_key google_compute_backend_service_signed_url_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputebackendservicesignedurlkey"

googlecomputebackendservicesignedurlkey.NewGoogleComputeBackendServiceSignedUrlKey(scope Construct, id *string, config GoogleComputeBackendServiceSignedUrlKeyConfig) GoogleComputeBackendServiceSignedUrlKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig">GoogleComputeBackendServiceSignedUrlKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig">GoogleComputeBackendServiceSignedUrlKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeBackendServiceSignedUrlKeyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts">GoogleComputeBackendServiceSignedUrlKeyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeBackendServiceSignedUrlKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputebackendservicesignedurlkey"

googlecomputebackendservicesignedurlkey.GoogleComputeBackendServiceSignedUrlKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputebackendservicesignedurlkey"

googlecomputebackendservicesignedurlkey.GoogleComputeBackendServiceSignedUrlKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputebackendservicesignedurlkey"

googlecomputebackendservicesignedurlkey.GoogleComputeBackendServiceSignedUrlKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputebackendservicesignedurlkey"

googlecomputebackendservicesignedurlkey.GoogleComputeBackendServiceSignedUrlKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeBackendServiceSignedUrlKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeBackendServiceSignedUrlKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeBackendServiceSignedUrlKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_backend_service_signed_url_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeBackendServiceSignedUrlKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference">GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.backendServiceInput">BackendServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.keyValueInput">KeyValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.backendService">BackendService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.keyValue">KeyValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.timeouts"></a>

```go
func Timeouts() GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference">GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference</a>

---

##### `BackendServiceInput`<sup>Optional</sup> <a name="BackendServiceInput" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.backendServiceInput"></a>

```go
func BackendServiceInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyValueInput`<sup>Optional</sup> <a name="KeyValueInput" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.keyValueInput"></a>

```go
func KeyValueInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BackendService`<sup>Required</sup> <a name="BackendService" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.backendService"></a>

```go
func BackendService() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyValue`<sup>Required</sup> <a name="KeyValue" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.keyValue"></a>

```go
func KeyValue() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeBackendServiceSignedUrlKeyConfig <a name="GoogleComputeBackendServiceSignedUrlKeyConfig" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputebackendservicesignedurlkey"

&googlecomputebackendservicesignedurlkey.GoogleComputeBackendServiceSignedUrlKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackendService: *string,
	KeyValue: *string,
	Name: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.backendService">BackendService</a></code> | <code>*string</code> | The backend service this signed URL key belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.keyValue">KeyValue</a></code> | <code>*string</code> | 128-bit key value used for signing the URL. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the signed URL key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_backend_service_signed_url_key#id GoogleComputeBackendServiceSignedUrlKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_backend_service_signed_url_key#project GoogleComputeBackendServiceSignedUrlKey#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts">GoogleComputeBackendServiceSignedUrlKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendService`<sup>Required</sup> <a name="BackendService" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.backendService"></a>

```go
BackendService *string
```

- *Type:* *string

The backend service this signed URL key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_backend_service_signed_url_key#backend_service GoogleComputeBackendServiceSignedUrlKey#backend_service}

---

##### `KeyValue`<sup>Required</sup> <a name="KeyValue" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.keyValue"></a>

```go
KeyValue *string
```

- *Type:* *string

128-bit key value used for signing the URL.

The key value must be a
valid RFC 4648 Section 5 base64url encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_backend_service_signed_url_key#key_value GoogleComputeBackendServiceSignedUrlKey#key_value}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the signed URL key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_backend_service_signed_url_key#name GoogleComputeBackendServiceSignedUrlKey#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_backend_service_signed_url_key#id GoogleComputeBackendServiceSignedUrlKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_backend_service_signed_url_key#project GoogleComputeBackendServiceSignedUrlKey#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeBackendServiceSignedUrlKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts">GoogleComputeBackendServiceSignedUrlKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_backend_service_signed_url_key#timeouts GoogleComputeBackendServiceSignedUrlKey#timeouts}

---

### GoogleComputeBackendServiceSignedUrlKeyTimeouts <a name="GoogleComputeBackendServiceSignedUrlKeyTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputebackendservicesignedurlkey"

&googlecomputebackendservicesignedurlkey.GoogleComputeBackendServiceSignedUrlKeyTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_backend_service_signed_url_key#create GoogleComputeBackendServiceSignedUrlKey#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_backend_service_signed_url_key#delete GoogleComputeBackendServiceSignedUrlKey#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_backend_service_signed_url_key#create GoogleComputeBackendServiceSignedUrlKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_backend_service_signed_url_key#delete GoogleComputeBackendServiceSignedUrlKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference <a name="GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputebackendservicesignedurlkey"

googlecomputebackendservicesignedurlkey.NewGoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



