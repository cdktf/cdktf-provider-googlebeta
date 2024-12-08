# `googleDataformRepositoryWorkflowConfig` Submodule <a name="`googleDataformRepositoryWorkflowConfig` Submodule" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataformRepositoryWorkflowConfig <a name="GoogleDataformRepositoryWorkflowConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config google_dataform_repository_workflow_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

googledataformrepositoryworkflowconfig.NewGoogleDataformRepositoryWorkflowConfig(scope Construct, id *string, config GoogleDataformRepositoryWorkflowConfigConfig) GoogleDataformRepositoryWorkflowConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig">GoogleDataformRepositoryWorkflowConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig">GoogleDataformRepositoryWorkflowConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.putInvocationConfig">PutInvocationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetCronSchedule">ResetCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetInvocationConfig">ResetInvocationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInvocationConfig` <a name="PutInvocationConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.putInvocationConfig"></a>

```go
func PutInvocationConfig(value GoogleDataformRepositoryWorkflowConfigInvocationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.putInvocationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig">GoogleDataformRepositoryWorkflowConfigInvocationConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDataformRepositoryWorkflowConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts">GoogleDataformRepositoryWorkflowConfigTimeouts</a>

---

##### `ResetCronSchedule` <a name="ResetCronSchedule" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetCronSchedule"></a>

```go
func ResetCronSchedule()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetInvocationConfig` <a name="ResetInvocationConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetInvocationConfig"></a>

```go
func ResetInvocationConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetRepository"></a>

```go
func ResetRepository()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetTimeZone"></a>

```go
func ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataformRepositoryWorkflowConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

googledataformrepositoryworkflowconfig.GoogleDataformRepositoryWorkflowConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

googledataformrepositoryworkflowconfig.GoogleDataformRepositoryWorkflowConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

googledataformrepositoryworkflowconfig.GoogleDataformRepositoryWorkflowConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

googledataformrepositoryworkflowconfig.GoogleDataformRepositoryWorkflowConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDataformRepositoryWorkflowConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDataformRepositoryWorkflowConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDataformRepositoryWorkflowConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataformRepositoryWorkflowConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.invocationConfig">InvocationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference">GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.recentScheduledExecutionRecords">RecentScheduledExecutionRecords</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList">GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference">GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.cronScheduleInput">CronScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.invocationConfigInput">InvocationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig">GoogleDataformRepositoryWorkflowConfigInvocationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.releaseConfigInput">ReleaseConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.cronSchedule">CronSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.releaseConfig">ReleaseConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InvocationConfig`<sup>Required</sup> <a name="InvocationConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.invocationConfig"></a>

```go
func InvocationConfig() GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference">GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference</a>

---

##### `RecentScheduledExecutionRecords`<sup>Required</sup> <a name="RecentScheduledExecutionRecords" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.recentScheduledExecutionRecords"></a>

```go
func RecentScheduledExecutionRecords() GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList">GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.timeouts"></a>

```go
func Timeouts() GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference">GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference</a>

---

##### `CronScheduleInput`<sup>Optional</sup> <a name="CronScheduleInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.cronScheduleInput"></a>

```go
func CronScheduleInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InvocationConfigInput`<sup>Optional</sup> <a name="InvocationConfigInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.invocationConfigInput"></a>

```go
func InvocationConfigInput() GoogleDataformRepositoryWorkflowConfigInvocationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig">GoogleDataformRepositoryWorkflowConfigInvocationConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ReleaseConfigInput`<sup>Optional</sup> <a name="ReleaseConfigInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.releaseConfigInput"></a>

```go
func ReleaseConfigInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `CronSchedule`<sup>Required</sup> <a name="CronSchedule" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.cronSchedule"></a>

```go
func CronSchedule() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ReleaseConfig`<sup>Required</sup> <a name="ReleaseConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.releaseConfig"></a>

```go
func ReleaseConfig() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataformRepositoryWorkflowConfigConfig <a name="GoogleDataformRepositoryWorkflowConfigConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

