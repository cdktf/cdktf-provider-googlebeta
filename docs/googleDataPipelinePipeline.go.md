# `googleDataPipelinePipeline` Submodule <a name="`googleDataPipelinePipeline` Submodule" id="@cdktf/provider-google-beta.googleDataPipelinePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataPipelinePipeline <a name="GoogleDataPipelinePipeline" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline google_data_pipeline_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

googledatapipelinepipeline.NewGoogleDataPipelinePipeline(scope Construct, id *string, config GoogleDataPipelinePipelineConfig) GoogleDataPipelinePipeline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig">GoogleDataPipelinePipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig">GoogleDataPipelinePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.putScheduleInfo">PutScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.putWorkload">PutWorkload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetPipelineSources">ResetPipelineSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetScheduleInfo">ResetScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetSchedulerServiceAccountEmail">ResetSchedulerServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetWorkload">ResetWorkload</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScheduleInfo` <a name="PutScheduleInfo" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.putScheduleInfo"></a>

```go
func PutScheduleInfo(value GoogleDataPipelinePipelineScheduleInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.putScheduleInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo">GoogleDataPipelinePipelineScheduleInfo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDataPipelinePipelineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts">GoogleDataPipelinePipelineTimeouts</a>

---

##### `PutWorkload` <a name="PutWorkload" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.putWorkload"></a>

```go
func PutWorkload(value GoogleDataPipelinePipelineWorkload)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.putWorkload.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload">GoogleDataPipelinePipelineWorkload</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetId"></a>

```go
func ResetId()
```

##### `ResetPipelineSources` <a name="ResetPipelineSources" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetPipelineSources"></a>

```go
func ResetPipelineSources()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetScheduleInfo` <a name="ResetScheduleInfo" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetScheduleInfo"></a>

```go
func ResetScheduleInfo()
```

##### `ResetSchedulerServiceAccountEmail` <a name="ResetSchedulerServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetSchedulerServiceAccountEmail"></a>

```go
func ResetSchedulerServiceAccountEmail()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkload` <a name="ResetWorkload" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetWorkload"></a>

```go
func ResetWorkload()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataPipelinePipeline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

googledatapipelinepipeline.GoogleDataPipelinePipeline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

googledatapipelinepipeline.GoogleDataPipelinePipeline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

googledatapipelinepipeline.GoogleDataPipelinePipeline_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

googledatapipelinepipeline.GoogleDataPipelinePipeline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDataPipelinePipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDataPipelinePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDataPipelinePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataPipelinePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.jobCount">JobCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.lastUpdateTime">LastUpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.scheduleInfo">ScheduleInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference">GoogleDataPipelinePipelineScheduleInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference">GoogleDataPipelinePipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.workload">Workload</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference">GoogleDataPipelinePipelineWorkloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.pipelineSourcesInput">PipelineSourcesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.scheduleInfoInput">ScheduleInfoInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo">GoogleDataPipelinePipelineScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.schedulerServiceAccountEmailInput">SchedulerServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.workloadInput">WorkloadInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload">GoogleDataPipelinePipelineWorkload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.pipelineSources">PipelineSources</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.schedulerServiceAccountEmail">SchedulerServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `JobCount`<sup>Required</sup> <a name="JobCount" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.jobCount"></a>

```go
func JobCount() *f64
```

- *Type:* *f64

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.lastUpdateTime"></a>

```go
func LastUpdateTime() *string
```

- *Type:* *string

---

##### `ScheduleInfo`<sup>Required</sup> <a name="ScheduleInfo" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.scheduleInfo"></a>

```go
func ScheduleInfo() GoogleDataPipelinePipelineScheduleInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference">GoogleDataPipelinePipelineScheduleInfoOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.timeouts"></a>

```go
func Timeouts() GoogleDataPipelinePipelineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference">GoogleDataPipelinePipelineTimeoutsOutputReference</a>

---

##### `Workload`<sup>Required</sup> <a name="Workload" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.workload"></a>

```go
func Workload() GoogleDataPipelinePipelineWorkloadOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference">GoogleDataPipelinePipelineWorkloadOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PipelineSourcesInput`<sup>Optional</sup> <a name="PipelineSourcesInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.pipelineSourcesInput"></a>

```go
func PipelineSourcesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ScheduleInfoInput`<sup>Optional</sup> <a name="ScheduleInfoInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.scheduleInfoInput"></a>

```go
func ScheduleInfoInput() GoogleDataPipelinePipelineScheduleInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo">GoogleDataPipelinePipelineScheduleInfo</a>

---

##### `SchedulerServiceAccountEmailInput`<sup>Optional</sup> <a name="SchedulerServiceAccountEmailInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.schedulerServiceAccountEmailInput"></a>

```go
func SchedulerServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `WorkloadInput`<sup>Optional</sup> <a name="WorkloadInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.workloadInput"></a>

```go
func WorkloadInput() GoogleDataPipelinePipelineWorkload
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload">GoogleDataPipelinePipelineWorkload</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PipelineSources`<sup>Required</sup> <a name="PipelineSources" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.pipelineSources"></a>

```go
func PipelineSources() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SchedulerServiceAccountEmail`<sup>Required</sup> <a name="SchedulerServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.schedulerServiceAccountEmail"></a>

```go
func SchedulerServiceAccountEmail() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataPipelinePipelineConfig <a name="GoogleDataPipelinePipelineConfig" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

&googledatapipelinepipeline.GoogleDataPipelinePipelineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	State: *string,
	Type: *string,
	DisplayName: *string,
	Id: *string,
	PipelineSources: *map[string]*string,
	Project: *string,
	Region: *string,
	ScheduleInfo: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo,
	SchedulerServiceAccountEmail: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts,
	Workload: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.name">Name</a></code> | <code>*string</code> | "The pipeline name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.state">State</a></code> | <code>*string</code> | The state of the pipeline. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.type">Type</a></code> | <code>*string</code> | The type of the pipeline. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_). |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#id GoogleDataPipelinePipeline#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.pipelineSources">PipelineSources</a></code> | <code>*map[string]*string</code> | The sources of the pipeline (for example, Dataplex). |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#project GoogleDataPipelinePipeline#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.region">Region</a></code> | <code>*string</code> | A reference to the region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.scheduleInfo">ScheduleInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo">GoogleDataPipelinePipelineScheduleInfo</a></code> | schedule_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.schedulerServiceAccountEmail">SchedulerServiceAccountEmail</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts">GoogleDataPipelinePipelineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.workload">Workload</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload">GoogleDataPipelinePipelineWorkload</a></code> | workload block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

"The pipeline name.

For example': 'projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID."
"- PROJECT_ID can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see Identifying projects."
"LOCATION_ID is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling google.cloud.location.Locations.ListLocations. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in App Engine regions."
"PIPELINE_ID is the ID of the pipeline. Must be unique for the selected project and location."

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#name GoogleDataPipelinePipeline#name}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

The state of the pipeline.

When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through pipelines.patch requests.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#state Possible values: ["STATE_UNSPECIFIED", "STATE_RESUMING", "STATE_ACTIVE", "STATE_STOPPING", "STATE_ARCHIVED", "STATE_PAUSED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#state GoogleDataPipelinePipeline#state}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the pipeline.

This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#pipelinetype Possible values: ["PIPELINE_TYPE_UNSPECIFIED", "PIPELINE_TYPE_BATCH", "PIPELINE_TYPE_STREAMING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#type GoogleDataPipelinePipeline#type}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#display_name GoogleDataPipelinePipeline#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#id GoogleDataPipelinePipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PipelineSources`<sup>Optional</sup> <a name="PipelineSources" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.pipelineSources"></a>

```go
PipelineSources *map[string]*string
```

- *Type:* *map[string]*string

The sources of the pipeline (for example, Dataplex).

The keys and values are set by the corresponding sources during pipeline creation.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#pipeline_sources GoogleDataPipelinePipeline#pipeline_sources}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#project GoogleDataPipelinePipeline#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#region GoogleDataPipelinePipeline#region}

---

##### `ScheduleInfo`<sup>Optional</sup> <a name="ScheduleInfo" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.scheduleInfo"></a>

```go
ScheduleInfo GoogleDataPipelinePipelineScheduleInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo">GoogleDataPipelinePipelineScheduleInfo</a>

schedule_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#schedule_info GoogleDataPipelinePipeline#schedule_info}

---

##### `SchedulerServiceAccountEmail`<sup>Optional</sup> <a name="SchedulerServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.schedulerServiceAccountEmail"></a>

```go
SchedulerServiceAccountEmail *string
```

- *Type:* *string

Optional.

A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#scheduler_service_account_email GoogleDataPipelinePipeline#scheduler_service_account_email}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.timeouts"></a>

```go
Timeouts GoogleDataPipelinePipelineTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts">GoogleDataPipelinePipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#timeouts GoogleDataPipelinePipeline#timeouts}

---

##### `Workload`<sup>Optional</sup> <a name="Workload" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.workload"></a>

```go
Workload GoogleDataPipelinePipelineWorkload
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload">GoogleDataPipelinePipelineWorkload</a>

workload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#workload GoogleDataPipelinePipeline#workload}

---

### GoogleDataPipelinePipelineScheduleInfo <a name="GoogleDataPipelinePipelineScheduleInfo" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

&googledatapipelinepipeline.GoogleDataPipelinePipelineScheduleInfo {
	Schedule: *string,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo.property.schedule">Schedule</a></code> | <code>*string</code> | Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo.property.timeZone">TimeZone</a></code> | <code>*string</code> | Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed. |

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#schedule GoogleDataPipelinePipeline#schedule}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#time_zone GoogleDataPipelinePipeline#time_zone}

---

### GoogleDataPipelinePipelineTimeouts <a name="GoogleDataPipelinePipelineTimeouts" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

&googledatapipelinepipeline.GoogleDataPipelinePipelineTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#create GoogleDataPipelinePipeline#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#delete GoogleDataPipelinePipeline#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#update GoogleDataPipelinePipeline#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#create GoogleDataPipelinePipeline#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#delete GoogleDataPipelinePipeline#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#update GoogleDataPipelinePipeline#update}.

---

### GoogleDataPipelinePipelineWorkload <a name="GoogleDataPipelinePipelineWorkload" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

&googledatapipelinepipeline.GoogleDataPipelinePipelineWorkload {
	DataflowFlexTemplateRequest: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest,
	DataflowLaunchTemplateRequest: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload.property.dataflowFlexTemplateRequest">DataflowFlexTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a></code> | dataflow_flex_template_request block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload.property.dataflowLaunchTemplateRequest">DataflowLaunchTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a></code> | dataflow_launch_template_request block. |

---

##### `DataflowFlexTemplateRequest`<sup>Optional</sup> <a name="DataflowFlexTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload.property.dataflowFlexTemplateRequest"></a>

```go
DataflowFlexTemplateRequest GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

dataflow_flex_template_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#dataflow_flex_template_request GoogleDataPipelinePipeline#dataflow_flex_template_request}

---

##### `DataflowLaunchTemplateRequest`<sup>Optional</sup> <a name="DataflowLaunchTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload.property.dataflowLaunchTemplateRequest"></a>

```go
DataflowLaunchTemplateRequest GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

dataflow_launch_template_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#dataflow_launch_template_request GoogleDataPipelinePipeline#dataflow_launch_template_request}

---

### GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest <a name="GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

&googledatapipelinepipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest {
	LaunchParameter: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter,
	Location: *string,
	ProjectId: *string,
	ValidateOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.launchParameter">LaunchParameter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a></code> | launch_parameter block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.location">Location</a></code> | <code>*string</code> | The regional endpoint to which to direct the request. For example, us-central1, us-west1. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the Cloud Platform project that the job belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.validateOnly">ValidateOnly</a></code> | <code>interface{}</code> | If true, the request is validated but not actually executed. Defaults to false. |

---

##### `LaunchParameter`<sup>Required</sup> <a name="LaunchParameter" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.launchParameter"></a>

```go
LaunchParameter GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

launch_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#launch_parameter GoogleDataPipelinePipeline#launch_parameter}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.location"></a>

```go
Location *string
```

- *Type:* *string

The regional endpoint to which to direct the request. For example, us-central1, us-west1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#location GoogleDataPipelinePipeline#location}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the Cloud Platform project that the job belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#project_id GoogleDataPipelinePipeline#project_id}

---

##### `ValidateOnly`<sup>Optional</sup> <a name="ValidateOnly" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.validateOnly"></a>

```go
ValidateOnly interface{}
```

- *Type:* interface{}

If true, the request is validated but not actually executed. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#validate_only GoogleDataPipelinePipeline#validate_only}

---

### GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter <a name="GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

&googledatapipelinepipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter {
	JobName: *string,
	ContainerSpecGcsPath: *string,
	Environment: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment,
	LaunchOptions: *map[string]*string,
	Parameters: *map[string]*string,
	TransformNameMappings: *map[string]*string,
	Update: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.jobName">JobName</a></code> | <code>*string</code> | The job name to use for the created job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.containerSpecGcsPath">ContainerSpecGcsPath</a></code> | <code>*string</code> | Cloud Storage path to a file with a JSON-serialized ContainerSpec as content. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.launchOptions">LaunchOptions</a></code> | <code>*map[string]*string</code> | Launch options for this Flex Template job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | 'The parameters for the Flex Template. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.transformNameMappings">TransformNameMappings</a></code> | <code>*map[string]*string</code> | 'Use this to pass transform name mappings for streaming update jobs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.update">Update</a></code> | <code>interface{}</code> | Set this to true if you are sending a request to update a running streaming job. |

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.jobName"></a>

```go
JobName *string
```

- *Type:* *string

The job name to use for the created job.

For an update job request, the job name should be the same as the existing running job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#job_name GoogleDataPipelinePipeline#job_name}

---

##### `ContainerSpecGcsPath`<sup>Optional</sup> <a name="ContainerSpecGcsPath" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.containerSpecGcsPath"></a>

```go
ContainerSpecGcsPath *string
```

- *Type:* *string

Cloud Storage path to a file with a JSON-serialized ContainerSpec as content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#container_spec_gcs_path GoogleDataPipelinePipeline#container_spec_gcs_path}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.environment"></a>

```go
Environment GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#environment GoogleDataPipelinePipeline#environment}

---

##### `LaunchOptions`<sup>Optional</sup> <a name="LaunchOptions" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.launchOptions"></a>

```go
LaunchOptions *map[string]*string
```

- *Type:* *map[string]*string

Launch options for this Flex Template job.

This is a common set of options across languages and templates. This should not be used to pass job parameters.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#launch_options GoogleDataPipelinePipeline#launch_options}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

'The parameters for the Flex Template.

Example: {"numWorkers":"5"}'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#parameters GoogleDataPipelinePipeline#parameters}

---

##### `TransformNameMappings`<sup>Optional</sup> <a name="TransformNameMappings" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.transformNameMappings"></a>

```go
TransformNameMappings *map[string]*string
```

- *Type:* *map[string]*string

'Use this to pass transform name mappings for streaming update jobs.

Example: {"oldTransformName":"newTransformName",...}'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#transform_name_mappings GoogleDataPipelinePipeline#transform_name_mappings}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.update"></a>

```go
Update interface{}
```

- *Type:* interface{}

Set this to true if you are sending a request to update a running streaming job.

When set, the job name should be the same as the running job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#update GoogleDataPipelinePipeline#update}

---

### GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment <a name="GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

&googledatapipelinepipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment {
	AdditionalExperiments: *[]*string,
	AdditionalUserLabels: *map[string]*string,
	EnableStreamingEngine: interface{},
	FlexrsGoal: *string,
	IpConfiguration: *string,
	KmsKeyName: *string,
	MachineType: *string,
	MaxWorkers: *f64,
	Network: *string,
	NumWorkers: *f64,
	ServiceAccountEmail: *string,
	Subnetwork: *string,
	TempLocation: *string,
	WorkerRegion: *string,
	WorkerZone: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalExperiments">AdditionalExperiments</a></code> | <code>*[]*string</code> | Additional experiment flags for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalUserLabels">AdditionalUserLabels</a></code> | <code>*map[string]*string</code> | Additional user labels to be specified for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>interface{}</code> | Whether to enable Streaming Engine for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.flexrsGoal">FlexrsGoal</a></code> | <code>*string</code> | Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#FlexResourceSchedulingGoal Possible values: ["FLEXRS_UNSPECIFIED", "FLEXRS_SPEED_OPTIMIZED", "FLEXRS_COST_OPTIMIZED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.ipConfiguration">IpConfiguration</a></code> | <code>*string</code> | Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | 'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.machineType">MachineType</a></code> | <code>*string</code> | The machine type to use for the job. Defaults to the value from the template if not specified. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.network">Network</a></code> | <code>*string</code> | Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | The initial number of Compute Engine instances for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | The email address of the service account to run the job as. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | Subnetwork to which VMs will be assigned, if desired. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.tempLocation">TempLocation</a></code> | <code>*string</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerRegion">WorkerRegion</a></code> | <code>*string</code> | The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerZone">WorkerZone</a></code> | <code>*string</code> | The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.zone">Zone</a></code> | <code>*string</code> | The Compute Engine availability zone for launching worker instances to run your pipeline. |

---

##### `AdditionalExperiments`<sup>Optional</sup> <a name="AdditionalExperiments" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalExperiments"></a>

```go
AdditionalExperiments *[]*string
```

- *Type:* *[]*string

Additional experiment flags for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#additional_experiments GoogleDataPipelinePipeline#additional_experiments}

---

##### `AdditionalUserLabels`<sup>Optional</sup> <a name="AdditionalUserLabels" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalUserLabels"></a>

```go
AdditionalUserLabels *map[string]*string
```

- *Type:* *map[string]*string

Additional user labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. An object containing a list of key/value pairs.
'Example: { "name": "wrench", "mass": "1kg", "count": "3" }.'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#additional_user_labels GoogleDataPipelinePipeline#additional_user_labels}

---

##### `EnableStreamingEngine`<sup>Optional</sup> <a name="EnableStreamingEngine" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.enableStreamingEngine"></a>

```go
EnableStreamingEngine interface{}
```

- *Type:* interface{}

Whether to enable Streaming Engine for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#enable_streaming_engine GoogleDataPipelinePipeline#enable_streaming_engine}

---

##### `FlexrsGoal`<sup>Optional</sup> <a name="FlexrsGoal" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.flexrsGoal"></a>

```go
FlexrsGoal *string
```

- *Type:* *string

Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#FlexResourceSchedulingGoal Possible values: ["FLEXRS_UNSPECIFIED", "FLEXRS_SPEED_OPTIMIZED", "FLEXRS_COST_OPTIMIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#flexrs_goal GoogleDataPipelinePipeline#flexrs_goal}

---

##### `IpConfiguration`<sup>Optional</sup> <a name="IpConfiguration" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.ipConfiguration"></a>

```go
IpConfiguration *string
```

- *Type:* *string

Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#ip_configuration GoogleDataPipelinePipeline#ip_configuration}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#kms_key_name GoogleDataPipelinePipeline#kms_key_name}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The machine type to use for the job. Defaults to the value from the template if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#machine_type GoogleDataPipelinePipeline#machine_type}

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.maxWorkers"></a>

```go
MaxWorkers *f64
```

- *Type:* *f64

The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#max_workers GoogleDataPipelinePipeline#max_workers}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.network"></a>

```go
Network *string
```

- *Type:* *string

Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#network GoogleDataPipelinePipeline#network}

---

##### `NumWorkers`<sup>Optional</sup> <a name="NumWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.numWorkers"></a>

```go
NumWorkers *f64
```

- *Type:* *f64

The initial number of Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#num_workers GoogleDataPipelinePipeline#num_workers}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

The email address of the service account to run the job as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#service_account_email GoogleDataPipelinePipeline#service_account_email}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

Subnetwork to which VMs will be assigned, if desired.

You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#subnetwork GoogleDataPipelinePipeline#subnetwork}

---

##### `TempLocation`<sup>Optional</sup> <a name="TempLocation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.tempLocation"></a>

```go
TempLocation *string
```

- *Type:* *string

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#temp_location GoogleDataPipelinePipeline#temp_location}

---

##### `WorkerRegion`<sup>Optional</sup> <a name="WorkerRegion" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerRegion"></a>

```go
WorkerRegion *string
```

- *Type:* *string

The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#worker_region GoogleDataPipelinePipeline#worker_region}

---

##### `WorkerZone`<sup>Optional</sup> <a name="WorkerZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerZone"></a>

```go
WorkerZone *string
```

- *Type:* *string

The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#worker_zone GoogleDataPipelinePipeline#worker_zone}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The Compute Engine availability zone for launching worker instances to run your pipeline.

In the future, workerZone will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#zone GoogleDataPipelinePipeline#zone}

---

### GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest <a name="GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

&googledatapipelinepipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest {
	ProjectId: *string,
	GcsPath: *string,
	LaunchParameters: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters,
	Location: *string,
	ValidateOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the Cloud Platform project that the job belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.gcsPath">GcsPath</a></code> | <code>*string</code> | A Cloud Storage path to the template from which to create the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.launchParameters">LaunchParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a></code> | launch_parameters block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.location">Location</a></code> | <code>*string</code> | The regional endpoint to which to direct the request. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.validateOnly">ValidateOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#validate_only GoogleDataPipelinePipeline#validate_only}. |

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the Cloud Platform project that the job belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#project_id GoogleDataPipelinePipeline#project_id}

---

##### `GcsPath`<sup>Optional</sup> <a name="GcsPath" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.gcsPath"></a>

```go
GcsPath *string
```

- *Type:* *string

A Cloud Storage path to the template from which to create the job.

Must be a valid Cloud Storage URL, beginning with 'gs://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#gcs_path GoogleDataPipelinePipeline#gcs_path}

---

##### `LaunchParameters`<sup>Optional</sup> <a name="LaunchParameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.launchParameters"></a>

```go
LaunchParameters GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

launch_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#launch_parameters GoogleDataPipelinePipeline#launch_parameters}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.location"></a>

```go
Location *string
```

- *Type:* *string

The regional endpoint to which to direct the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#location GoogleDataPipelinePipeline#location}

---

##### `ValidateOnly`<sup>Optional</sup> <a name="ValidateOnly" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.validateOnly"></a>

```go
ValidateOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#validate_only GoogleDataPipelinePipeline#validate_only}.

---

### GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters <a name="GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

&googledatapipelinepipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters {
	JobName: *string,
	Environment: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment,
	Parameters: *map[string]*string,
	TransformNameMapping: *map[string]*string,
	Update: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.jobName">JobName</a></code> | <code>*string</code> | The job name to use for the created job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | The runtime parameters to pass to the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.transformNameMapping">TransformNameMapping</a></code> | <code>*map[string]*string</code> | Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.update">Update</a></code> | <code>interface{}</code> | If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state. |

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.jobName"></a>

```go
JobName *string
```

- *Type:* *string

The job name to use for the created job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#job_name GoogleDataPipelinePipeline#job_name}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.environment"></a>

```go
Environment GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#environment GoogleDataPipelinePipeline#environment}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

The runtime parameters to pass to the job.

'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#parameters GoogleDataPipelinePipeline#parameters}

---

##### `TransformNameMapping`<sup>Optional</sup> <a name="TransformNameMapping" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.transformNameMapping"></a>

```go
TransformNameMapping *map[string]*string
```

- *Type:* *map[string]*string

Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.

Only applicable when updating a pipeline.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#transform_name_mapping GoogleDataPipelinePipeline#transform_name_mapping}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.update"></a>

```go
Update interface{}
```

- *Type:* interface{}

If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#update GoogleDataPipelinePipeline#update}

---

### GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment <a name="GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

&googledatapipelinepipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment {
	AdditionalExperiments: *[]*string,
	AdditionalUserLabels: *map[string]*string,
	BypassTempDirValidation: interface{},
	EnableStreamingEngine: interface{},
	IpConfiguration: *string,
	KmsKeyName: *string,
	MachineType: *string,
	MaxWorkers: *f64,
	Network: *string,
	NumWorkers: *f64,
	ServiceAccountEmail: *string,
	Subnetwork: *string,
	TempLocation: *string,
	WorkerRegion: *string,
	WorkerZone: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalExperiments">AdditionalExperiments</a></code> | <code>*[]*string</code> | Additional experiment flags for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalUserLabels">AdditionalUserLabels</a></code> | <code>*map[string]*string</code> | Additional user labels to be specified for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.bypassTempDirValidation">BypassTempDirValidation</a></code> | <code>interface{}</code> | Whether to bypass the safety checks for the job's temporary directory. Use with caution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>interface{}</code> | Whether to enable Streaming Engine for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.ipConfiguration">IpConfiguration</a></code> | <code>*string</code> | Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | 'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.machineType">MachineType</a></code> | <code>*string</code> | The machine type to use for the job. Defaults to the value from the template if not specified. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.network">Network</a></code> | <code>*string</code> | Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | The initial number of Compute Engine instances for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | The email address of the service account to run the job as. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | Subnetwork to which VMs will be assigned, if desired. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.tempLocation">TempLocation</a></code> | <code>*string</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerRegion">WorkerRegion</a></code> | <code>*string</code> | The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerZone">WorkerZone</a></code> | <code>*string</code> | The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.zone">Zone</a></code> | <code>*string</code> | The Compute Engine availability zone for launching worker instances to run your pipeline. |

---

##### `AdditionalExperiments`<sup>Optional</sup> <a name="AdditionalExperiments" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalExperiments"></a>

```go
AdditionalExperiments *[]*string
```

- *Type:* *[]*string

Additional experiment flags for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#additional_experiments GoogleDataPipelinePipeline#additional_experiments}

---

##### `AdditionalUserLabels`<sup>Optional</sup> <a name="AdditionalUserLabels" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalUserLabels"></a>

```go
AdditionalUserLabels *map[string]*string
```

- *Type:* *map[string]*string

Additional user labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. An object containing a list of key/value pairs.
'Example: { "name": "wrench", "mass": "1kg", "count": "3" }.'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#additional_user_labels GoogleDataPipelinePipeline#additional_user_labels}

---

##### `BypassTempDirValidation`<sup>Optional</sup> <a name="BypassTempDirValidation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.bypassTempDirValidation"></a>

```go
BypassTempDirValidation interface{}
```

- *Type:* interface{}

Whether to bypass the safety checks for the job's temporary directory. Use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#bypass_temp_dir_validation GoogleDataPipelinePipeline#bypass_temp_dir_validation}

---

##### `EnableStreamingEngine`<sup>Optional</sup> <a name="EnableStreamingEngine" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.enableStreamingEngine"></a>

```go
EnableStreamingEngine interface{}
```

- *Type:* interface{}

Whether to enable Streaming Engine for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#enable_streaming_engine GoogleDataPipelinePipeline#enable_streaming_engine}

---

##### `IpConfiguration`<sup>Optional</sup> <a name="IpConfiguration" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.ipConfiguration"></a>

```go
IpConfiguration *string
```

- *Type:* *string

Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#ip_configuration GoogleDataPipelinePipeline#ip_configuration}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#kms_key_name GoogleDataPipelinePipeline#kms_key_name}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The machine type to use for the job. Defaults to the value from the template if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#machine_type GoogleDataPipelinePipeline#machine_type}

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.maxWorkers"></a>

```go
MaxWorkers *f64
```

- *Type:* *f64

The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#max_workers GoogleDataPipelinePipeline#max_workers}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.network"></a>

```go
Network *string
```

- *Type:* *string

Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#network GoogleDataPipelinePipeline#network}

---

##### `NumWorkers`<sup>Optional</sup> <a name="NumWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.numWorkers"></a>

```go
NumWorkers *f64
```

- *Type:* *f64

The initial number of Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#num_workers GoogleDataPipelinePipeline#num_workers}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

The email address of the service account to run the job as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#service_account_email GoogleDataPipelinePipeline#service_account_email}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

Subnetwork to which VMs will be assigned, if desired.

You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#subnetwork GoogleDataPipelinePipeline#subnetwork}

---

##### `TempLocation`<sup>Optional</sup> <a name="TempLocation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.tempLocation"></a>

```go
TempLocation *string
```

- *Type:* *string

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#temp_location GoogleDataPipelinePipeline#temp_location}

---

##### `WorkerRegion`<sup>Optional</sup> <a name="WorkerRegion" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerRegion"></a>

```go
WorkerRegion *string
```

- *Type:* *string

The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#worker_region GoogleDataPipelinePipeline#worker_region}

---

##### `WorkerZone`<sup>Optional</sup> <a name="WorkerZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerZone"></a>

```go
WorkerZone *string
```

- *Type:* *string

The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#worker_zone GoogleDataPipelinePipeline#worker_zone}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The Compute Engine availability zone for launching worker instances to run your pipeline.

In the future, workerZone will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_pipeline_pipeline#zone GoogleDataPipelinePipeline#zone}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataPipelinePipelineScheduleInfoOutputReference <a name="GoogleDataPipelinePipelineScheduleInfoOutputReference" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

googledatapipelinepipeline.NewGoogleDataPipelinePipelineScheduleInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataPipelinePipelineScheduleInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.nextJobTime">NextJobTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo">GoogleDataPipelinePipelineScheduleInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NextJobTime`<sup>Required</sup> <a name="NextJobTime" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.nextJobTime"></a>

```go
func NextJobTime() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataPipelinePipelineScheduleInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo">GoogleDataPipelinePipelineScheduleInfo</a>

---


### GoogleDataPipelinePipelineTimeoutsOutputReference <a name="GoogleDataPipelinePipelineTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

googledatapipelinepipeline.NewGoogleDataPipelinePipelineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataPipelinePipelineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference <a name="GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

googledatapipelinepipeline.NewGoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalExperiments">ResetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalUserLabels">ResetAdditionalUserLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetEnableStreamingEngine">ResetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetFlexrsGoal">ResetFlexrsGoal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetIpConfiguration">ResetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNumWorkers">ResetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetTempLocation">ResetTempLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerRegion">ResetWorkerRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerZone">ResetWorkerZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalExperiments` <a name="ResetAdditionalExperiments" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalExperiments"></a>

```go
func ResetAdditionalExperiments()
```

##### `ResetAdditionalUserLabels` <a name="ResetAdditionalUserLabels" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalUserLabels"></a>

```go
func ResetAdditionalUserLabels()
```

##### `ResetEnableStreamingEngine` <a name="ResetEnableStreamingEngine" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetEnableStreamingEngine"></a>

```go
func ResetEnableStreamingEngine()
```

##### `ResetFlexrsGoal` <a name="ResetFlexrsGoal" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetFlexrsGoal"></a>

```go
func ResetFlexrsGoal()
```

##### `ResetIpConfiguration` <a name="ResetIpConfiguration" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetIpConfiguration"></a>

```go
func ResetIpConfiguration()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMaxWorkers"></a>

```go
func ResetMaxWorkers()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNumWorkers` <a name="ResetNumWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNumWorkers"></a>

```go
func ResetNumWorkers()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTempLocation` <a name="ResetTempLocation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetTempLocation"></a>

```go
func ResetTempLocation()
```

##### `ResetWorkerRegion` <a name="ResetWorkerRegion" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerRegion"></a>

```go
func ResetWorkerRegion()
```

##### `ResetWorkerZone` <a name="ResetWorkerZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerZone"></a>

```go
func ResetWorkerZone()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetZone"></a>

```go
func ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperimentsInput">AdditionalExperimentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabelsInput">AdditionalUserLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngineInput">EnableStreamingEngineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoalInput">FlexrsGoalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfigurationInput">IpConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkersInput">NumWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocationInput">TempLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegionInput">WorkerRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZoneInput">WorkerZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperiments">AdditionalExperiments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabels">AdditionalUserLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoal">FlexrsGoal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfiguration">IpConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocation">TempLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegion">WorkerRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZone">WorkerZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalExperimentsInput`<sup>Optional</sup> <a name="AdditionalExperimentsInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperimentsInput"></a>

```go
func AdditionalExperimentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalUserLabelsInput`<sup>Optional</sup> <a name="AdditionalUserLabelsInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabelsInput"></a>

```go
func AdditionalUserLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EnableStreamingEngineInput`<sup>Optional</sup> <a name="EnableStreamingEngineInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngineInput"></a>

```go
func EnableStreamingEngineInput() interface{}
```

- *Type:* interface{}

---

##### `FlexrsGoalInput`<sup>Optional</sup> <a name="FlexrsGoalInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoalInput"></a>

```go
func FlexrsGoalInput() *string
```

- *Type:* *string

---

##### `IpConfigurationInput`<sup>Optional</sup> <a name="IpConfigurationInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfigurationInput"></a>

```go
func IpConfigurationInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkersInput"></a>

```go
func MaxWorkersInput() *f64
```

- *Type:* *f64

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `NumWorkersInput`<sup>Optional</sup> <a name="NumWorkersInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkersInput"></a>

```go
func NumWorkersInput() *f64
```

- *Type:* *f64

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TempLocationInput`<sup>Optional</sup> <a name="TempLocationInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocationInput"></a>

```go
func TempLocationInput() *string
```

- *Type:* *string

---

##### `WorkerRegionInput`<sup>Optional</sup> <a name="WorkerRegionInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegionInput"></a>

```go
func WorkerRegionInput() *string
```

- *Type:* *string

---

##### `WorkerZoneInput`<sup>Optional</sup> <a name="WorkerZoneInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZoneInput"></a>

```go
func WorkerZoneInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `AdditionalExperiments`<sup>Required</sup> <a name="AdditionalExperiments" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperiments"></a>

```go
func AdditionalExperiments() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalUserLabels`<sup>Required</sup> <a name="AdditionalUserLabels" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabels"></a>

```go
func AdditionalUserLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EnableStreamingEngine`<sup>Required</sup> <a name="EnableStreamingEngine" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngine"></a>

```go
func EnableStreamingEngine() interface{}
```

- *Type:* interface{}

---

##### `FlexrsGoal`<sup>Required</sup> <a name="FlexrsGoal" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoal"></a>

```go
func FlexrsGoal() *string
```

- *Type:* *string

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfiguration"></a>

```go
func IpConfiguration() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkers"></a>

```go
func MaxWorkers() *f64
```

- *Type:* *f64

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NumWorkers`<sup>Required</sup> <a name="NumWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkers"></a>

```go
func NumWorkers() *f64
```

- *Type:* *f64

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `TempLocation`<sup>Required</sup> <a name="TempLocation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocation"></a>

```go
func TempLocation() *string
```

- *Type:* *string

---

##### `WorkerRegion`<sup>Required</sup> <a name="WorkerRegion" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegion"></a>

```go
func WorkerRegion() *string
```

- *Type:* *string

---

##### `WorkerZone`<sup>Required</sup> <a name="WorkerZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZone"></a>

```go
func WorkerZone() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

---


### GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference <a name="GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

googledatapipelinepipeline.NewGoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetContainerSpecGcsPath">ResetContainerSpecGcsPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetLaunchOptions">ResetLaunchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetTransformNameMappings">ResetTransformNameMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.putEnvironment"></a>

```go
func PutEnvironment(value GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

---

##### `ResetContainerSpecGcsPath` <a name="ResetContainerSpecGcsPath" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetContainerSpecGcsPath"></a>

```go
func ResetContainerSpecGcsPath()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetLaunchOptions` <a name="ResetLaunchOptions" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetLaunchOptions"></a>

```go
func ResetLaunchOptions()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetTransformNameMappings` <a name="ResetTransformNameMappings" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetTransformNameMappings"></a>

```go
func ResetTransformNameMappings()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPathInput">ContainerSpecGcsPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptionsInput">LaunchOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappingsInput">TransformNameMappingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.updateInput">UpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPath">ContainerSpecGcsPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobName">JobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptions">LaunchOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappings">TransformNameMappings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.update">Update</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environment"></a>

```go
func Environment() GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference</a>

---

##### `ContainerSpecGcsPathInput`<sup>Optional</sup> <a name="ContainerSpecGcsPathInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPathInput"></a>

```go
func ContainerSpecGcsPathInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobNameInput"></a>

```go
func JobNameInput() *string
```

- *Type:* *string

---

##### `LaunchOptionsInput`<sup>Optional</sup> <a name="LaunchOptionsInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptionsInput"></a>

```go
func LaunchOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransformNameMappingsInput`<sup>Optional</sup> <a name="TransformNameMappingsInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappingsInput"></a>

```go
func TransformNameMappingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.updateInput"></a>

```go
func UpdateInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerSpecGcsPath`<sup>Required</sup> <a name="ContainerSpecGcsPath" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPath"></a>

```go
func ContainerSpecGcsPath() *string
```

- *Type:* *string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobName"></a>

```go
func JobName() *string
```

- *Type:* *string

---

##### `LaunchOptions`<sup>Required</sup> <a name="LaunchOptions" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptions"></a>

```go
func LaunchOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransformNameMappings`<sup>Required</sup> <a name="TransformNameMappings" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappings"></a>

```go
func TransformNameMappings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.update"></a>

```go
func Update() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

---


### GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference <a name="GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

googledatapipelinepipeline.NewGoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.putLaunchParameter">PutLaunchParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resetValidateOnly">ResetValidateOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLaunchParameter` <a name="PutLaunchParameter" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.putLaunchParameter"></a>

```go
func PutLaunchParameter(value GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.putLaunchParameter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

---

##### `ResetValidateOnly` <a name="ResetValidateOnly" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resetValidateOnly"></a>

```go
func ResetValidateOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameter">LaunchParameter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameterInput">LaunchParameterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnlyInput">ValidateOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnly">ValidateOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchParameter`<sup>Required</sup> <a name="LaunchParameter" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameter"></a>

```go
func LaunchParameter() GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference</a>

---

##### `LaunchParameterInput`<sup>Optional</sup> <a name="LaunchParameterInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameterInput"></a>

```go
func LaunchParameterInput() GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ValidateOnlyInput`<sup>Optional</sup> <a name="ValidateOnlyInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnlyInput"></a>

```go
func ValidateOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ValidateOnly`<sup>Required</sup> <a name="ValidateOnly" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnly"></a>

```go
func ValidateOnly() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

---


### GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference <a name="GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

googledatapipelinepipeline.NewGoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalExperiments">ResetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalUserLabels">ResetAdditionalUserLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetBypassTempDirValidation">ResetBypassTempDirValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetEnableStreamingEngine">ResetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetIpConfiguration">ResetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNumWorkers">ResetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetTempLocation">ResetTempLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerRegion">ResetWorkerRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerZone">ResetWorkerZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalExperiments` <a name="ResetAdditionalExperiments" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalExperiments"></a>

```go
func ResetAdditionalExperiments()
```

##### `ResetAdditionalUserLabels` <a name="ResetAdditionalUserLabels" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalUserLabels"></a>

```go
func ResetAdditionalUserLabels()
```

##### `ResetBypassTempDirValidation` <a name="ResetBypassTempDirValidation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetBypassTempDirValidation"></a>

```go
func ResetBypassTempDirValidation()
```

##### `ResetEnableStreamingEngine` <a name="ResetEnableStreamingEngine" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetEnableStreamingEngine"></a>

```go
func ResetEnableStreamingEngine()
```

##### `ResetIpConfiguration` <a name="ResetIpConfiguration" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetIpConfiguration"></a>

```go
func ResetIpConfiguration()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMaxWorkers"></a>

```go
func ResetMaxWorkers()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNumWorkers` <a name="ResetNumWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNumWorkers"></a>

```go
func ResetNumWorkers()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTempLocation` <a name="ResetTempLocation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetTempLocation"></a>

```go
func ResetTempLocation()
```

##### `ResetWorkerRegion` <a name="ResetWorkerRegion" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerRegion"></a>

```go
func ResetWorkerRegion()
```

##### `ResetWorkerZone` <a name="ResetWorkerZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerZone"></a>

```go
func ResetWorkerZone()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetZone"></a>

```go
func ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperimentsInput">AdditionalExperimentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabelsInput">AdditionalUserLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidationInput">BypassTempDirValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngineInput">EnableStreamingEngineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfigurationInput">IpConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkersInput">NumWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocationInput">TempLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegionInput">WorkerRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZoneInput">WorkerZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperiments">AdditionalExperiments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabels">AdditionalUserLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidation">BypassTempDirValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfiguration">IpConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocation">TempLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegion">WorkerRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZone">WorkerZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalExperimentsInput`<sup>Optional</sup> <a name="AdditionalExperimentsInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperimentsInput"></a>

```go
func AdditionalExperimentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalUserLabelsInput`<sup>Optional</sup> <a name="AdditionalUserLabelsInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabelsInput"></a>

```go
func AdditionalUserLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BypassTempDirValidationInput`<sup>Optional</sup> <a name="BypassTempDirValidationInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidationInput"></a>

```go
func BypassTempDirValidationInput() interface{}
```

- *Type:* interface{}

---

##### `EnableStreamingEngineInput`<sup>Optional</sup> <a name="EnableStreamingEngineInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngineInput"></a>

```go
func EnableStreamingEngineInput() interface{}
```

- *Type:* interface{}

---

##### `IpConfigurationInput`<sup>Optional</sup> <a name="IpConfigurationInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfigurationInput"></a>

```go
func IpConfigurationInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkersInput"></a>

```go
func MaxWorkersInput() *f64
```

- *Type:* *f64

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `NumWorkersInput`<sup>Optional</sup> <a name="NumWorkersInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkersInput"></a>

```go
func NumWorkersInput() *f64
```

- *Type:* *f64

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TempLocationInput`<sup>Optional</sup> <a name="TempLocationInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocationInput"></a>

```go
func TempLocationInput() *string
```

- *Type:* *string

---

##### `WorkerRegionInput`<sup>Optional</sup> <a name="WorkerRegionInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegionInput"></a>

```go
func WorkerRegionInput() *string
```

- *Type:* *string

---

##### `WorkerZoneInput`<sup>Optional</sup> <a name="WorkerZoneInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZoneInput"></a>

```go
func WorkerZoneInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `AdditionalExperiments`<sup>Required</sup> <a name="AdditionalExperiments" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperiments"></a>

```go
func AdditionalExperiments() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalUserLabels`<sup>Required</sup> <a name="AdditionalUserLabels" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabels"></a>

```go
func AdditionalUserLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BypassTempDirValidation`<sup>Required</sup> <a name="BypassTempDirValidation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidation"></a>

```go
func BypassTempDirValidation() interface{}
```

- *Type:* interface{}

---

##### `EnableStreamingEngine`<sup>Required</sup> <a name="EnableStreamingEngine" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngine"></a>

```go
func EnableStreamingEngine() interface{}
```

- *Type:* interface{}

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfiguration"></a>

```go
func IpConfiguration() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkers"></a>

```go
func MaxWorkers() *f64
```

- *Type:* *f64

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NumWorkers`<sup>Required</sup> <a name="NumWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkers"></a>

```go
func NumWorkers() *f64
```

- *Type:* *f64

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `TempLocation`<sup>Required</sup> <a name="TempLocation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocation"></a>

```go
func TempLocation() *string
```

- *Type:* *string

---

##### `WorkerRegion`<sup>Required</sup> <a name="WorkerRegion" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegion"></a>

```go
func WorkerRegion() *string
```

- *Type:* *string

---

##### `WorkerZone`<sup>Required</sup> <a name="WorkerZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZone"></a>

```go
func WorkerZone() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

---


### GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference <a name="GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

googledatapipelinepipeline.NewGoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetTransformNameMapping">ResetTransformNameMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.putEnvironment"></a>

```go
func PutEnvironment(value GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

---

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetTransformNameMapping` <a name="ResetTransformNameMapping" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetTransformNameMapping"></a>

```go
func ResetTransformNameMapping()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMappingInput">TransformNameMappingInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.updateInput">UpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobName">JobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMapping">TransformNameMapping</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.update">Update</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environment"></a>

```go
func Environment() GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference</a>

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobNameInput"></a>

```go
func JobNameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransformNameMappingInput`<sup>Optional</sup> <a name="TransformNameMappingInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMappingInput"></a>

```go
func TransformNameMappingInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.updateInput"></a>

```go
func UpdateInput() interface{}
```

- *Type:* interface{}

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobName"></a>

```go
func JobName() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransformNameMapping`<sup>Required</sup> <a name="TransformNameMapping" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMapping"></a>

```go
func TransformNameMapping() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.update"></a>

```go
func Update() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

---


### GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference <a name="GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

googledatapipelinepipeline.NewGoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.putLaunchParameters">PutLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetGcsPath">ResetGcsPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLaunchParameters">ResetLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetValidateOnly">ResetValidateOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLaunchParameters` <a name="PutLaunchParameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.putLaunchParameters"></a>

```go
func PutLaunchParameters(value GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.putLaunchParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

---

##### `ResetGcsPath` <a name="ResetGcsPath" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetGcsPath"></a>

```go
func ResetGcsPath()
```

##### `ResetLaunchParameters` <a name="ResetLaunchParameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLaunchParameters"></a>

```go
func ResetLaunchParameters()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetValidateOnly` <a name="ResetValidateOnly" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetValidateOnly"></a>

```go
func ResetValidateOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParameters">LaunchParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPathInput">GcsPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParametersInput">LaunchParametersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnlyInput">ValidateOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPath">GcsPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnly">ValidateOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchParameters`<sup>Required</sup> <a name="LaunchParameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParameters"></a>

```go
func LaunchParameters() GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference</a>

---

##### `GcsPathInput`<sup>Optional</sup> <a name="GcsPathInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPathInput"></a>

```go
func GcsPathInput() *string
```

- *Type:* *string

---

##### `LaunchParametersInput`<sup>Optional</sup> <a name="LaunchParametersInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParametersInput"></a>

```go
func LaunchParametersInput() GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ValidateOnlyInput`<sup>Optional</sup> <a name="ValidateOnlyInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnlyInput"></a>

```go
func ValidateOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `GcsPath`<sup>Required</sup> <a name="GcsPath" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPath"></a>

```go
func GcsPath() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ValidateOnly`<sup>Required</sup> <a name="ValidateOnly" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnly"></a>

```go
func ValidateOnly() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

---


### GoogleDataPipelinePipelineWorkloadOutputReference <a name="GoogleDataPipelinePipelineWorkloadOutputReference" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatapipelinepipeline"

googledatapipelinepipeline.NewGoogleDataPipelinePipelineWorkloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataPipelinePipelineWorkloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.putDataflowFlexTemplateRequest">PutDataflowFlexTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.putDataflowLaunchTemplateRequest">PutDataflowLaunchTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.resetDataflowFlexTemplateRequest">ResetDataflowFlexTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.resetDataflowLaunchTemplateRequest">ResetDataflowLaunchTemplateRequest</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataflowFlexTemplateRequest` <a name="PutDataflowFlexTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.putDataflowFlexTemplateRequest"></a>

```go
func PutDataflowFlexTemplateRequest(value GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.putDataflowFlexTemplateRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

---

##### `PutDataflowLaunchTemplateRequest` <a name="PutDataflowLaunchTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.putDataflowLaunchTemplateRequest"></a>

```go
func PutDataflowLaunchTemplateRequest(value GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.putDataflowLaunchTemplateRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

---

##### `ResetDataflowFlexTemplateRequest` <a name="ResetDataflowFlexTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.resetDataflowFlexTemplateRequest"></a>

```go
func ResetDataflowFlexTemplateRequest()
```

##### `ResetDataflowLaunchTemplateRequest` <a name="ResetDataflowLaunchTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.resetDataflowLaunchTemplateRequest"></a>

```go
func ResetDataflowLaunchTemplateRequest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequest">DataflowFlexTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequest">DataflowLaunchTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequestInput">DataflowFlexTemplateRequestInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequestInput">DataflowLaunchTemplateRequestInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload">GoogleDataPipelinePipelineWorkload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataflowFlexTemplateRequest`<sup>Required</sup> <a name="DataflowFlexTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequest"></a>

```go
func DataflowFlexTemplateRequest() GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference</a>

---

##### `DataflowLaunchTemplateRequest`<sup>Required</sup> <a name="DataflowLaunchTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequest"></a>

```go
func DataflowLaunchTemplateRequest() GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference</a>

---

##### `DataflowFlexTemplateRequestInput`<sup>Optional</sup> <a name="DataflowFlexTemplateRequestInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequestInput"></a>

```go
func DataflowFlexTemplateRequestInput() GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

---

##### `DataflowLaunchTemplateRequestInput`<sup>Optional</sup> <a name="DataflowLaunchTemplateRequestInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequestInput"></a>

```go
func DataflowLaunchTemplateRequestInput() GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataPipelinePipelineWorkload
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload">GoogleDataPipelinePipelineWorkload</a>

---



