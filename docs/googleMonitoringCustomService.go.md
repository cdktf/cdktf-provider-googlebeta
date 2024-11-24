# `googleMonitoringCustomService` Submodule <a name="`googleMonitoringCustomService` Submodule" id="@cdktf/provider-google-beta.googleMonitoringCustomService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMonitoringCustomService <a name="GoogleMonitoringCustomService" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_monitoring_custom_service google_monitoring_custom_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemonitoringcustomservice"

googlemonitoringcustomservice.NewGoogleMonitoringCustomService(scope Construct, id *string, config GoogleMonitoringCustomServiceConfig) GoogleMonitoringCustomService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig">GoogleMonitoringCustomServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig">GoogleMonitoringCustomServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.putTelemetry">PutTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.resetServiceId">ResetServiceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.resetTelemetry">ResetTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.resetUserLabels">ResetUserLabels</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTelemetry` <a name="PutTelemetry" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.putTelemetry"></a>

```go
func PutTelemetry(value GoogleMonitoringCustomServiceTelemetry)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.putTelemetry.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetry">GoogleMonitoringCustomServiceTelemetry</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.putTimeouts"></a>

```go
func PutTimeouts(value GoogleMonitoringCustomServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeouts">GoogleMonitoringCustomServiceTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.resetProject"></a>

```go
func ResetProject()
```

##### `ResetServiceId` <a name="ResetServiceId" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.resetServiceId"></a>

```go
func ResetServiceId()
```

##### `ResetTelemetry` <a name="ResetTelemetry" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.resetTelemetry"></a>

```go
func ResetTelemetry()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserLabels` <a name="ResetUserLabels" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.resetUserLabels"></a>

```go
func ResetUserLabels()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleMonitoringCustomService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemonitoringcustomservice"

googlemonitoringcustomservice.GoogleMonitoringCustomService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemonitoringcustomservice"

googlemonitoringcustomservice.GoogleMonitoringCustomService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemonitoringcustomservice"

googlemonitoringcustomservice.GoogleMonitoringCustomService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemonitoringcustomservice"

googlemonitoringcustomservice.GoogleMonitoringCustomService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleMonitoringCustomService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleMonitoringCustomService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleMonitoringCustomService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_monitoring_custom_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMonitoringCustomService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.telemetry">Telemetry</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference">GoogleMonitoringCustomServiceTelemetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference">GoogleMonitoringCustomServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.serviceIdInput">ServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.telemetryInput">TelemetryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetry">GoogleMonitoringCustomServiceTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.userLabelsInput">UserLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.userLabels">UserLabels</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Telemetry`<sup>Required</sup> <a name="Telemetry" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.telemetry"></a>

```go
func Telemetry() GoogleMonitoringCustomServiceTelemetryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference">GoogleMonitoringCustomServiceTelemetryOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.timeouts"></a>

```go
func Timeouts() GoogleMonitoringCustomServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference">GoogleMonitoringCustomServiceTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.serviceIdInput"></a>

```go
func ServiceIdInput() *string
```

- *Type:* *string

---

##### `TelemetryInput`<sup>Optional</sup> <a name="TelemetryInput" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.telemetryInput"></a>

```go
func TelemetryInput() GoogleMonitoringCustomServiceTelemetry
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetry">GoogleMonitoringCustomServiceTelemetry</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserLabelsInput`<sup>Optional</sup> <a name="UserLabelsInput" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.userLabelsInput"></a>

```go
func UserLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

##### `UserLabels`<sup>Required</sup> <a name="UserLabels" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.userLabels"></a>

```go
func UserLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMonitoringCustomServiceConfig <a name="GoogleMonitoringCustomServiceConfig" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemonitoringcustomservice"

&googlemonitoringcustomservice.GoogleMonitoringCustomServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Id: *string,
	Project: *string,
	ServiceId: *string,
	Telemetry: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetry,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeouts,
	UserLabels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Name used for UI elements listing this Service. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_monitoring_custom_service#id GoogleMonitoringCustomService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_monitoring_custom_service#project GoogleMonitoringCustomService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.serviceId">ServiceId</a></code> | <code>*string</code> | An optional service ID to use. If not given, the server will generate a service ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.telemetry">Telemetry</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetry">GoogleMonitoringCustomServiceTelemetry</a></code> | telemetry block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeouts">GoogleMonitoringCustomServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.userLabels">UserLabels</a></code> | <code>*map[string]*string</code> | Labels which have been used to annotate the service. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Name used for UI elements listing this Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_monitoring_custom_service#display_name GoogleMonitoringCustomService#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_monitoring_custom_service#id GoogleMonitoringCustomService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_monitoring_custom_service#project GoogleMonitoringCustomService#project}.