&googledataformrepositoryworkflowconfig.GoogleDataformRepositoryWorkflowConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ReleaseConfig: *string,
	CronSchedule: *string,
	Id: *string,
	InvocationConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig,
	Project: *string,
	Region: *string,
	Repository: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.name">Name</a></code> | <code>*string</code> | The workflow's name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.releaseConfig">ReleaseConfig</a></code> | <code>*string</code> | The name of the release config whose releaseCompilationResult should be executed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.cronSchedule">CronSchedule</a></code> | <code>*string</code> | Optional. Optional schedule (in cron format) for automatic creation of compilation results. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#id GoogleDataformRepositoryWorkflowConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.invocationConfig">InvocationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig">GoogleDataformRepositoryWorkflowConfigInvocationConfig</a></code> | invocation_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#project GoogleDataformRepositoryWorkflowConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.region">Region</a></code> | <code>*string</code> | A reference to the region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.repository">Repository</a></code> | <code>*string</code> | A reference to the Dataform repository. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts">GoogleDataformRepositoryWorkflowConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | Optional. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The workflow's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#name GoogleDataformRepositoryWorkflowConfig#name}

---

##### `ReleaseConfig`<sup>Required</sup> <a name="ReleaseConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.releaseConfig"></a>

```go
ReleaseConfig *string
```

- *Type:* *string

The name of the release config whose releaseCompilationResult should be executed.

