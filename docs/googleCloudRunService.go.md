# `googleCloudRunService` Submodule <a name="`googleCloudRunService` Submodule" id="@cdktf/provider-google-beta.googleCloudRunService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudRunService <a name="GoogleCloudRunService" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service google_cloud_run_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunService(scope Construct, id *string, config GoogleCloudRunServiceConfig) GoogleCloudRunService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig">GoogleCloudRunServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig">GoogleCloudRunServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.putTemplate">PutTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.putTraffic">PutTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.resetAutogenerateRevisionName">ResetAutogenerateRevisionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.resetTemplate">ResetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.resetTraffic">ResetTraffic</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.putMetadata"></a>

```go
func PutMetadata(value GoogleCloudRunServiceMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadata">GoogleCloudRunServiceMetadata</a>

---

##### `PutTemplate` <a name="PutTemplate" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.putTemplate"></a>

```go
func PutTemplate(value GoogleCloudRunServiceTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplate">GoogleCloudRunServiceTemplate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCloudRunServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeouts">GoogleCloudRunServiceTimeouts</a>

---

##### `PutTraffic` <a name="PutTraffic" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.putTraffic"></a>

```go
func PutTraffic(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.putTraffic.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutogenerateRevisionName` <a name="ResetAutogenerateRevisionName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.resetAutogenerateRevisionName"></a>

```go
func ResetAutogenerateRevisionName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.resetId"></a>

```go
func ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.resetTemplate"></a>

```go
func ResetTemplate()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTraffic` <a name="ResetTraffic" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.resetTraffic"></a>

```go
func ResetTraffic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudRunService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.GoogleCloudRunService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.GoogleCloudRunService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.GoogleCloudRunService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.GoogleCloudRunService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleCloudRunService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCloudRunService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCloudRunService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudRunService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference">GoogleCloudRunServiceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList">GoogleCloudRunServiceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.template">Template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference">GoogleCloudRunServiceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference">GoogleCloudRunServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.traffic">Traffic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList">GoogleCloudRunServiceTrafficList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.autogenerateRevisionNameInput">AutogenerateRevisionNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadata">GoogleCloudRunServiceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.templateInput">TemplateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplate">GoogleCloudRunServiceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.trafficInput">TrafficInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.autogenerateRevisionName">AutogenerateRevisionName</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.metadata"></a>

```go
func Metadata() GoogleCloudRunServiceMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference">GoogleCloudRunServiceMetadataOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.status"></a>

```go
func Status() GoogleCloudRunServiceStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList">GoogleCloudRunServiceStatusList</a>

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.template"></a>

```go
func Template() GoogleCloudRunServiceTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference">GoogleCloudRunServiceTemplateOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.timeouts"></a>

```go
func Timeouts() GoogleCloudRunServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference">GoogleCloudRunServiceTimeoutsOutputReference</a>

---

##### `Traffic`<sup>Required</sup> <a name="Traffic" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.traffic"></a>

```go
func Traffic() GoogleCloudRunServiceTrafficList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList">GoogleCloudRunServiceTrafficList</a>

---

##### `AutogenerateRevisionNameInput`<sup>Optional</sup> <a name="AutogenerateRevisionNameInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.autogenerateRevisionNameInput"></a>

```go
func AutogenerateRevisionNameInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.metadataInput"></a>

```go
func MetadataInput() GoogleCloudRunServiceMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadata">GoogleCloudRunServiceMetadata</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.templateInput"></a>

```go
func TemplateInput() GoogleCloudRunServiceTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplate">GoogleCloudRunServiceTemplate</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficInput`<sup>Optional</sup> <a name="TrafficInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.trafficInput"></a>

```go
func TrafficInput() interface{}
```

- *Type:* interface{}

---

##### `AutogenerateRevisionName`<sup>Required</sup> <a name="AutogenerateRevisionName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.autogenerateRevisionName"></a>

```go
func AutogenerateRevisionName() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudRunServiceConfig <a name="GoogleCloudRunServiceConfig" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	AutogenerateRevisionName: interface{},
	Id: *string,
	Metadata: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceMetadata,
	Project: *string,
	Template: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplate,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTimeouts,
	Traffic: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.location">Location</a></code> | <code>*string</code> | The location of the cloud run instance. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.name">Name</a></code> | <code>*string</code> | Name must be unique within a Google Cloud project and region. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.autogenerateRevisionName">AutogenerateRevisionName</a></code> | <code>interface{}</code> | If set to 'true', the revision name (template.metadata.name) will be omitted and autogenerated by Cloud Run. This cannot be set to 'true' while 'template.metadata.name' is also set. (For legacy support, if 'template.metadata.name' is unset in state while this field is set to false, the revision name will still autogenerate.). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#id GoogleCloudRunService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadata">GoogleCloudRunServiceMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#project GoogleCloudRunService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.template">Template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplate">GoogleCloudRunServiceTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeouts">GoogleCloudRunServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.traffic">Traffic</a></code> | <code>interface{}</code> | traffic block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the cloud run instance. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#location GoogleCloudRunService#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name must be unique within a Google Cloud project and region.

Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.
More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#name GoogleCloudRunService#name}

---

##### `AutogenerateRevisionName`<sup>Optional</sup> <a name="AutogenerateRevisionName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.autogenerateRevisionName"></a>

```go
AutogenerateRevisionName interface{}
```

- *Type:* interface{}

If set to 'true', the revision name (template.metadata.name) will be omitted and autogenerated by Cloud Run. This cannot be set to 'true' while 'template.metadata.name' is also set. (For legacy support, if 'template.metadata.name' is unset in state while this field is set to false, the revision name will still autogenerate.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#autogenerate_revision_name GoogleCloudRunService#autogenerate_revision_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#id GoogleCloudRunService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.metadata"></a>

```go
Metadata GoogleCloudRunServiceMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadata">GoogleCloudRunServiceMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#metadata GoogleCloudRunService#metadata}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#project GoogleCloudRunService#project}.

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.template"></a>

```go
Template GoogleCloudRunServiceTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplate">GoogleCloudRunServiceTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#template GoogleCloudRunService#template}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.timeouts"></a>

```go
Timeouts GoogleCloudRunServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeouts">GoogleCloudRunServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#timeouts GoogleCloudRunService#timeouts}

---

##### `Traffic`<sup>Optional</sup> <a name="Traffic" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceConfig.property.traffic"></a>

```go
Traffic interface{}
```

- *Type:* interface{}

traffic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#traffic GoogleCloudRunService#traffic}

---

### GoogleCloudRunServiceMetadata <a name="GoogleCloudRunServiceMetadata" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceMetadata {
	Annotations: *map[string]*string,
	Labels: *map[string]*string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations is a key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadata.property.namespace">Namespace</a></code> | <code>*string</code> | In Cloud Run the namespace must be equal to either the project ID or project number. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations is a key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations

**Note**: The Cloud Run API may add additional annotations that were not provided in your config.
If terraform plan shows a diff where a server-side annotation is added, you can add it to your config
or apply the lifecycle.ignore_changes rule to the metadata.0.annotations field.

Annotations with 'run.googleapis.com/' and 'autoscaling.knative.dev' are restricted. Use the following annotation
keys to configure features on a Service:

* 'run.googleapis.com/binary-authorization-breakglass' sets the [Binary Authorization breakglass](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--breakglass).
* 'run.googleapis.com/binary-authorization' sets the [Binary Authorization](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--binary-authorization).
* 'run.googleapis.com/client-name' sets the client name calling the Cloud Run API.
* 'run.googleapis.com/custom-audiences' sets the [custom audiences](https://cloud.google.com/sdk/gcloud/reference/alpha/run/deploy#--add-custom-audiences)
  that can be used in the audience field of ID token for authenticated requests.
* 'run.googleapis.com/description' sets a user defined description for the Service.
* 'run.googleapis.com/ingress' sets the [ingress settings](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--ingress)
  for the Service. For example, '"run.googleapis.com/ingress" = "all"'.
* 'run.googleapis.com/launch-stage' sets the [launch stage](https://cloud.google.com/run/docs/troubleshooting#launch-stage-validation)
  when a preview feature is used. For example, '"run.googleapis.com/launch-stage": "BETA"'

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#annotations GoogleCloudRunService#annotations}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

May match selectors of replication controllers
and routes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#labels GoogleCloudRunService#labels}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadata.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

In Cloud Run the namespace must be equal to either the project ID or project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#namespace GoogleCloudRunService#namespace}

---

### GoogleCloudRunServiceStatus <a name="GoogleCloudRunServiceStatus" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceStatus {

}
```


### GoogleCloudRunServiceStatusConditions <a name="GoogleCloudRunServiceStatusConditions" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceStatusConditions {

}
```


### GoogleCloudRunServiceStatusTraffic <a name="GoogleCloudRunServiceStatusTraffic" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTraffic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTraffic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceStatusTraffic {

}
```


### GoogleCloudRunServiceTemplate <a name="GoogleCloudRunServiceTemplate" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplate {
	Metadata: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateMetadata,
	Spec: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplate.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadata">GoogleCloudRunServiceTemplateMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplate.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec">GoogleCloudRunServiceTemplateSpec</a></code> | spec block. |

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplate.property.metadata"></a>

```go
Metadata GoogleCloudRunServiceTemplateMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadata">GoogleCloudRunServiceTemplateMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#metadata GoogleCloudRunService#metadata}

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplate.property.spec"></a>

```go
Spec GoogleCloudRunServiceTemplateSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec">GoogleCloudRunServiceTemplateSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#spec GoogleCloudRunService#spec}

---

### GoogleCloudRunServiceTemplateMetadata <a name="GoogleCloudRunServiceTemplateMetadata" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateMetadata {
	Annotations: *map[string]*string,
	Labels: *map[string]*string,
	Name: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations is a key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadata.property.name">Name</a></code> | <code>*string</code> | Name must be unique within a Google Cloud project and region. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadata.property.namespace">Namespace</a></code> | <code>*string</code> | In Cloud Run the namespace must be equal to either the project ID or project number. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations is a key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations

**Note**: The Cloud Run API may add additional annotations that were not provided in your config.
If terraform plan shows a diff where a server-side annotation is added, you can add it to your config
or apply the lifecycle.ignore_changes rule to the metadata.0.annotations field.

Annotations with 'run.googleapis.com/' and 'autoscaling.knative.dev' are restricted. Use the following annotation
keys to configure features on a Revision template:

* 'autoscaling.knative.dev/maxScale' sets the [maximum number of container
  instances](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--max-instances) of the Revision to run.
* 'autoscaling.knative.dev/minScale' sets the [minimum number of container
  instances](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--min-instances) of the Revision to run.
* 'run.googleapis.com/client-name' sets the client name calling the Cloud Run API.
* 'run.googleapis.com/cloudsql-instances' sets the [Cloud SQL
  instances](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--add-cloudsql-instances) the Revision connects to.
* 'run.googleapis.com/cpu-throttling' sets whether to throttle the CPU when the container is not actively serving
  requests. See https://cloud.google.com/sdk/gcloud/reference/run/deploy#--[no-]cpu-throttling.
* 'run.googleapis.com/encryption-key-shutdown-hours' sets the number of hours to wait before an automatic shutdown
  server after CMEK key revocation is detected.
* 'run.googleapis.com/encryption-key' sets the [CMEK key](https://cloud.google.com/run/docs/securing/using-cmek)
  reference to encrypt the container with.
* 'run.googleapis.com/execution-environment' sets the [execution
  environment](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--execution-environment)
  where the application will run.
* 'run.googleapis.com/post-key-revocation-action-type' sets the
  [action type](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--post-key-revocation-action-type)
  after CMEK key revocation.
* 'run.googleapis.com/secrets' sets a list of key-value pairs to set as
  [secrets](https://cloud.google.com/run/docs/configuring/secrets#yaml).
* 'run.googleapis.com/sessionAffinity' sets whether to enable
  [session affinity](https://cloud.google.com/sdk/gcloud/reference/beta/run/deploy#--%5Bno-%5Dsession-affinity)
  for connections to the Revision.
* 'run.googleapis.com/startup-cpu-boost' sets whether to allocate extra CPU to containers on startup.
  See https://cloud.google.com/sdk/gcloud/reference/run/deploy#--[no-]cpu-boost.
* 'run.googleapis.com/vpc-access-connector' sets a [VPC connector](https://cloud.google.com/run/docs/configuring/connecting-vpc#terraform_1)
  for the Revision.
* 'run.googleapis.com/vpc-access-egress' sets the outbound traffic to send through the VPC connector for this resource.
  See https://cloud.google.com/sdk/gcloud/reference/run/deploy#--vpc-egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#annotations GoogleCloudRunService#annotations}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#labels GoogleCloudRunService#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name must be unique within a Google Cloud project and region.

Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#name GoogleCloudRunService#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadata.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

In Cloud Run the namespace must be equal to either the project ID or project number.

It will default to the resource's project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#namespace GoogleCloudRunService#namespace}

---

### GoogleCloudRunServiceTemplateSpec <a name="GoogleCloudRunServiceTemplateSpec" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpec {
	ContainerConcurrency: *f64,
	Containers: interface{},
	NodeSelector: *map[string]*string,
	ServiceAccountName: *string,
	TimeoutSeconds: *f64,
	Volumes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec.property.containerConcurrency">ContainerConcurrency</a></code> | <code>*f64</code> | ContainerConcurrency specifies the maximum allowed in-flight (concurrent) requests per container of the Revision. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec.property.containers">Containers</a></code> | <code>interface{}</code> | containers block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec.property.nodeSelector">NodeSelector</a></code> | <code>*map[string]*string</code> | Node Selector describes the hardware requirements of the resources. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec.property.serviceAccountName">ServiceAccountName</a></code> | <code>*string</code> | Email address of the IAM service account associated with the revision of the service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | TimeoutSeconds holds the max duration the instance is allowed for responding to a request. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec.property.volumes">Volumes</a></code> | <code>interface{}</code> | volumes block. |

---

##### `ContainerConcurrency`<sup>Optional</sup> <a name="ContainerConcurrency" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec.property.containerConcurrency"></a>

```go
ContainerConcurrency *f64
```

- *Type:* *f64

ContainerConcurrency specifies the maximum allowed in-flight (concurrent) requests per container of the Revision.

If not specified or 0, defaults to 80 when
requested CPU >= 1 and defaults to 1 when requested CPU < 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#container_concurrency GoogleCloudRunService#container_concurrency}

---

##### `Containers`<sup>Optional</sup> <a name="Containers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec.property.containers"></a>

```go
Containers interface{}
```

- *Type:* interface{}

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#containers GoogleCloudRunService#containers}

---

##### `NodeSelector`<sup>Optional</sup> <a name="NodeSelector" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec.property.nodeSelector"></a>

```go
NodeSelector *map[string]*string
```

- *Type:* *map[string]*string

Node Selector describes the hardware requirements of the resources.

Use the following node selector keys to configure features on a Revision:

* 'run.googleapis.com/accelerator' sets the [type of GPU](https://cloud.google.com/run/docs/configuring/services/gpu) required by the Revision to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#node_selector GoogleCloudRunService#node_selector}

---

##### `ServiceAccountName`<sup>Optional</sup> <a name="ServiceAccountName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec.property.serviceAccountName"></a>

```go
ServiceAccountName *string
```

- *Type:* *string

Email address of the IAM service account associated with the revision of the service.

The service account represents the identity of the running revision,
and determines what permissions the revision has. If not provided, the revision
will use the project's default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#service_account_name GoogleCloudRunService#service_account_name}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

TimeoutSeconds holds the max duration the instance is allowed for responding to a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#timeout_seconds GoogleCloudRunService#timeout_seconds}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec.property.volumes"></a>

```go
Volumes interface{}
```

- *Type:* interface{}

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#volumes GoogleCloudRunService#volumes}

---

### GoogleCloudRunServiceTemplateSpecContainers <a name="GoogleCloudRunServiceTemplateSpecContainers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainers {
	Image: *string,
	Args: *[]*string,
	Command: *[]*string,
	Env: interface{},
	EnvFrom: interface{},
	LivenessProbe: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe,
	Name: *string,
	Ports: interface{},
	Resources: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResources,
	StartupProbe: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe,
	VolumeMounts: interface{},
	WorkingDir: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.image">Image</a></code> | <code>*string</code> | Docker image name. This is most often a reference to a container located in the container registry, such as gcr.io/cloudrun/hello. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.args">Args</a></code> | <code>*[]*string</code> | Arguments to the entrypoint. The docker image's CMD is used if this is not provided. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.command">Command</a></code> | <code>*[]*string</code> | Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.env">Env</a></code> | <code>interface{}</code> | env block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.envFrom">EnvFrom</a></code> | <code>interface{}</code> | env_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.livenessProbe">LivenessProbe</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe">GoogleCloudRunServiceTemplateSpecContainersLivenessProbe</a></code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.name">Name</a></code> | <code>*string</code> | Name of the container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.ports">Ports</a></code> | <code>interface{}</code> | ports block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResources">GoogleCloudRunServiceTemplateSpecContainersResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe">GoogleCloudRunServiceTemplateSpecContainersStartupProbe</a></code> | startup_probe block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.volumeMounts">VolumeMounts</a></code> | <code>interface{}</code> | volume_mounts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.workingDir">WorkingDir</a></code> | <code>*string</code> | Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docker image name. This is most often a reference to a container located in the container registry, such as gcr.io/cloudrun/hello.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#image GoogleCloudRunService#image}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Arguments to the entrypoint. The docker image's CMD is used if this is not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#args GoogleCloudRunService#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#command GoogleCloudRunService#command}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.env"></a>

```go
Env interface{}
```

- *Type:* interface{}

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#env GoogleCloudRunService#env}

---

##### `EnvFrom`<sup>Optional</sup> <a name="EnvFrom" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.envFrom"></a>

```go
EnvFrom interface{}
```

- *Type:* interface{}

env_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#env_from GoogleCloudRunService#env_from}

---

##### `LivenessProbe`<sup>Optional</sup> <a name="LivenessProbe" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.livenessProbe"></a>

```go
LivenessProbe GoogleCloudRunServiceTemplateSpecContainersLivenessProbe
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe">GoogleCloudRunServiceTemplateSpecContainersLivenessProbe</a>

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#liveness_probe GoogleCloudRunService#liveness_probe}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#name GoogleCloudRunService#name}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.ports"></a>

```go
Ports interface{}
```

- *Type:* interface{}

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#ports GoogleCloudRunService#ports}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.resources"></a>

```go
Resources GoogleCloudRunServiceTemplateSpecContainersResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResources">GoogleCloudRunServiceTemplateSpecContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#resources GoogleCloudRunService#resources}

---

##### `StartupProbe`<sup>Optional</sup> <a name="StartupProbe" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.startupProbe"></a>

```go
StartupProbe GoogleCloudRunServiceTemplateSpecContainersStartupProbe
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe">GoogleCloudRunServiceTemplateSpecContainersStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#startup_probe GoogleCloudRunService#startup_probe}

---

##### `VolumeMounts`<sup>Optional</sup> <a name="VolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.volumeMounts"></a>

```go
VolumeMounts interface{}
```

- *Type:* interface{}

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#volume_mounts GoogleCloudRunService#volume_mounts}

---

##### `WorkingDir`<sup>Optional</sup> <a name="WorkingDir" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainers.property.workingDir"></a>

```go
WorkingDir *string
```

- *Type:* *string

Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#working_dir GoogleCloudRunService#working_dir}

---

### GoogleCloudRunServiceTemplateSpecContainersEnv <a name="GoogleCloudRunServiceTemplateSpecContainersEnv" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnv.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersEnv {
	Name: *string,
	Value: *string,
	ValueFrom: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnv.property.name">Name</a></code> | <code>*string</code> | Name of the environment variable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnv.property.value">Value</a></code> | <code>*string</code> | Defaults to "". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnv.property.valueFrom">ValueFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom">GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom</a></code> | value_from block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnv.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#name GoogleCloudRunService#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnv.property.value"></a>

```go
Value *string
```

- *Type:* *string

Defaults to "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#value GoogleCloudRunService#value}

---

##### `ValueFrom`<sup>Optional</sup> <a name="ValueFrom" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnv.property.valueFrom"></a>

```go
ValueFrom GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom">GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom</a>

value_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#value_from GoogleCloudRunService#value_from}

---

### GoogleCloudRunServiceTemplateSpecContainersEnvFrom <a name="GoogleCloudRunServiceTemplateSpecContainersEnvFrom" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersEnvFrom {
	ConfigMapRef: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef,
	Prefix: *string,
	SecretRef: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFrom.property.configMapRef">ConfigMapRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a></code> | config_map_ref block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFrom.property.prefix">Prefix</a></code> | <code>*string</code> | An optional identifier to prepend to each key in the ConfigMap. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFrom.property.secretRef">SecretRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef">GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef</a></code> | secret_ref block. |

---

##### `ConfigMapRef`<sup>Optional</sup> <a name="ConfigMapRef" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFrom.property.configMapRef"></a>

```go
ConfigMapRef GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a>

config_map_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#config_map_ref GoogleCloudRunService#config_map_ref}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFrom.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

An optional identifier to prepend to each key in the ConfigMap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#prefix GoogleCloudRunService#prefix}

---

##### `SecretRef`<sup>Optional</sup> <a name="SecretRef" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFrom.property.secretRef"></a>

```go
SecretRef GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef">GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#secret_ref GoogleCloudRunService#secret_ref}

---

### GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef <a name="GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef {
	LocalObjectReference: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference,
	Optional: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef.property.localObjectReference">LocalObjectReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a></code> | local_object_reference block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef.property.optional">Optional</a></code> | <code>interface{}</code> | Specify whether the ConfigMap must be defined. |

---

##### `LocalObjectReference`<sup>Optional</sup> <a name="LocalObjectReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef.property.localObjectReference"></a>

```go
LocalObjectReference GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a>

local_object_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#local_object_reference GoogleCloudRunService#local_object_reference}

---

##### `Optional`<sup>Optional</sup> <a name="Optional" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef.property.optional"></a>

```go
Optional interface{}
```

- *Type:* interface{}

Specify whether the ConfigMap must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#optional GoogleCloudRunService#optional}

---

### GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference <a name="GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference.property.name">Name</a></code> | <code>*string</code> | Name of the referent. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#name GoogleCloudRunService#name}

---

### GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef <a name="GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef {
	LocalObjectReference: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference,
	Optional: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef.property.localObjectReference">LocalObjectReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a></code> | local_object_reference block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef.property.optional">Optional</a></code> | <code>interface{}</code> | Specify whether the Secret must be defined. |

---

##### `LocalObjectReference`<sup>Optional</sup> <a name="LocalObjectReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef.property.localObjectReference"></a>

```go
LocalObjectReference GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a>

local_object_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#local_object_reference GoogleCloudRunService#local_object_reference}

---

##### `Optional`<sup>Optional</sup> <a name="Optional" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef.property.optional"></a>

```go
Optional interface{}
```

- *Type:* interface{}

Specify whether the Secret must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#optional GoogleCloudRunService#optional}

---

### GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference <a name="GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference.property.name">Name</a></code> | <code>*string</code> | Name of the referent. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#name GoogleCloudRunService#name}

---

### GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom <a name="GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom {
	SecretKeyRef: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `SecretKeyRef`<sup>Required</sup> <a name="SecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom.property.secretKeyRef"></a>

```go
SecretKeyRef GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#secret_key_ref GoogleCloudRunService#secret_key_ref}

---

### GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef <a name="GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef {
	Key: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef.property.key">Key</a></code> | <code>*string</code> | A Cloud Secret Manager secret version. Must be 'latest' for the latest version or an integer for a specific version. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef.property.name">Name</a></code> | <code>*string</code> | The name of the secret in Cloud Secret Manager. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef.property.key"></a>

```go
Key *string
```

- *Type:* *string

A Cloud Secret Manager secret version. Must be 'latest' for the latest version or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#key GoogleCloudRunService#key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the secret in Cloud Secret Manager.

By default, the secret is assumed to be in the same project.
If the secret is in another project, you must define an alias.
An alias definition has the form:
{alias}:projects/{project-id|project-number}/secrets/{secret-name}.
If multiple alias definitions are needed, they must be separated by commas.
The alias definitions must be set on the run.googleapis.com/secrets annotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#name GoogleCloudRunService#name}

---

### GoogleCloudRunServiceTemplateSpecContainersLivenessProbe <a name="GoogleCloudRunServiceTemplateSpecContainersLivenessProbe" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe {
	FailureThreshold: *f64,
	Grpc: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc,
	HttpGet: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet,
	InitialDelaySeconds: *f64,
	PeriodSeconds: *f64,
	TimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>*f64</code> | Number of seconds after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value is 3600. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | Number of seconds after which the probe times out. |

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#failure_threshold GoogleCloudRunService#failure_threshold}

---

##### `Grpc`<sup>Optional</sup> <a name="Grpc" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe.property.grpc"></a>

```go
Grpc GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#grpc GoogleCloudRunService#grpc}

---

##### `HttpGet`<sup>Optional</sup> <a name="HttpGet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe.property.httpGet"></a>

```go
HttpGet GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#http_get GoogleCloudRunService#http_get}

---

##### `InitialDelaySeconds`<sup>Optional</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe.property.initialDelaySeconds"></a>

```go
InitialDelaySeconds *f64
```

- *Type:* *f64

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value is 3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#initial_delay_seconds GoogleCloudRunService#initial_delay_seconds}

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe.property.periodSeconds"></a>

```go
PeriodSeconds *f64
```

- *Type:* *f64

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value is 3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#period_seconds GoogleCloudRunService#period_seconds}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600.
Must be smaller than period_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#timeout_seconds GoogleCloudRunService#timeout_seconds}

---

### GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc <a name="GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc {
	Port: *f64,
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc.property.port">Port</a></code> | <code>*f64</code> | Port number to access on the container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc.property.service">Service</a></code> | <code>*string</code> | The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#port GoogleCloudRunService#port}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc.property.service"></a>

```go
Service *string
```

- *Type:* *string

The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#service GoogleCloudRunService#service}

---

### GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet <a name="GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet {
	HttpHeaders: interface{},
	Path: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet.property.httpHeaders">HttpHeaders</a></code> | <code>interface{}</code> | http_headers block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet.property.path">Path</a></code> | <code>*string</code> | Path to access on the HTTP server. If set, it should not be empty string. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet.property.port">Port</a></code> | <code>*f64</code> | Port number to access on the container. |

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet.property.httpHeaders"></a>

```go
HttpHeaders interface{}
```

- *Type:* interface{}

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#http_headers GoogleCloudRunService#http_headers}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to access on the HTTP server. If set, it should not be empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#path GoogleCloudRunService#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#port GoogleCloudRunService#port}

---

### GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders <a name="GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders.property.name">Name</a></code> | <code>*string</code> | The header field name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders.property.value">Value</a></code> | <code>*string</code> | The header field value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#name GoogleCloudRunService#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#value GoogleCloudRunService#value}

---

### GoogleCloudRunServiceTemplateSpecContainersPorts <a name="GoogleCloudRunServiceTemplateSpecContainersPorts" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPorts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersPorts {
	ContainerPort: *f64,
	Name: *string,
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPorts.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | Port number the container listens on. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPorts.property.name">Name</a></code> | <code>*string</code> | If specified, used to specify which protocol to use. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPorts.property.protocol">Protocol</a></code> | <code>*string</code> | Protocol for port. Must be "TCP". Defaults to "TCP". |

---

##### `ContainerPort`<sup>Optional</sup> <a name="ContainerPort" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPorts.property.containerPort"></a>

```go
ContainerPort *f64
```

- *Type:* *f64

Port number the container listens on.

This must be a valid port number (between 1 and 65535). Defaults to "8080".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#container_port GoogleCloudRunService#container_port}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPorts.property.name"></a>

```go
Name *string
```

- *Type:* *string

If specified, used to specify which protocol to use.

Allowed values are "http1" (HTTP/1) and "h2c" (HTTP/2 end-to-end). Defaults to "http1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#name GoogleCloudRunService#name}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPorts.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Protocol for port. Must be "TCP". Defaults to "TCP".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#protocol GoogleCloudRunService#protocol}

---

### GoogleCloudRunServiceTemplateSpecContainersResources <a name="GoogleCloudRunServiceTemplateSpecContainersResources" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersResources {
	Limits: *map[string]*string,
	Requests: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResources.property.limits">Limits</a></code> | <code>*map[string]*string</code> | Limits describes the maximum amount of compute resources allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResources.property.requests">Requests</a></code> | <code>*map[string]*string</code> | Requests describes the minimum amount of compute resources required. |

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResources.property.limits"></a>

```go
Limits *map[string]*string
```

- *Type:* *map[string]*string

Limits describes the maximum amount of compute resources allowed.

The values of the map is string form of the 'quantity' k8s type:
https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#limits GoogleCloudRunService#limits}

---

##### `Requests`<sup>Optional</sup> <a name="Requests" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResources.property.requests"></a>

```go
Requests *map[string]*string
```

- *Type:* *map[string]*string

Requests describes the minimum amount of compute resources required.

If Requests is omitted for a container, it defaults to Limits if that is
explicitly specified, otherwise to an implementation-defined value.
The values of the map is string form of the 'quantity' k8s type:
https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#requests GoogleCloudRunService#requests}

---

### GoogleCloudRunServiceTemplateSpecContainersStartupProbe <a name="GoogleCloudRunServiceTemplateSpecContainersStartupProbe" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersStartupProbe {
	FailureThreshold: *f64,
	Grpc: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc,
	HttpGet: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet,
	InitialDelaySeconds: *f64,
	PeriodSeconds: *f64,
	TcpSocket: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket,
	TimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc">GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet">GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>*f64</code> | Number of seconds after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value is 240. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe.property.tcpSocket">TcpSocket</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket">GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | Number of seconds after which the probe times out. |

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#failure_threshold GoogleCloudRunService#failure_threshold}

---

##### `Grpc`<sup>Optional</sup> <a name="Grpc" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe.property.grpc"></a>

```go
Grpc GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc">GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#grpc GoogleCloudRunService#grpc}

---

##### `HttpGet`<sup>Optional</sup> <a name="HttpGet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe.property.httpGet"></a>

```go
HttpGet GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet">GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#http_get GoogleCloudRunService#http_get}

---

##### `InitialDelaySeconds`<sup>Optional</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe.property.initialDelaySeconds"></a>

```go
InitialDelaySeconds *f64
```

- *Type:* *f64

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#initial_delay_seconds GoogleCloudRunService#initial_delay_seconds}

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe.property.periodSeconds"></a>

```go
PeriodSeconds *f64
```

- *Type:* *f64

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#period_seconds GoogleCloudRunService#period_seconds}

---

##### `TcpSocket`<sup>Optional</sup> <a name="TcpSocket" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe.property.tcpSocket"></a>

```go
TcpSocket GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket">GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#tcp_socket GoogleCloudRunService#tcp_socket}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600.
Must be smaller than periodSeconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#timeout_seconds GoogleCloudRunService#timeout_seconds}

---

### GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc <a name="GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc {
	Port: *f64,
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc.property.port">Port</a></code> | <code>*f64</code> | Port number to access on the container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc.property.service">Service</a></code> | <code>*string</code> | The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#port GoogleCloudRunService#port}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc.property.service"></a>

```go
Service *string
```

- *Type:* *string

The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#service GoogleCloudRunService#service}

---

### GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet <a name="GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet {
	HttpHeaders: interface{},
	Path: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet.property.httpHeaders">HttpHeaders</a></code> | <code>interface{}</code> | http_headers block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet.property.path">Path</a></code> | <code>*string</code> | Path to access on the HTTP server. If set, it should not be empty string. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet.property.port">Port</a></code> | <code>*f64</code> | Port number to access on the container. |

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet.property.httpHeaders"></a>

```go
HttpHeaders interface{}
```

- *Type:* interface{}

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#http_headers GoogleCloudRunService#http_headers}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to access on the HTTP server. If set, it should not be empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#path GoogleCloudRunService#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#port GoogleCloudRunService#port}

---

### GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders <a name="GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders.property.name">Name</a></code> | <code>*string</code> | The header field name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders.property.value">Value</a></code> | <code>*string</code> | The header field value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#name GoogleCloudRunService#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#value GoogleCloudRunService#value}

---

### GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket <a name="GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket {
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket.property.port">Port</a></code> | <code>*f64</code> | Port number to access on the container. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#port GoogleCloudRunService#port}

---

### GoogleCloudRunServiceTemplateSpecContainersVolumeMounts <a name="GoogleCloudRunServiceTemplateSpecContainersVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecContainersVolumeMounts {
	MountPath: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMounts.property.mountPath">MountPath</a></code> | <code>*string</code> | Path within the container at which the volume should be mounted.  Must not contain ':'. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMounts.property.name">Name</a></code> | <code>*string</code> | This must match the Name of a Volume. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMounts.property.mountPath"></a>

```go
MountPath *string
```

- *Type:* *string

Path within the container at which the volume should be mounted.  Must not contain ':'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#mount_path GoogleCloudRunService#mount_path}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMounts.property.name"></a>

```go
Name *string
```

- *Type:* *string

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#name GoogleCloudRunService#name}

---

### GoogleCloudRunServiceTemplateSpecVolumes <a name="GoogleCloudRunServiceTemplateSpecVolumes" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecVolumes {
	Name: *string,
	Csi: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsi,
	EmptyDir: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDir,
	Nfs: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfs,
	Secret: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecret,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumes.property.name">Name</a></code> | <code>*string</code> | Volume's name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumes.property.csi">Csi</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsi">GoogleCloudRunServiceTemplateSpecVolumesCsi</a></code> | csi block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumes.property.emptyDir">EmptyDir</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDir">GoogleCloudRunServiceTemplateSpecVolumesEmptyDir</a></code> | empty_dir block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumes.property.nfs">Nfs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfs">GoogleCloudRunServiceTemplateSpecVolumesNfs</a></code> | nfs block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumes.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecret">GoogleCloudRunServiceTemplateSpecVolumesSecret</a></code> | secret block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#name GoogleCloudRunService#name}

---

##### `Csi`<sup>Optional</sup> <a name="Csi" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumes.property.csi"></a>

```go
Csi GoogleCloudRunServiceTemplateSpecVolumesCsi
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsi">GoogleCloudRunServiceTemplateSpecVolumesCsi</a>

csi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#csi GoogleCloudRunService#csi}

---

##### `EmptyDir`<sup>Optional</sup> <a name="EmptyDir" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumes.property.emptyDir"></a>

```go
EmptyDir GoogleCloudRunServiceTemplateSpecVolumesEmptyDir
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDir">GoogleCloudRunServiceTemplateSpecVolumesEmptyDir</a>

empty_dir block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#empty_dir GoogleCloudRunService#empty_dir}

---

##### `Nfs`<sup>Optional</sup> <a name="Nfs" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumes.property.nfs"></a>

```go
Nfs GoogleCloudRunServiceTemplateSpecVolumesNfs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfs">GoogleCloudRunServiceTemplateSpecVolumesNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#nfs GoogleCloudRunService#nfs}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumes.property.secret"></a>

```go
Secret GoogleCloudRunServiceTemplateSpecVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecret">GoogleCloudRunServiceTemplateSpecVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#secret GoogleCloudRunService#secret}

---

### GoogleCloudRunServiceTemplateSpecVolumesCsi <a name="GoogleCloudRunServiceTemplateSpecVolumesCsi" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsi.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecVolumesCsi {
	Driver: *string,
	ReadOnly: interface{},
	VolumeAttributes: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsi.property.driver">Driver</a></code> | <code>*string</code> | Unique name representing the type of file system to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsi.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | If true, all mounts created from this volume will be read-only. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsi.property.volumeAttributes">VolumeAttributes</a></code> | <code>*map[string]*string</code> | Driver-specific attributes. |

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsi.property.driver"></a>

```go
Driver *string
```

- *Type:* *string

Unique name representing the type of file system to be created.

Cloud Run supports the following values:

* gcsfuse.run.googleapis.com: Mount a Google Cloud Storage bucket using GCSFuse. This driver requires the
  run.googleapis.com/execution-environment annotation to be unset or set to "gen2"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#driver GoogleCloudRunService#driver}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsi.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

If true, all mounts created from this volume will be read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#read_only GoogleCloudRunService#read_only}

---

##### `VolumeAttributes`<sup>Optional</sup> <a name="VolumeAttributes" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsi.property.volumeAttributes"></a>

```go
VolumeAttributes *map[string]*string
```

- *Type:* *map[string]*string

Driver-specific attributes.

The following options are supported for available drivers:

* gcsfuse.run.googleapis.com

  * bucketName: The name of the Cloud Storage Bucket that backs this volume. The Cloud Run Service identity must have access to this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#volume_attributes GoogleCloudRunService#volume_attributes}

---

### GoogleCloudRunServiceTemplateSpecVolumesEmptyDir <a name="GoogleCloudRunServiceTemplateSpecVolumesEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDir.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecVolumesEmptyDir {
	Medium: *string,
	SizeLimit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDir.property.medium">Medium</a></code> | <code>*string</code> | The medium on which the data is stored. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDir.property.sizeLimit">SizeLimit</a></code> | <code>*string</code> | Limit on the storage usable by this EmptyDir volume. |

---

##### `Medium`<sup>Optional</sup> <a name="Medium" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDir.property.medium"></a>

```go
Medium *string
```

- *Type:* *string

The medium on which the data is stored.

The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#medium GoogleCloudRunService#medium}

---

##### `SizeLimit`<sup>Optional</sup> <a name="SizeLimit" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDir.property.sizeLimit"></a>

```go
SizeLimit *string
```

- *Type:* *string

Limit on the storage usable by this EmptyDir volume.

The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#size_limit GoogleCloudRunService#size_limit}

---

### GoogleCloudRunServiceTemplateSpecVolumesNfs <a name="GoogleCloudRunServiceTemplateSpecVolumesNfs" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecVolumesNfs {
	Path: *string,
	Server: *string,
	ReadOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfs.property.path">Path</a></code> | <code>*string</code> | Path exported by the NFS server. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfs.property.server">Server</a></code> | <code>*string</code> | IP address or hostname of the NFS server. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfs.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | If true, mount the NFS volume as read only in all mounts. Defaults to false. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfs.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path exported by the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#path GoogleCloudRunService#path}

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfs.property.server"></a>

```go
Server *string
```

- *Type:* *string

IP address or hostname of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#server GoogleCloudRunService#server}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfs.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

If true, mount the NFS volume as read only in all mounts. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#read_only GoogleCloudRunService#read_only}

---

### GoogleCloudRunServiceTemplateSpecVolumesSecret <a name="GoogleCloudRunServiceTemplateSpecVolumesSecret" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecVolumesSecret {
	SecretName: *string,
	DefaultMode: *f64,
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecret.property.secretName">SecretName</a></code> | <code>*string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecret.property.defaultMode">DefaultMode</a></code> | <code>*f64</code> | Mode bits to use on created files by default. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecret.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecret.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

The name of the secret in Cloud Secret Manager.

By default, the secret
is assumed to be in the same project.
If the secret is in another project, you must define an alias.
An alias definition has the form:
{alias}:projects/{project-id|project-number}/secrets/{secret-name}.
If multiple alias definitions are needed, they must be separated by
commas.
The alias definitions must be set on the run.googleapis.com/secrets
annotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#secret_name GoogleCloudRunService#secret_name}

---

##### `DefaultMode`<sup>Optional</sup> <a name="DefaultMode" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecret.property.defaultMode"></a>

```go
DefaultMode *f64
```

- *Type:* *f64

Mode bits to use on created files by default.

Must be a value between 0000
and 0777. Defaults to 0644. Directories within the path are not affected by
this setting. This might be in conflict with other options that affect the
file mode, like fsGroup, and the result can be other mode bits set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#default_mode GoogleCloudRunService#default_mode}

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecret.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#items GoogleCloudRunService#items}

---

### GoogleCloudRunServiceTemplateSpecVolumesSecretItems <a name="GoogleCloudRunServiceTemplateSpecVolumesSecretItems" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTemplateSpecVolumesSecretItems {
	Key: *string,
	Path: *string,
	Mode: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItems.property.key">Key</a></code> | <code>*string</code> | The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItems.property.path">Path</a></code> | <code>*string</code> | The relative path of the file to map the key to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItems.property.mode">Mode</a></code> | <code>*f64</code> | Mode bits to use on this file, must be a value between 0000 and 0777. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItems.property.key"></a>

```go
Key *string
```

- *Type:* *string

The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#key GoogleCloudRunService#key}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItems.property.path"></a>

```go
Path *string
```

- *Type:* *string

The relative path of the file to map the key to.

May not be an absolute path.
May not contain the path element '..'.
May not start with the string '..'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#path GoogleCloudRunService#path}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItems.property.mode"></a>

```go
Mode *f64
```

- *Type:* *f64

Mode bits to use on this file, must be a value between 0000 and 0777.

If
not specified, the volume defaultMode will be used. This might be in
conflict with other options that affect the file mode, like fsGroup, and
the result can be other mode bits set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#mode GoogleCloudRunService#mode}

---

### GoogleCloudRunServiceTimeouts <a name="GoogleCloudRunServiceTimeouts" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#create GoogleCloudRunService#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#delete GoogleCloudRunService#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#update GoogleCloudRunService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#create GoogleCloudRunService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#delete GoogleCloudRunService#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#update GoogleCloudRunService#update}.

---

### GoogleCloudRunServiceTraffic <a name="GoogleCloudRunServiceTraffic" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTraffic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTraffic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

&googlecloudrunservice.GoogleCloudRunServiceTraffic {
	Percent: *f64,
	LatestRevision: interface{},
	RevisionName: *string,
	Tag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTraffic.property.percent">Percent</a></code> | <code>*f64</code> | Percent specifies percent of the traffic to this Revision or Configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTraffic.property.latestRevision">LatestRevision</a></code> | <code>interface{}</code> | LatestRevision may be optionally provided to indicate that the latest ready Revision of the Configuration should be used for this traffic target. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTraffic.property.revisionName">RevisionName</a></code> | <code>*string</code> | RevisionName of a specific revision to which to send this portion of traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTraffic.property.tag">Tag</a></code> | <code>*string</code> | Tag is optionally used to expose a dedicated url for referencing this target exclusively. |

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTraffic.property.percent"></a>

```go
Percent *f64
```

- *Type:* *f64

Percent specifies percent of the traffic to this Revision or Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#percent GoogleCloudRunService#percent}

---

##### `LatestRevision`<sup>Optional</sup> <a name="LatestRevision" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTraffic.property.latestRevision"></a>

```go
LatestRevision interface{}
```

- *Type:* interface{}

LatestRevision may be optionally provided to indicate that the latest ready Revision of the Configuration should be used for this traffic target.

When
provided LatestRevision must be true if RevisionName is empty; it must be
false when RevisionName is non-empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#latest_revision GoogleCloudRunService#latest_revision}

---

##### `RevisionName`<sup>Optional</sup> <a name="RevisionName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTraffic.property.revisionName"></a>

```go
RevisionName *string
```

- *Type:* *string

RevisionName of a specific revision to which to send this portion of traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#revision_name GoogleCloudRunService#revision_name}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTraffic.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

Tag is optionally used to expose a dedicated url for referencing this target exclusively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_run_service#tag GoogleCloudRunService#tag}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudRunServiceMetadataOutputReference <a name="GoogleCloudRunServiceMetadataOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadata">GoogleCloudRunServiceMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceMetadata">GoogleCloudRunServiceMetadata</a>

---


### GoogleCloudRunServiceStatusConditionsList <a name="GoogleCloudRunServiceStatusConditionsList" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceStatusConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunServiceStatusConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.get"></a>

```go
func Get(index *f64) GoogleCloudRunServiceStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCloudRunServiceStatusConditionsOutputReference <a name="GoogleCloudRunServiceStatusConditionsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceStatusConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunServiceStatusConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditions">GoogleCloudRunServiceStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceStatusConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditions">GoogleCloudRunServiceStatusConditions</a>

---


### GoogleCloudRunServiceStatusList <a name="GoogleCloudRunServiceStatusList" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunServiceStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.get"></a>

```go
func Get(index *f64) GoogleCloudRunServiceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCloudRunServiceStatusOutputReference <a name="GoogleCloudRunServiceStatusOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunServiceStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList">GoogleCloudRunServiceStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.property.latestCreatedRevisionName">LatestCreatedRevisionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.property.latestReadyRevisionName">LatestReadyRevisionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.property.observedGeneration">ObservedGeneration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.property.traffic">Traffic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList">GoogleCloudRunServiceStatusTrafficList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatus">GoogleCloudRunServiceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.property.conditions"></a>

```go
func Conditions() GoogleCloudRunServiceStatusConditionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusConditionsList">GoogleCloudRunServiceStatusConditionsList</a>

---

##### `LatestCreatedRevisionName`<sup>Required</sup> <a name="LatestCreatedRevisionName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.property.latestCreatedRevisionName"></a>

```go
func LatestCreatedRevisionName() *string
```

- *Type:* *string

---

##### `LatestReadyRevisionName`<sup>Required</sup> <a name="LatestReadyRevisionName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.property.latestReadyRevisionName"></a>

```go
func LatestReadyRevisionName() *string
```

- *Type:* *string

---

##### `ObservedGeneration`<sup>Required</sup> <a name="ObservedGeneration" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.property.observedGeneration"></a>

```go
func ObservedGeneration() *f64
```

- *Type:* *f64

---

##### `Traffic`<sup>Required</sup> <a name="Traffic" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.property.traffic"></a>

```go
func Traffic() GoogleCloudRunServiceStatusTrafficList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList">GoogleCloudRunServiceStatusTrafficList</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatus">GoogleCloudRunServiceStatus</a>

---


### GoogleCloudRunServiceStatusTrafficList <a name="GoogleCloudRunServiceStatusTrafficList" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceStatusTrafficList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunServiceStatusTrafficList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.get"></a>

```go
func Get(index *f64) GoogleCloudRunServiceStatusTrafficOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCloudRunServiceStatusTrafficOutputReference <a name="GoogleCloudRunServiceStatusTrafficOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceStatusTrafficOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunServiceStatusTrafficOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.property.latestRevision">LatestRevision</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.property.percent">Percent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.property.revisionName">RevisionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTraffic">GoogleCloudRunServiceStatusTraffic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LatestRevision`<sup>Required</sup> <a name="LatestRevision" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.property.latestRevision"></a>

```go
func LatestRevision() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.property.percent"></a>

```go
func Percent() *f64
```

- *Type:* *f64

---

##### `RevisionName`<sup>Required</sup> <a name="RevisionName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.property.revisionName"></a>

```go
func RevisionName() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTrafficOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceStatusTraffic
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceStatusTraffic">GoogleCloudRunServiceStatusTraffic</a>

---


### GoogleCloudRunServiceTemplateMetadataOutputReference <a name="GoogleCloudRunServiceTemplateMetadataOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadata">GoogleCloudRunServiceTemplateMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadata">GoogleCloudRunServiceTemplateMetadata</a>

---


### GoogleCloudRunServiceTemplateOutputReference <a name="GoogleCloudRunServiceTemplateOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.resetSpec">ResetSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.putMetadata"></a>

```go
func PutMetadata(value GoogleCloudRunServiceTemplateMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadata">GoogleCloudRunServiceTemplateMetadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.putSpec"></a>

```go
func PutSpec(value GoogleCloudRunServiceTemplateSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec">GoogleCloudRunServiceTemplateSpec</a>

---

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.resetSpec"></a>

```go
func ResetSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference">GoogleCloudRunServiceTemplateMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference">GoogleCloudRunServiceTemplateSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadata">GoogleCloudRunServiceTemplateMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec">GoogleCloudRunServiceTemplateSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplate">GoogleCloudRunServiceTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.property.metadata"></a>

```go
func Metadata() GoogleCloudRunServiceTemplateMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadataOutputReference">GoogleCloudRunServiceTemplateMetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.property.spec"></a>

```go
func Spec() GoogleCloudRunServiceTemplateSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference">GoogleCloudRunServiceTemplateSpecOutputReference</a>

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.property.metadataInput"></a>

```go
func MetadataInput() GoogleCloudRunServiceTemplateMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateMetadata">GoogleCloudRunServiceTemplateMetadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.property.specInput"></a>

```go
func SpecInput() GoogleCloudRunServiceTemplateSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec">GoogleCloudRunServiceTemplateSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplate">GoogleCloudRunServiceTemplate</a>

---


### GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a>

---


### GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.putLocalObjectReference">PutLocalObjectReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resetLocalObjectReference">ResetLocalObjectReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resetOptional">ResetOptional</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocalObjectReference` <a name="PutLocalObjectReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.putLocalObjectReference"></a>

```go
func PutLocalObjectReference(value GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.putLocalObjectReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a>

---

##### `ResetLocalObjectReference` <a name="ResetLocalObjectReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resetLocalObjectReference"></a>

```go
func ResetLocalObjectReference()
```

##### `ResetOptional` <a name="ResetOptional" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resetOptional"></a>

```go
func ResetOptional()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.localObjectReference">LocalObjectReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.localObjectReferenceInput">LocalObjectReferenceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.optionalInput">OptionalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.optional">Optional</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalObjectReference`<sup>Required</sup> <a name="LocalObjectReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.localObjectReference"></a>

```go
func LocalObjectReference() GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference</a>

---

##### `LocalObjectReferenceInput`<sup>Optional</sup> <a name="LocalObjectReferenceInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.localObjectReferenceInput"></a>

```go
func LocalObjectReferenceInput() GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a>

---

##### `OptionalInput`<sup>Optional</sup> <a name="OptionalInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.optionalInput"></a>

```go
func OptionalInput() interface{}
```

- *Type:* interface{}

---

##### `Optional`<sup>Required</sup> <a name="Optional" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.optional"></a>

```go
func Optional() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a>

---


### GoogleCloudRunServiceTemplateSpecContainersEnvFromList <a name="GoogleCloudRunServiceTemplateSpecContainersEnvFromList" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersEnvFromList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunServiceTemplateSpecContainersEnvFromList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.get"></a>

```go
func Get(index *f64) GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.putConfigMapRef">PutConfigMapRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.putSecretRef">PutSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.resetConfigMapRef">ResetConfigMapRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.resetSecretRef">ResetSecretRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigMapRef` <a name="PutConfigMapRef" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.putConfigMapRef"></a>

```go
func PutConfigMapRef(value GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.putConfigMapRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a>

---

##### `PutSecretRef` <a name="PutSecretRef" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.putSecretRef"></a>

```go
func PutSecretRef(value GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef">GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef</a>

---

##### `ResetConfigMapRef` <a name="ResetConfigMapRef" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.resetConfigMapRef"></a>

```go
func ResetConfigMapRef()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSecretRef` <a name="ResetSecretRef" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.resetSecretRef"></a>

```go
func ResetSecretRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.configMapRef">ConfigMapRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.secretRef">SecretRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.configMapRefInput">ConfigMapRefInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.secretRefInput">SecretRefInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef">GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigMapRef`<sup>Required</sup> <a name="ConfigMapRef" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.configMapRef"></a>

```go
func ConfigMapRef() GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference</a>

---

##### `SecretRef`<sup>Required</sup> <a name="SecretRef" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.secretRef"></a>

```go
func SecretRef() GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference</a>

---

##### `ConfigMapRefInput`<sup>Optional</sup> <a name="ConfigMapRefInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.configMapRefInput"></a>

```go
func ConfigMapRefInput() GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a>

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SecretRefInput`<sup>Optional</sup> <a name="SecretRefInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.secretRefInput"></a>

```go
func SecretRefInput() GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef">GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef</a>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a>

---


### GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.putLocalObjectReference">PutLocalObjectReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resetLocalObjectReference">ResetLocalObjectReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resetOptional">ResetOptional</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocalObjectReference` <a name="PutLocalObjectReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.putLocalObjectReference"></a>

```go
func PutLocalObjectReference(value GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.putLocalObjectReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a>

---

##### `ResetLocalObjectReference` <a name="ResetLocalObjectReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resetLocalObjectReference"></a>

```go
func ResetLocalObjectReference()
```

##### `ResetOptional` <a name="ResetOptional" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resetOptional"></a>

```go
func ResetOptional()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.localObjectReference">LocalObjectReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.localObjectReferenceInput">LocalObjectReferenceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.optionalInput">OptionalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.optional">Optional</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef">GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalObjectReference`<sup>Required</sup> <a name="LocalObjectReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.localObjectReference"></a>

```go
func LocalObjectReference() GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference</a>

---

##### `LocalObjectReferenceInput`<sup>Optional</sup> <a name="LocalObjectReferenceInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.localObjectReferenceInput"></a>

```go
func LocalObjectReferenceInput() GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a>

---

##### `OptionalInput`<sup>Optional</sup> <a name="OptionalInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.optionalInput"></a>

```go
func OptionalInput() interface{}
```

- *Type:* interface{}

---

##### `Optional`<sup>Required</sup> <a name="Optional" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.optional"></a>

```go
func Optional() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef">GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef</a>

---


### GoogleCloudRunServiceTemplateSpecContainersEnvList <a name="GoogleCloudRunServiceTemplateSpecContainersEnvList" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersEnvList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunServiceTemplateSpecContainersEnvList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.get"></a>

```go
func Get(index *f64) GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.putValueFrom">PutValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.resetValueFrom">ResetValueFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueFrom` <a name="PutValueFrom" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.putValueFrom"></a>

```go
func PutValueFrom(value GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.putValueFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom">GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValueFrom` <a name="ResetValueFrom" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.resetValueFrom"></a>

```go
func ResetValueFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.valueFrom">ValueFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference">GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.valueFromInput">ValueFromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom">GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.valueFrom"></a>

```go
func ValueFrom() GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference">GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueFromInput`<sup>Optional</sup> <a name="ValueFromInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.valueFromInput"></a>

```go
func ValueFromInput() GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom">GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.putSecretKeyRef">PutSecretKeyRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretKeyRef` <a name="PutSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.putSecretKeyRef"></a>

```go
func PutSecretKeyRef(value GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference">GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.secretKeyRefInput">SecretKeyRefInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom">GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretKeyRef`<sup>Required</sup> <a name="SecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.secretKeyRef"></a>

```go
func SecretKeyRef() GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference">GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference</a>

---

##### `SecretKeyRefInput`<sup>Optional</sup> <a name="SecretKeyRefInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.secretKeyRefInput"></a>

```go
func SecretKeyRefInput() GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom">GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom</a>

---


### GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a>

---


### GoogleCloudRunServiceTemplateSpecContainersList <a name="GoogleCloudRunServiceTemplateSpecContainersList" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunServiceTemplateSpecContainersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.get"></a>

```go
func Get(index *f64) GoogleCloudRunServiceTemplateSpecContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.resetService"></a>

```go
func ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc</a>

---


### GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList <a name="GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.get"></a>

```go
func Get(index *f64) GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.putHttpHeaders">PutHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpHeaders` <a name="PutHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.putHttpHeaders"></a>

```go
func PutHttpHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```go
func ResetHttpHeaders()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```go
func HttpHeaders() GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList</a>

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```go
func HttpHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet</a>

---


### GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.putGrpc">PutGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.putHttpGet">PutHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetGrpc">ResetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetHttpGet">ResetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetInitialDelaySeconds">ResetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrpc` <a name="PutGrpc" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.putGrpc"></a>

```go
func PutGrpc(value GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc</a>

---

##### `PutHttpGet` <a name="PutHttpGet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.putHttpGet"></a>

```go
func PutHttpGet(value GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet</a>

---

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetGrpc` <a name="ResetGrpc" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetGrpc"></a>

```go
func ResetGrpc()
```

##### `ResetHttpGet` <a name="ResetHttpGet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetHttpGet"></a>

```go
func ResetHttpGet()
```

##### `ResetInitialDelaySeconds` <a name="ResetInitialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetInitialDelaySeconds"></a>

```go
func ResetInitialDelaySeconds()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetPeriodSeconds"></a>

```go
func ResetPeriodSeconds()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.grpcInput">GrpcInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.httpGetInput">HttpGetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.initialDelaySecondsInput">InitialDelaySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe">GoogleCloudRunServiceTemplateSpecContainersLivenessProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Grpc`<sup>Required</sup> <a name="Grpc" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.grpc"></a>

```go
func Grpc() GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference</a>

---

##### `HttpGet`<sup>Required</sup> <a name="HttpGet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.httpGet"></a>

```go
func HttpGet() GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference</a>

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `GrpcInput`<sup>Optional</sup> <a name="GrpcInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.grpcInput"></a>

```go
func GrpcInput() GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc</a>

---

##### `HttpGetInput`<sup>Optional</sup> <a name="HttpGetInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.httpGetInput"></a>

```go
func HttpGetInput() GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet</a>

---

##### `InitialDelaySecondsInput`<sup>Optional</sup> <a name="InitialDelaySecondsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.initialDelaySecondsInput"></a>

```go
func InitialDelaySecondsInput() *f64
```

- *Type:* *f64

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.periodSecondsInput"></a>

```go
func PeriodSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `InitialDelaySeconds`<sup>Required</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```go
func InitialDelaySeconds() *f64
```

- *Type:* *f64

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.periodSeconds"></a>

```go
func PeriodSeconds() *f64
```

- *Type:* *f64

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpecContainersLivenessProbe
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe">GoogleCloudRunServiceTemplateSpecContainersLivenessProbe</a>

---


### GoogleCloudRunServiceTemplateSpecContainersOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunServiceTemplateSpecContainersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putEnvFrom">PutEnvFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putLivenessProbe">PutLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putStartupProbe">PutStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putVolumeMounts">PutVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetEnvFrom">ResetEnvFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetLivenessProbe">ResetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetStartupProbe">ResetStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetVolumeMounts">ResetVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetWorkingDir">ResetWorkingDir</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putEnv"></a>

```go
func PutEnv(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEnvFrom` <a name="PutEnvFrom" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putEnvFrom"></a>

```go
func PutEnvFrom(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putEnvFrom.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLivenessProbe` <a name="PutLivenessProbe" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putLivenessProbe"></a>

```go
func PutLivenessProbe(value GoogleCloudRunServiceTemplateSpecContainersLivenessProbe)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe">GoogleCloudRunServiceTemplateSpecContainersLivenessProbe</a>

---

##### `PutPorts` <a name="PutPorts" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putPorts"></a>

```go
func PutPorts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putResources"></a>

```go
func PutResources(value GoogleCloudRunServiceTemplateSpecContainersResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResources">GoogleCloudRunServiceTemplateSpecContainersResources</a>

---

##### `PutStartupProbe` <a name="PutStartupProbe" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putStartupProbe"></a>

```go
func PutStartupProbe(value GoogleCloudRunServiceTemplateSpecContainersStartupProbe)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe">GoogleCloudRunServiceTemplateSpecContainersStartupProbe</a>

---

##### `PutVolumeMounts` <a name="PutVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putVolumeMounts"></a>

```go
func PutVolumeMounts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetEnvFrom` <a name="ResetEnvFrom" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetEnvFrom"></a>

```go
func ResetEnvFrom()
```

##### `ResetLivenessProbe` <a name="ResetLivenessProbe" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetLivenessProbe"></a>

```go
func ResetLivenessProbe()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetPorts"></a>

```go
func ResetPorts()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetResources"></a>

```go
func ResetResources()
```

##### `ResetStartupProbe` <a name="ResetStartupProbe" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetStartupProbe"></a>

```go
func ResetStartupProbe()
```

##### `ResetVolumeMounts` <a name="ResetVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetVolumeMounts"></a>

```go
func ResetVolumeMounts()
```

##### `ResetWorkingDir` <a name="ResetWorkingDir" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.resetWorkingDir"></a>

```go
func ResetWorkingDir()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.env">Env</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList">GoogleCloudRunServiceTemplateSpecContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.envFrom">EnvFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList">GoogleCloudRunServiceTemplateSpecContainersEnvFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.livenessProbe">LivenessProbe</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList">GoogleCloudRunServiceTemplateSpecContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference">GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference">GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.volumeMounts">VolumeMounts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList">GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.envFromInput">EnvFromInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.envInput">EnvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.livenessProbeInput">LivenessProbeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe">GoogleCloudRunServiceTemplateSpecContainersLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.portsInput">PortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResources">GoogleCloudRunServiceTemplateSpecContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.startupProbeInput">StartupProbeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe">GoogleCloudRunServiceTemplateSpecContainersStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.volumeMountsInput">VolumeMountsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.workingDirInput">WorkingDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.workingDir">WorkingDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.env"></a>

```go
func Env() GoogleCloudRunServiceTemplateSpecContainersEnvList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvList">GoogleCloudRunServiceTemplateSpecContainersEnvList</a>

---

##### `EnvFrom`<sup>Required</sup> <a name="EnvFrom" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.envFrom"></a>

```go
func EnvFrom() GoogleCloudRunServiceTemplateSpecContainersEnvFromList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersEnvFromList">GoogleCloudRunServiceTemplateSpecContainersEnvFromList</a>

---

##### `LivenessProbe`<sup>Required</sup> <a name="LivenessProbe" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.livenessProbe"></a>

```go
func LivenessProbe() GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference">GoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.ports"></a>

```go
func Ports() GoogleCloudRunServiceTemplateSpecContainersPortsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList">GoogleCloudRunServiceTemplateSpecContainersPortsList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.resources"></a>

```go
func Resources() GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference">GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference</a>

---

##### `StartupProbe`<sup>Required</sup> <a name="StartupProbe" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.startupProbe"></a>

```go
func StartupProbe() GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference">GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference</a>

---

##### `VolumeMounts`<sup>Required</sup> <a name="VolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.volumeMounts"></a>

```go
func VolumeMounts() GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList">GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvFromInput`<sup>Optional</sup> <a name="EnvFromInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.envFromInput"></a>

```go
func EnvFromInput() interface{}
```

- *Type:* interface{}

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.envInput"></a>

```go
func EnvInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `LivenessProbeInput`<sup>Optional</sup> <a name="LivenessProbeInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.livenessProbeInput"></a>

```go
func LivenessProbeInput() GoogleCloudRunServiceTemplateSpecContainersLivenessProbe
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersLivenessProbe">GoogleCloudRunServiceTemplateSpecContainersLivenessProbe</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.portsInput"></a>

```go
func PortsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() GoogleCloudRunServiceTemplateSpecContainersResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResources">GoogleCloudRunServiceTemplateSpecContainersResources</a>

---

##### `StartupProbeInput`<sup>Optional</sup> <a name="StartupProbeInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.startupProbeInput"></a>

```go
func StartupProbeInput() GoogleCloudRunServiceTemplateSpecContainersStartupProbe
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe">GoogleCloudRunServiceTemplateSpecContainersStartupProbe</a>

---

##### `VolumeMountsInput`<sup>Optional</sup> <a name="VolumeMountsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.volumeMountsInput"></a>

```go
func VolumeMountsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkingDirInput`<sup>Optional</sup> <a name="WorkingDirInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.workingDirInput"></a>

```go
func WorkingDirInput() *string
```

- *Type:* *string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `WorkingDir`<sup>Required</sup> <a name="WorkingDir" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.workingDir"></a>

```go
func WorkingDir() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTemplateSpecContainersPortsList <a name="GoogleCloudRunServiceTemplateSpecContainersPortsList" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersPortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunServiceTemplateSpecContainersPortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.get"></a>

```go
func Get(index *f64) GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.resetContainerPort">ResetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerPort` <a name="ResetContainerPort" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.resetContainerPort"></a>

```go
func ResetContainerPort()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.containerPortInput"></a>

```go
func ContainerPortInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.containerPort"></a>

```go
func ContainerPort() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.resetRequests">ResetRequests</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.resetLimits"></a>

```go
func ResetLimits()
```

##### `ResetRequests` <a name="ResetRequests" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.resetRequests"></a>

```go
func ResetRequests()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.limitsInput">LimitsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.requestsInput">RequestsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.limits">Limits</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.requests">Requests</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResources">GoogleCloudRunServiceTemplateSpecContainersResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.limitsInput"></a>

```go
func LimitsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestsInput`<sup>Optional</sup> <a name="RequestsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.requestsInput"></a>

```go
func RequestsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.limits"></a>

```go
func Limits() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.requests"></a>

```go
func Requests() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpecContainersResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersResources">GoogleCloudRunServiceTemplateSpecContainersResources</a>

---


### GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.resetService"></a>

```go
func ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc">GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc">GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc</a>

---


### GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList <a name="GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.get"></a>

```go
func Get(index *f64) GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.putHttpHeaders">PutHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpHeaders` <a name="PutHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.putHttpHeaders"></a>

```go
func PutHttpHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resetHttpHeaders"></a>

```go
func ResetHttpHeaders()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList">GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet">GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.httpHeaders"></a>

```go
func HttpHeaders() GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList">GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList</a>

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```go
func HttpHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet">GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet</a>

---


### GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.putGrpc">PutGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.putHttpGet">PutHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.putTcpSocket">PutTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetGrpc">ResetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetHttpGet">ResetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetInitialDelaySeconds">ResetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetTcpSocket">ResetTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrpc` <a name="PutGrpc" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.putGrpc"></a>

```go
func PutGrpc(value GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc">GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc</a>

---

##### `PutHttpGet` <a name="PutHttpGet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.putHttpGet"></a>

```go
func PutHttpGet(value GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet">GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet</a>

---

##### `PutTcpSocket` <a name="PutTcpSocket" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.putTcpSocket"></a>

```go
func PutTcpSocket(value GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.putTcpSocket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket">GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket</a>

---

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetGrpc` <a name="ResetGrpc" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetGrpc"></a>

```go
func ResetGrpc()
```

##### `ResetHttpGet` <a name="ResetHttpGet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetHttpGet"></a>

```go
func ResetHttpGet()
```

##### `ResetInitialDelaySeconds` <a name="ResetInitialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetInitialDelaySeconds"></a>

```go
func ResetInitialDelaySeconds()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetPeriodSeconds"></a>

```go
func ResetPeriodSeconds()
```

##### `ResetTcpSocket` <a name="ResetTcpSocket" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetTcpSocket"></a>

```go
func ResetTcpSocket()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference">GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference">GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.tcpSocket">TcpSocket</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference">GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.grpcInput">GrpcInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc">GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.httpGetInput">HttpGetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet">GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.initialDelaySecondsInput">InitialDelaySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.tcpSocketInput">TcpSocketInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket">GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe">GoogleCloudRunServiceTemplateSpecContainersStartupProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Grpc`<sup>Required</sup> <a name="Grpc" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.grpc"></a>

```go
func Grpc() GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference">GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference</a>

---

##### `HttpGet`<sup>Required</sup> <a name="HttpGet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.httpGet"></a>

```go
func HttpGet() GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference">GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference</a>

---

##### `TcpSocket`<sup>Required</sup> <a name="TcpSocket" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.tcpSocket"></a>

```go
func TcpSocket() GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference">GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference</a>

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `GrpcInput`<sup>Optional</sup> <a name="GrpcInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.grpcInput"></a>

```go
func GrpcInput() GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc">GoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc</a>

---

##### `HttpGetInput`<sup>Optional</sup> <a name="HttpGetInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.httpGetInput"></a>

```go
func HttpGetInput() GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet">GoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet</a>

---

##### `InitialDelaySecondsInput`<sup>Optional</sup> <a name="InitialDelaySecondsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.initialDelaySecondsInput"></a>

```go
func InitialDelaySecondsInput() *f64
```

- *Type:* *f64

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.periodSecondsInput"></a>

```go
func PeriodSecondsInput() *f64
```

- *Type:* *f64

---

##### `TcpSocketInput`<sup>Optional</sup> <a name="TcpSocketInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.tcpSocketInput"></a>

```go
func TcpSocketInput() GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket">GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket</a>

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `InitialDelaySeconds`<sup>Required</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.initialDelaySeconds"></a>

```go
func InitialDelaySeconds() *f64
```

- *Type:* *f64

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.periodSeconds"></a>

```go
func PeriodSeconds() *f64
```

- *Type:* *f64

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpecContainersStartupProbe
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbe">GoogleCloudRunServiceTemplateSpecContainersStartupProbe</a>

---


### GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket">GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket">GoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket</a>

---


### GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList <a name="GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.get"></a>

```go
func Get(index *f64) GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference <a name="GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```go
func MountPathInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTemplateSpecOutputReference <a name="GoogleCloudRunServiceTemplateSpecOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.putContainers">PutContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.resetContainerConcurrency">ResetContainerConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.resetContainers">ResetContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.resetNodeSelector">ResetNodeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.resetServiceAccountName">ResetServiceAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainers` <a name="PutContainers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.putContainers"></a>

```go
func PutContainers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.putContainers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.putVolumes"></a>

```go
func PutVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.putVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContainerConcurrency` <a name="ResetContainerConcurrency" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.resetContainerConcurrency"></a>

```go
func ResetContainerConcurrency()
```

##### `ResetContainers` <a name="ResetContainers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.resetContainers"></a>

```go
func ResetContainers()
```

##### `ResetNodeSelector` <a name="ResetNodeSelector" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.resetNodeSelector"></a>

```go
func ResetNodeSelector()
```

##### `ResetServiceAccountName` <a name="ResetServiceAccountName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.resetServiceAccountName"></a>

```go
func ResetServiceAccountName()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.containers">Containers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList">GoogleCloudRunServiceTemplateSpecContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.servingState">ServingState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList">GoogleCloudRunServiceTemplateSpecVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.containerConcurrencyInput">ContainerConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.containersInput">ContainersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.nodeSelectorInput">NodeSelectorInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.serviceAccountNameInput">ServiceAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.volumesInput">VolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.containerConcurrency">ContainerConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.nodeSelector">NodeSelector</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.serviceAccountName">ServiceAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec">GoogleCloudRunServiceTemplateSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.containers"></a>

```go
func Containers() GoogleCloudRunServiceTemplateSpecContainersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecContainersList">GoogleCloudRunServiceTemplateSpecContainersList</a>

---

##### `ServingState`<sup>Required</sup> <a name="ServingState" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.servingState"></a>

```go
func ServingState() *string
```

- *Type:* *string

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.volumes"></a>

```go
func Volumes() GoogleCloudRunServiceTemplateSpecVolumesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList">GoogleCloudRunServiceTemplateSpecVolumesList</a>

---

##### `ContainerConcurrencyInput`<sup>Optional</sup> <a name="ContainerConcurrencyInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.containerConcurrencyInput"></a>

```go
func ContainerConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `ContainersInput`<sup>Optional</sup> <a name="ContainersInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.containersInput"></a>

```go
func ContainersInput() interface{}
```

- *Type:* interface{}

---

##### `NodeSelectorInput`<sup>Optional</sup> <a name="NodeSelectorInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.nodeSelectorInput"></a>

```go
func NodeSelectorInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServiceAccountNameInput`<sup>Optional</sup> <a name="ServiceAccountNameInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.serviceAccountNameInput"></a>

```go
func ServiceAccountNameInput() *string
```

- *Type:* *string

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.volumesInput"></a>

```go
func VolumesInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerConcurrency`<sup>Required</sup> <a name="ContainerConcurrency" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.containerConcurrency"></a>

```go
func ContainerConcurrency() *f64
```

- *Type:* *f64

---

##### `NodeSelector`<sup>Required</sup> <a name="NodeSelector" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.nodeSelector"></a>

```go
func NodeSelector() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServiceAccountName`<sup>Required</sup> <a name="ServiceAccountName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.serviceAccountName"></a>

```go
func ServiceAccountName() *string
```

- *Type:* *string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpec">GoogleCloudRunServiceTemplateSpec</a>

---


### GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference <a name="GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.resetVolumeAttributes">ResetVolumeAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.resetReadOnly"></a>

```go
func ResetReadOnly()
```

##### `ResetVolumeAttributes` <a name="ResetVolumeAttributes" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.resetVolumeAttributes"></a>

```go
func ResetVolumeAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.driverInput">DriverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.volumeAttributesInput">VolumeAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.driver">Driver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.volumeAttributes">VolumeAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsi">GoogleCloudRunServiceTemplateSpecVolumesCsi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DriverInput`<sup>Optional</sup> <a name="DriverInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.driverInput"></a>

```go
func DriverInput() *string
```

- *Type:* *string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeAttributesInput`<sup>Optional</sup> <a name="VolumeAttributesInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.volumeAttributesInput"></a>

```go
func VolumeAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.driver"></a>

```go
func Driver() *string
```

- *Type:* *string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `VolumeAttributes`<sup>Required</sup> <a name="VolumeAttributes" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.volumeAttributes"></a>

```go
func VolumeAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpecVolumesCsi
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsi">GoogleCloudRunServiceTemplateSpecVolumesCsi</a>

---


### GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference <a name="GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.resetMedium">ResetMedium</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.resetSizeLimit">ResetSizeLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMedium` <a name="ResetMedium" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.resetMedium"></a>

```go
func ResetMedium()
```

##### `ResetSizeLimit` <a name="ResetSizeLimit" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.resetSizeLimit"></a>

```go
func ResetSizeLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.mediumInput">MediumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.sizeLimitInput">SizeLimitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.medium">Medium</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.sizeLimit">SizeLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDir">GoogleCloudRunServiceTemplateSpecVolumesEmptyDir</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MediumInput`<sup>Optional</sup> <a name="MediumInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.mediumInput"></a>

```go
func MediumInput() *string
```

- *Type:* *string

---

##### `SizeLimitInput`<sup>Optional</sup> <a name="SizeLimitInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.sizeLimitInput"></a>

```go
func SizeLimitInput() *string
```

- *Type:* *string

---

##### `Medium`<sup>Required</sup> <a name="Medium" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.medium"></a>

```go
func Medium() *string
```

- *Type:* *string

---

##### `SizeLimit`<sup>Required</sup> <a name="SizeLimit" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```go
func SizeLimit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpecVolumesEmptyDir
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDir">GoogleCloudRunServiceTemplateSpecVolumesEmptyDir</a>

---


### GoogleCloudRunServiceTemplateSpecVolumesList <a name="GoogleCloudRunServiceTemplateSpecVolumesList" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunServiceTemplateSpecVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.get"></a>

```go
func Get(index *f64) GoogleCloudRunServiceTemplateSpecVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference <a name="GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.resetReadOnly"></a>

```go
func ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.serverInput">ServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.server">Server</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfs">GoogleCloudRunServiceTemplateSpecVolumesNfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.serverInput"></a>

```go
func ServerInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.server"></a>

```go
func Server() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpecVolumesNfs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfs">GoogleCloudRunServiceTemplateSpecVolumesNfs</a>

---


### GoogleCloudRunServiceTemplateSpecVolumesOutputReference <a name="GoogleCloudRunServiceTemplateSpecVolumesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunServiceTemplateSpecVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.putCsi">PutCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.putEmptyDir">PutEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.putNfs">PutNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.resetCsi">ResetCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.resetEmptyDir">ResetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.resetNfs">ResetNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCsi` <a name="PutCsi" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.putCsi"></a>

```go
func PutCsi(value GoogleCloudRunServiceTemplateSpecVolumesCsi)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.putCsi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsi">GoogleCloudRunServiceTemplateSpecVolumesCsi</a>

---

##### `PutEmptyDir` <a name="PutEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.putEmptyDir"></a>

```go
func PutEmptyDir(value GoogleCloudRunServiceTemplateSpecVolumesEmptyDir)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.putEmptyDir.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDir">GoogleCloudRunServiceTemplateSpecVolumesEmptyDir</a>

---

##### `PutNfs` <a name="PutNfs" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.putNfs"></a>

```go
func PutNfs(value GoogleCloudRunServiceTemplateSpecVolumesNfs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfs">GoogleCloudRunServiceTemplateSpecVolumesNfs</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.putSecret"></a>

```go
func PutSecret(value GoogleCloudRunServiceTemplateSpecVolumesSecret)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecret">GoogleCloudRunServiceTemplateSpecVolumesSecret</a>

---

##### `ResetCsi` <a name="ResetCsi" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.resetCsi"></a>

```go
func ResetCsi()
```

##### `ResetEmptyDir` <a name="ResetEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.resetEmptyDir"></a>

```go
func ResetEmptyDir()
```

##### `ResetNfs` <a name="ResetNfs" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.resetNfs"></a>

```go
func ResetNfs()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.resetSecret"></a>

```go
func ResetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.csi">Csi</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference">GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.emptyDir">EmptyDir</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference">GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.nfs">Nfs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference">GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference">GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.csiInput">CsiInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsi">GoogleCloudRunServiceTemplateSpecVolumesCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.emptyDirInput">EmptyDirInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDir">GoogleCloudRunServiceTemplateSpecVolumesEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.nfsInput">NfsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfs">GoogleCloudRunServiceTemplateSpecVolumesNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.secretInput">SecretInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecret">GoogleCloudRunServiceTemplateSpecVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Csi`<sup>Required</sup> <a name="Csi" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.csi"></a>

```go
func Csi() GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference">GoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference</a>

---

##### `EmptyDir`<sup>Required</sup> <a name="EmptyDir" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.emptyDir"></a>

```go
func EmptyDir() GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference">GoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference</a>

---

##### `Nfs`<sup>Required</sup> <a name="Nfs" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.nfs"></a>

```go
func Nfs() GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference">GoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.secret"></a>

```go
func Secret() GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference">GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference</a>

---

##### `CsiInput`<sup>Optional</sup> <a name="CsiInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.csiInput"></a>

```go
func CsiInput() GoogleCloudRunServiceTemplateSpecVolumesCsi
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesCsi">GoogleCloudRunServiceTemplateSpecVolumesCsi</a>

---

##### `EmptyDirInput`<sup>Optional</sup> <a name="EmptyDirInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.emptyDirInput"></a>

```go
func EmptyDirInput() GoogleCloudRunServiceTemplateSpecVolumesEmptyDir
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesEmptyDir">GoogleCloudRunServiceTemplateSpecVolumesEmptyDir</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NfsInput`<sup>Optional</sup> <a name="NfsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.nfsInput"></a>

```go
func NfsInput() GoogleCloudRunServiceTemplateSpecVolumesNfs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesNfs">GoogleCloudRunServiceTemplateSpecVolumesNfs</a>

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.secretInput"></a>

```go
func SecretInput() GoogleCloudRunServiceTemplateSpecVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecret">GoogleCloudRunServiceTemplateSpecVolumesSecret</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList <a name="GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.get"></a>

```go
func Get(index *f64) GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference <a name="GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.modeInput">ModeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.mode">Mode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.modeInput"></a>

```go
func ModeInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.mode"></a>

```go
func Mode() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference <a name="GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.resetDefaultMode">ResetDefaultMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultMode` <a name="ResetDefaultMode" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.resetDefaultMode"></a>

```go
func ResetDefaultMode()
```

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.items">Items</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList">GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.defaultModeInput">DefaultModeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.defaultMode">DefaultMode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecret">GoogleCloudRunServiceTemplateSpecVolumesSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.items"></a>

```go
func Items() GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList">GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList</a>

---

##### `DefaultModeInput`<sup>Optional</sup> <a name="DefaultModeInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.defaultModeInput"></a>

```go
func DefaultModeInput() *f64
```

- *Type:* *f64

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `DefaultMode`<sup>Required</sup> <a name="DefaultMode" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.defaultMode"></a>

```go
func DefaultMode() *f64
```

- *Type:* *f64

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceTemplateSpecVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTemplateSpecVolumesSecret">GoogleCloudRunServiceTemplateSpecVolumesSecret</a>

---


### GoogleCloudRunServiceTimeoutsOutputReference <a name="GoogleCloudRunServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTrafficList <a name="GoogleCloudRunServiceTrafficList" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTrafficList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunServiceTrafficList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.get"></a>

```go
func Get(index *f64) GoogleCloudRunServiceTrafficOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunServiceTrafficOutputReference <a name="GoogleCloudRunServiceTrafficOutputReference" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudrunservice"

googlecloudrunservice.NewGoogleCloudRunServiceTrafficOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunServiceTrafficOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.resetLatestRevision">ResetLatestRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.resetRevisionName">ResetRevisionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLatestRevision` <a name="ResetLatestRevision" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.resetLatestRevision"></a>

```go
func ResetLatestRevision()
```

##### `ResetRevisionName` <a name="ResetRevisionName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.resetRevisionName"></a>

```go
func ResetRevisionName()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.latestRevisionInput">LatestRevisionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.percentInput">PercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.revisionNameInput">RevisionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.latestRevision">LatestRevision</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.percent">Percent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.revisionName">RevisionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `LatestRevisionInput`<sup>Optional</sup> <a name="LatestRevisionInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.latestRevisionInput"></a>

```go
func LatestRevisionInput() interface{}
```

- *Type:* interface{}

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.percentInput"></a>

```go
func PercentInput() *f64
```

- *Type:* *f64

---

##### `RevisionNameInput`<sup>Optional</sup> <a name="RevisionNameInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.revisionNameInput"></a>

```go
func RevisionNameInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `LatestRevision`<sup>Required</sup> <a name="LatestRevision" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.latestRevision"></a>

```go
func LatestRevision() interface{}
```

- *Type:* interface{}

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.percent"></a>

```go
func Percent() *f64
```

- *Type:* *f64

---

##### `RevisionName`<sup>Required</sup> <a name="RevisionName" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.revisionName"></a>

```go
func RevisionName() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunService.GoogleCloudRunServiceTrafficOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



