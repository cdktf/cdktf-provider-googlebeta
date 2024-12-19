# `googleServiceUsageConsumerQuotaOverride` Submodule <a name="`googleServiceUsageConsumerQuotaOverride` Submodule" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleServiceUsageConsumerQuotaOverride <a name="GoogleServiceUsageConsumerQuotaOverride" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override google_service_usage_consumer_quota_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleserviceusageconsumerquotaoverride"

googleserviceusageconsumerquotaoverride.NewGoogleServiceUsageConsumerQuotaOverride(scope Construct, id *string, config GoogleServiceUsageConsumerQuotaOverrideConfig) GoogleServiceUsageConsumerQuotaOverride
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig">GoogleServiceUsageConsumerQuotaOverrideConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig">GoogleServiceUsageConsumerQuotaOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetForce">ResetForce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.putTimeouts"></a>

```go
func PutTimeouts(value GoogleServiceUsageConsumerQuotaOverrideTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a>

---

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetDimensions"></a>

```go
func ResetDimensions()
```

##### `ResetForce` <a name="ResetForce" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetForce"></a>

```go
func ResetForce()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleServiceUsageConsumerQuotaOverride resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleserviceusageconsumerquotaoverride"

googleserviceusageconsumerquotaoverride.GoogleServiceUsageConsumerQuotaOverride_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleserviceusageconsumerquotaoverride"

googleserviceusageconsumerquotaoverride.GoogleServiceUsageConsumerQuotaOverride_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleserviceusageconsumerquotaoverride"

googleserviceusageconsumerquotaoverride.GoogleServiceUsageConsumerQuotaOverride_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleserviceusageconsumerquotaoverride"

googleserviceusageconsumerquotaoverride.GoogleServiceUsageConsumerQuotaOverride_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleServiceUsageConsumerQuotaOverride resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleServiceUsageConsumerQuotaOverride to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleServiceUsageConsumerQuotaOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleServiceUsageConsumerQuotaOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference">GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dimensionsInput">DimensionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.forceInput">ForceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.limitInput">LimitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.metricInput">MetricInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.overrideValueInput">OverrideValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dimensions">Dimensions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.force">Force</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.limit">Limit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.metric">Metric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.overrideValue">OverrideValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.timeouts"></a>

```go
func Timeouts() GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference">GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference</a>

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dimensionsInput"></a>

```go
func DimensionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ForceInput`<sup>Optional</sup> <a name="ForceInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.forceInput"></a>

```go
func ForceInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.limitInput"></a>

```go
func LimitInput() *string
```

- *Type:* *string

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.metricInput"></a>

```go
func MetricInput() *string
```

- *Type:* *string

---

##### `OverrideValueInput`<sup>Optional</sup> <a name="OverrideValueInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.overrideValueInput"></a>

```go
func OverrideValueInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dimensions"></a>

```go
func Dimensions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Force`<sup>Required</sup> <a name="Force" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.force"></a>

```go
func Force() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.limit"></a>

```go
func Limit() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.metric"></a>

```go
func Metric() *string
```

- *Type:* *string

---

##### `OverrideValue`<sup>Required</sup> <a name="OverrideValue" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.overrideValue"></a>

```go
func OverrideValue() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleServiceUsageConsumerQuotaOverrideConfig <a name="GoogleServiceUsageConsumerQuotaOverrideConfig" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleserviceusageconsumerquotaoverride"

&googleserviceusageconsumerquotaoverride.GoogleServiceUsageConsumerQuotaOverrideConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Limit: *string,
	Metric: *string,
	OverrideValue: *string,
	Service: *string,
	Dimensions: *map[string]*string,
	Force: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.limit">Limit</a></code> | <code>*string</code> | The limit on the metric, e.g. '/project/region'. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.metric">Metric</a></code> | <code>*string</code> | The metric that should be limited, e.g. 'compute.googleapis.com/cpus'. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.overrideValue">OverrideValue</a></code> | <code>*string</code> | The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota). |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.service">Service</a></code> | <code>*string</code> | The service that the metrics belong to, e.g. 'compute.googleapis.com'. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.dimensions">Dimensions</a></code> | <code>*map[string]*string</code> | If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.force">Force</a></code> | <code>interface{}</code> | If the new quota would decrease the existing quota by more than 10%, the request is rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override#id GoogleServiceUsageConsumerQuotaOverride#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override#project GoogleServiceUsageConsumerQuotaOverride#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.limit"></a>

```go
Limit *string
```

- *Type:* *string

The limit on the metric, e.g. '/project/region'.

~> Make sure that 'limit' is in a format that doesn't start with '1/' or contain curly braces.
E.g. use '/project/user' instead of '1/{project}/{user}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override#limit GoogleServiceUsageConsumerQuotaOverride#limit}

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.metric"></a>

```go
Metric *string
```

- *Type:* *string

The metric that should be limited, e.g. 'compute.googleapis.com/cpus'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override#metric GoogleServiceUsageConsumerQuotaOverride#metric}

---

##### `OverrideValue`<sup>Required</sup> <a name="OverrideValue" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.overrideValue"></a>

```go
OverrideValue *string
```

- *Type:* *string

The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override#override_value GoogleServiceUsageConsumerQuotaOverride#override_value}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

The service that the metrics belong to, e.g. 'compute.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override#service GoogleServiceUsageConsumerQuotaOverride#service}

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.dimensions"></a>

```go
Dimensions *map[string]*string
```

- *Type:* *map[string]*string

If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override#dimensions GoogleServiceUsageConsumerQuotaOverride#dimensions}

---

##### `Force`<sup>Optional</sup> <a name="Force" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.force"></a>

```go
Force interface{}
```

- *Type:* interface{}

If the new quota would decrease the existing quota by more than 10%, the request is rejected.

If 'force' is 'true', that safety check is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override#force GoogleServiceUsageConsumerQuotaOverride#force}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override#id GoogleServiceUsageConsumerQuotaOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override#project GoogleServiceUsageConsumerQuotaOverride#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.timeouts"></a>

```go
Timeouts GoogleServiceUsageConsumerQuotaOverrideTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override#timeouts GoogleServiceUsageConsumerQuotaOverride#timeouts}

---

### GoogleServiceUsageConsumerQuotaOverrideTimeouts <a name="GoogleServiceUsageConsumerQuotaOverrideTimeouts" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleserviceusageconsumerquotaoverride"

&googleserviceusageconsumerquotaoverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override#create GoogleServiceUsageConsumerQuotaOverride#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override#delete GoogleServiceUsageConsumerQuotaOverride#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override#update GoogleServiceUsageConsumerQuotaOverride#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override#create GoogleServiceUsageConsumerQuotaOverride#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override#delete GoogleServiceUsageConsumerQuotaOverride#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_service_usage_consumer_quota_override#update GoogleServiceUsageConsumerQuotaOverride#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference <a name="GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleserviceusageconsumerquotaoverride"

googleserviceusageconsumerquotaoverride.NewGoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