Must be in the format projects/* /locations/* /repositories/* /releaseConfigs/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#release_config GoogleDataformRepositoryWorkflowConfig#release_config}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `CronSchedule`<sup>Optional</sup> <a name="CronSchedule" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.cronSchedule"></a>

```go
CronSchedule *string
```

- *Type:* *string

Optional. Optional schedule (in cron format) for automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#cron_schedule GoogleDataformRepositoryWorkflowConfig#cron_schedule}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#id GoogleDataformRepositoryWorkflowConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InvocationConfig`<sup>Optional</sup> <a name="InvocationConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.invocationConfig"></a>

```go
InvocationConfig GoogleDataformRepositoryWorkflowConfigInvocationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig">GoogleDataformRepositoryWorkflowConfigInvocationConfig</a>

invocation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#invocation_config GoogleDataformRepositoryWorkflowConfig#invocation_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#project GoogleDataformRepositoryWorkflowConfig#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#region GoogleDataformRepositoryWorkflowConfig#region}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

A reference to the Dataform repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#repository GoogleDataformRepositoryWorkflowConfig#repository}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleDataformRepositoryWorkflowConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts">GoogleDataformRepositoryWorkflowConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#timeouts GoogleDataformRepositoryWorkflowConfig#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Optional.

Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#time_zone GoogleDataformRepositoryWorkflowConfig#time_zone}

---

### GoogleDataformRepositoryWorkflowConfigInvocationConfig <a name="GoogleDataformRepositoryWorkflowConfigInvocationConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

&googledataformrepositoryworkflowconfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig {
	FullyRefreshIncrementalTablesEnabled: interface{},
	IncludedTags: *[]*string,
	IncludedTargets: interface{},
	ServiceAccount: *string,
	TransitiveDependenciesIncluded: interface{},
	TransitiveDependentsIncluded: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.fullyRefreshIncrementalTablesEnabled">FullyRefreshIncrementalTablesEnabled</a></code> | <code>interface{}</code> | Optional. When set to true, any incremental tables will be fully refreshed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.includedTags">IncludedTags</a></code> | <code>*[]*string</code> | Optional. The set of tags to include. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.includedTargets">IncludedTargets</a></code> | <code>interface{}</code> | included_targets block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Optional. The service account to run workflow invocations under. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependenciesIncluded">TransitiveDependenciesIncluded</a></code> | <code>interface{}</code> | Optional. When set to true, transitive dependencies of included actions will be executed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependentsIncluded">TransitiveDependentsIncluded</a></code> | <code>interface{}</code> | Optional. When set to true, transitive dependents of included actions will be executed. |

---

##### `FullyRefreshIncrementalTablesEnabled`<sup>Optional</sup> <a name="FullyRefreshIncrementalTablesEnabled" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.fullyRefreshIncrementalTablesEnabled"></a>

```go
FullyRefreshIncrementalTablesEnabled interface{}
```

- *Type:* interface{}

Optional. When set to true, any incremental tables will be fully refreshed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#fully_refresh_incremental_tables_enabled GoogleDataformRepositoryWorkflowConfig#fully_refresh_incremental_tables_enabled}

---

##### `IncludedTags`<sup>Optional</sup> <a name="IncludedTags" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.includedTags"></a>

```go
IncludedTags *[]*string
```

- *Type:* *[]*string

Optional. The set of tags to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#included_tags GoogleDataformRepositoryWorkflowConfig#included_tags}

---

##### `IncludedTargets`<sup>Optional</sup> <a name="IncludedTargets" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.includedTargets"></a>

```go
IncludedTargets interface{}
```

- *Type:* interface{}

included_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#included_targets GoogleDataformRepositoryWorkflowConfig#included_targets}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Optional. The service account to run workflow invocations under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#service_account GoogleDataformRepositoryWorkflowConfig#service_account}

---

##### `TransitiveDependenciesIncluded`<sup>Optional</sup> <a name="TransitiveDependenciesIncluded" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependenciesIncluded"></a>

```go
TransitiveDependenciesIncluded interface{}
```

- *Type:* interface{}

Optional. When set to true, transitive dependencies of included actions will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#transitive_dependencies_included GoogleDataformRepositoryWorkflowConfig#transitive_dependencies_included}

---

##### `TransitiveDependentsIncluded`<sup>Optional</sup> <a name="TransitiveDependentsIncluded" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependentsIncluded"></a>

```go
TransitiveDependentsIncluded interface{}
```

- *Type:* interface{}

Optional. When set to true, transitive dependents of included actions will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#transitive_dependents_included GoogleDataformRepositoryWorkflowConfig#transitive_dependents_included}

---

### GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets <a name="GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

&googledataformrepositoryworkflowconfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets {
	Database: *string,
	Name: *string,
	Schema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.database">Database</a></code> | <code>*string</code> | The action's database (Google Cloud project ID). |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.name">Name</a></code> | <code>*string</code> | The action's name, within database and schema. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.schema">Schema</a></code> | <code>*string</code> | The action's schema (BigQuery dataset ID), within database. |

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.database"></a>

```go
Database *string
```

- *Type:* *string

The action's database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#database GoogleDataformRepositoryWorkflowConfig#database}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.name"></a>

```go
Name *string
```

- *Type:* *string

The action's name, within database and schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#name GoogleDataformRepositoryWorkflowConfig#name}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The action's schema (BigQuery dataset ID), within database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#schema GoogleDataformRepositoryWorkflowConfig#schema}

---

### GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords <a name="GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

&googledataformrepositoryworkflowconfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords {

}
```


### GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus <a name="GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

&googledataformrepositoryworkflowconfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus {

}
```


### GoogleDataformRepositoryWorkflowConfigTimeouts <a name="GoogleDataformRepositoryWorkflowConfigTimeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

&googledataformrepositoryworkflowconfig.GoogleDataformRepositoryWorkflowConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#create GoogleDataformRepositoryWorkflowConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#delete GoogleDataformRepositoryWorkflowConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#update GoogleDataformRepositoryWorkflowConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#create GoogleDataformRepositoryWorkflowConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#delete GoogleDataformRepositoryWorkflowConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_dataform_repository_workflow_config#update GoogleDataformRepositoryWorkflowConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList <a name="GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

googledataformrepositoryworkflowconfig.NewGoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.get"></a>

```go
func Get(index *f64) GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference <a name="GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

googledataformrepositoryworkflowconfig.NewGoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetSchema"></a>

```go
func ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference <a name="GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

googledataformrepositoryworkflowconfig.NewGoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.putIncludedTargets">PutIncludedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetFullyRefreshIncrementalTablesEnabled">ResetFullyRefreshIncrementalTablesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTags">ResetIncludedTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTargets">ResetIncludedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependenciesIncluded">ResetTransitiveDependenciesIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependentsIncluded">ResetTransitiveDependentsIncluded</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncludedTargets` <a name="PutIncludedTargets" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.putIncludedTargets"></a>

```go
func PutIncludedTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.putIncludedTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFullyRefreshIncrementalTablesEnabled` <a name="ResetFullyRefreshIncrementalTablesEnabled" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetFullyRefreshIncrementalTablesEnabled"></a>

```go
func ResetFullyRefreshIncrementalTablesEnabled()
```

##### `ResetIncludedTags` <a name="ResetIncludedTags" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTags"></a>

```go
func ResetIncludedTags()
```

##### `ResetIncludedTargets` <a name="ResetIncludedTargets" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTargets"></a>

```go
func ResetIncludedTargets()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetTransitiveDependenciesIncluded` <a name="ResetTransitiveDependenciesIncluded" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependenciesIncluded"></a>

```go
func ResetTransitiveDependenciesIncluded()
```

##### `ResetTransitiveDependentsIncluded` <a name="ResetTransitiveDependentsIncluded" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependentsIncluded"></a>

```go
func ResetTransitiveDependentsIncluded()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargets">IncludedTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList">GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabledInput">FullyRefreshIncrementalTablesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTagsInput">IncludedTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargetsInput">IncludedTargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncludedInput">TransitiveDependenciesIncludedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncludedInput">TransitiveDependentsIncludedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabled">FullyRefreshIncrementalTablesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTags">IncludedTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncluded">TransitiveDependenciesIncluded</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncluded">TransitiveDependentsIncluded</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig">GoogleDataformRepositoryWorkflowConfigInvocationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludedTargets`<sup>Required</sup> <a name="IncludedTargets" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargets"></a>

```go
func IncludedTargets() GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList">GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList</a>

---

##### `FullyRefreshIncrementalTablesEnabledInput`<sup>Optional</sup> <a name="FullyRefreshIncrementalTablesEnabledInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabledInput"></a>

```go
func FullyRefreshIncrementalTablesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IncludedTagsInput`<sup>Optional</sup> <a name="IncludedTagsInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTagsInput"></a>

```go
func IncludedTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedTargetsInput`<sup>Optional</sup> <a name="IncludedTargetsInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargetsInput"></a>

```go
func IncludedTargetsInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TransitiveDependenciesIncludedInput`<sup>Optional</sup> <a name="TransitiveDependenciesIncludedInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncludedInput"></a>

```go
func TransitiveDependenciesIncludedInput() interface{}
```

- *Type:* interface{}

---

##### `TransitiveDependentsIncludedInput`<sup>Optional</sup> <a name="TransitiveDependentsIncludedInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncludedInput"></a>

```go
func TransitiveDependentsIncludedInput() interface{}
```

- *Type:* interface{}

---

##### `FullyRefreshIncrementalTablesEnabled`<sup>Required</sup> <a name="FullyRefreshIncrementalTablesEnabled" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabled"></a>

```go
func FullyRefreshIncrementalTablesEnabled() interface{}
```

- *Type:* interface{}

---

##### `IncludedTags`<sup>Required</sup> <a name="IncludedTags" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTags"></a>

```go
func IncludedTags() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `TransitiveDependenciesIncluded`<sup>Required</sup> <a name="TransitiveDependenciesIncluded" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncluded"></a>

```go
func TransitiveDependenciesIncluded() interface{}
```

- *Type:* interface{}

---

##### `TransitiveDependentsIncluded`<sup>Required</sup> <a name="TransitiveDependentsIncluded" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncluded"></a>

```go
func TransitiveDependentsIncluded() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataformRepositoryWorkflowConfigInvocationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig">GoogleDataformRepositoryWorkflowConfigInvocationConfig</a>

---


### GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList <a name="GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

googledataformrepositoryworkflowconfig.NewGoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.get"></a>

```go
func Get(index *f64) GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference <a name="GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

googledataformrepositoryworkflowconfig.NewGoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus">GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus">GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus</a>

---


### GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList <a name="GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

googledataformrepositoryworkflowconfig.NewGoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.get"></a>

```go
func Get(index *f64) GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference <a name="GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

googledataformrepositoryworkflowconfig.NewGoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.errorStatus">ErrorStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList">GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.executionTime">ExecutionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.workflowInvocation">WorkflowInvocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords">GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorStatus`<sup>Required</sup> <a name="ErrorStatus" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.errorStatus"></a>

```go
func ErrorStatus() GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList">GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList</a>

---

##### `ExecutionTime`<sup>Required</sup> <a name="ExecutionTime" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.executionTime"></a>

```go
func ExecutionTime() *string
```

- *Type:* *string

---

##### `WorkflowInvocation`<sup>Required</sup> <a name="WorkflowInvocation" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.workflowInvocation"></a>

```go
func WorkflowInvocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords">GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords</a>

---


### GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference <a name="GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataformrepositoryworkflowconfig"

googledataformrepositoryworkflowconfig.NewGoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