---

##### `ServiceId`<sup>Optional</sup> <a name="ServiceId" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.serviceId"></a>

```go
ServiceId *string
```

- *Type:* *string

An optional service ID to use. If not given, the server will generate a service ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_monitoring_custom_service#service_id GoogleMonitoringCustomService#service_id}

---

##### `Telemetry`<sup>Optional</sup> <a name="Telemetry" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.telemetry"></a>

```go
Telemetry GoogleMonitoringCustomServiceTelemetry
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetry">GoogleMonitoringCustomServiceTelemetry</a>

telemetry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_monitoring_custom_service#telemetry GoogleMonitoringCustomService#telemetry}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.timeouts"></a>

```go
Timeouts GoogleMonitoringCustomServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeouts">GoogleMonitoringCustomServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_monitoring_custom_service#timeouts GoogleMonitoringCustomService#timeouts}

---

##### `UserLabels`<sup>Optional</sup> <a name="UserLabels" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceConfig.property.userLabels"></a>

```go
UserLabels *map[string]*string
```

- *Type:* *map[string]*string

Labels which have been used to annotate the service.

Label keys must start
with a letter. Label keys and values may contain lowercase letters,
numbers, underscores, and dashes. Label keys and values have a maximum
length of 63 characters, and must be less than 128 bytes in size. Up to 64
label entries may be stored. For labels which do not have a semantic value,
the empty string may be supplied for the label value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_monitoring_custom_service#user_labels GoogleMonitoringCustomService#user_labels}

---

### GoogleMonitoringCustomServiceTelemetry <a name="GoogleMonitoringCustomServiceTelemetry" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemonitoringcustomservice"

&googlemonitoringcustomservice.GoogleMonitoringCustomServiceTelemetry {
	ResourceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetry.property.resourceName">ResourceName</a></code> | <code>*string</code> | The full name of the resource that defines this service. Formatted as described in https://cloud.google.com/apis/design/resource_names. |

---

##### `ResourceName`<sup>Optional</sup> <a name="ResourceName" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetry.property.resourceName"></a>

```go
ResourceName *string
```

- *Type:* *string

The full name of the resource that defines this service. Formatted as described in https://cloud.google.com/apis/design/resource_names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_monitoring_custom_service#resource_name GoogleMonitoringCustomService#resource_name}

---

### GoogleMonitoringCustomServiceTimeouts <a name="GoogleMonitoringCustomServiceTimeouts" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemonitoringcustomservice"

&googlemonitoringcustomservice.GoogleMonitoringCustomServiceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_monitoring_custom_service#create GoogleMonitoringCustomService#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_monitoring_custom_service#delete GoogleMonitoringCustomService#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_monitoring_custom_service#update GoogleMonitoringCustomService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_monitoring_custom_service#create GoogleMonitoringCustomService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_monitoring_custom_service#delete GoogleMonitoringCustomService#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_monitoring_custom_service#update GoogleMonitoringCustomService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMonitoringCustomServiceTelemetryOutputReference <a name="GoogleMonitoringCustomServiceTelemetryOutputReference" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemonitoringcustomservice"

googlemonitoringcustomservice.NewGoogleMonitoringCustomServiceTelemetryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMonitoringCustomServiceTelemetryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.resetResourceName">ResetResourceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceName` <a name="ResetResourceName" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.resetResourceName"></a>

```go
func ResetResourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.property.resourceNameInput">ResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetry">GoogleMonitoringCustomServiceTelemetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.property.resourceNameInput"></a>

```go
func ResourceNameInput() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetryOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMonitoringCustomServiceTelemetry
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTelemetry">GoogleMonitoringCustomServiceTelemetry</a>

---


### GoogleMonitoringCustomServiceTimeoutsOutputReference <a name="GoogleMonitoringCustomServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemonitoringcustomservice"

googlemonitoringcustomservice.NewGoogleMonitoringCustomServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMonitoringCustomServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringCustomService.GoogleMonitoringCustomServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



