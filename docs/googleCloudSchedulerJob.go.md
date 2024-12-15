# `googleCloudSchedulerJob` Submodule <a name="`googleCloudSchedulerJob` Submodule" id="@cdktf/provider-google-beta.googleCloudSchedulerJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudSchedulerJob <a name="GoogleCloudSchedulerJob" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job google_cloud_scheduler_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

googlecloudschedulerjob.NewGoogleCloudSchedulerJob(scope Construct, id *string, config GoogleCloudSchedulerJobConfig) GoogleCloudSchedulerJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig">GoogleCloudSchedulerJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig">GoogleCloudSchedulerJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putAppEngineHttpTarget">PutAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putHttpTarget">PutHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putPubsubTarget">PutPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putRetryConfig">PutRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetAppEngineHttpTarget">ResetAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetAttemptDeadline">ResetAttemptDeadline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetHttpTarget">ResetHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetPaused">ResetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetPubsubTarget">ResetPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetRetryConfig">ResetRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAppEngineHttpTarget` <a name="PutAppEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putAppEngineHttpTarget"></a>

```go
func PutAppEngineHttpTarget(value GoogleCloudSchedulerJobAppEngineHttpTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putAppEngineHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a>

---

##### `PutHttpTarget` <a name="PutHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putHttpTarget"></a>

```go
func PutHttpTarget(value GoogleCloudSchedulerJobHttpTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a>

---

##### `PutPubsubTarget` <a name="PutPubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putPubsubTarget"></a>

```go
func PutPubsubTarget(value GoogleCloudSchedulerJobPubsubTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putPubsubTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a>

---

##### `PutRetryConfig` <a name="PutRetryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putRetryConfig"></a>

```go
func PutRetryConfig(value GoogleCloudSchedulerJobRetryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCloudSchedulerJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a>

---

##### `ResetAppEngineHttpTarget` <a name="ResetAppEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetAppEngineHttpTarget"></a>

```go
func ResetAppEngineHttpTarget()
```

##### `ResetAttemptDeadline` <a name="ResetAttemptDeadline" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetAttemptDeadline"></a>

```go
func ResetAttemptDeadline()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHttpTarget` <a name="ResetHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetHttpTarget"></a>

```go
func ResetHttpTarget()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetId"></a>

```go
func ResetId()
```

##### `ResetPaused` <a name="ResetPaused" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetPaused"></a>

```go
func ResetPaused()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPubsubTarget` <a name="ResetPubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetPubsubTarget"></a>

```go
func ResetPubsubTarget()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRetryConfig` <a name="ResetRetryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetRetryConfig"></a>

```go
func ResetRetryConfig()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetTimeZone"></a>

```go
func ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudSchedulerJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

googlecloudschedulerjob.GoogleCloudSchedulerJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

googlecloudschedulerjob.GoogleCloudSchedulerJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

googlecloudschedulerjob.GoogleCloudSchedulerJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

googlecloudschedulerjob.GoogleCloudSchedulerJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleCloudSchedulerJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCloudSchedulerJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCloudSchedulerJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudSchedulerJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.appEngineHttpTarget">AppEngineHttpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference">GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.httpTarget">HttpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference">GoogleCloudSchedulerJobHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pubsubTarget">PubsubTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference">GoogleCloudSchedulerJobPubsubTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.retryConfig">RetryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference">GoogleCloudSchedulerJobRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference">GoogleCloudSchedulerJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.appEngineHttpTargetInput">AppEngineHttpTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.attemptDeadlineInput">AttemptDeadlineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.httpTargetInput">HttpTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pausedInput">PausedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pubsubTargetInput">PubsubTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.retryConfigInput">RetryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.attemptDeadline">AttemptDeadline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.paused">Paused</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppEngineHttpTarget`<sup>Required</sup> <a name="AppEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.appEngineHttpTarget"></a>

```go
func AppEngineHttpTarget() GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference">GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference</a>

---

##### `HttpTarget`<sup>Required</sup> <a name="HttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.httpTarget"></a>

```go
func HttpTarget() GoogleCloudSchedulerJobHttpTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference">GoogleCloudSchedulerJobHttpTargetOutputReference</a>

---

##### `PubsubTarget`<sup>Required</sup> <a name="PubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pubsubTarget"></a>

```go
func PubsubTarget() GoogleCloudSchedulerJobPubsubTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference">GoogleCloudSchedulerJobPubsubTargetOutputReference</a>

---

##### `RetryConfig`<sup>Required</sup> <a name="RetryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.retryConfig"></a>

```go
func RetryConfig() GoogleCloudSchedulerJobRetryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference">GoogleCloudSchedulerJobRetryConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeouts"></a>

```go
func Timeouts() GoogleCloudSchedulerJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference">GoogleCloudSchedulerJobTimeoutsOutputReference</a>

---

##### `AppEngineHttpTargetInput`<sup>Optional</sup> <a name="AppEngineHttpTargetInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.appEngineHttpTargetInput"></a>

```go
func AppEngineHttpTargetInput() GoogleCloudSchedulerJobAppEngineHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a>

---

##### `AttemptDeadlineInput`<sup>Optional</sup> <a name="AttemptDeadlineInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.attemptDeadlineInput"></a>

```go
func AttemptDeadlineInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HttpTargetInput`<sup>Optional</sup> <a name="HttpTargetInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.httpTargetInput"></a>

```go
func HttpTargetInput() GoogleCloudSchedulerJobHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PausedInput`<sup>Optional</sup> <a name="PausedInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pausedInput"></a>

```go
func PausedInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PubsubTargetInput`<sup>Optional</sup> <a name="PubsubTargetInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pubsubTargetInput"></a>

```go
func PubsubTargetInput() GoogleCloudSchedulerJobPubsubTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RetryConfigInput`<sup>Optional</sup> <a name="RetryConfigInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.retryConfigInput"></a>

```go
func RetryConfigInput() GoogleCloudSchedulerJobRetryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `AttemptDeadline`<sup>Required</sup> <a name="AttemptDeadline" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.attemptDeadline"></a>

```go
func AttemptDeadline() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.paused"></a>

```go
func Paused() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudSchedulerJobAppEngineHttpTarget <a name="GoogleCloudSchedulerJobAppEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

&googlecloudschedulerjob.GoogleCloudSchedulerJobAppEngineHttpTarget {
	RelativeUri: *string,
	AppEngineRouting: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting,
	Body: *string,
	Headers: *map[string]*string,
	HttpMethod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.relativeUri">RelativeUri</a></code> | <code>*string</code> | The relative URI. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.appEngineRouting">AppEngineRouting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | app_engine_routing block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.body">Body</a></code> | <code>*string</code> | HTTP request body. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.headers">Headers</a></code> | <code>*map[string]*string</code> | HTTP request headers. This map contains the header field names and values. Headers can be set when the job is created. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | Which HTTP method to use for the request. |

---

##### `RelativeUri`<sup>Required</sup> <a name="RelativeUri" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.relativeUri"></a>

```go
RelativeUri *string
```

- *Type:* *string

The relative URI.

The relative URL must begin with "/" and must be a valid HTTP relative URL.
It can contain a path, query string arguments, and # fragments.
If the relative URL is empty, then the root path "/" will be used.
No spaces are allowed, and the maximum length allowed is 2083 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#relative_uri GoogleCloudSchedulerJob#relative_uri}

---

##### `AppEngineRouting`<sup>Optional</sup> <a name="AppEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.appEngineRouting"></a>

```go
AppEngineRouting GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

app_engine_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#app_engine_routing GoogleCloudSchedulerJob#app_engine_routing}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.body"></a>

```go
Body *string
```

- *Type:* *string

HTTP request body.

A request body is allowed only if the HTTP method is POST or PUT.
It will result in invalid argument error to set a body on a job with an incompatible HttpMethod.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#body GoogleCloudSchedulerJob#body}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.headers"></a>

```go
Headers *map[string]*string
```

- *Type:* *map[string]*string

HTTP request headers. This map contains the header field names and values. Headers can be set when the job is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#headers GoogleCloudSchedulerJob#headers}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.httpMethod"></a>

```go
HttpMethod *string
```

- *Type:* *string

Which HTTP method to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#http_method GoogleCloudSchedulerJob#http_method}

---

### GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting <a name="GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

&googlecloudschedulerjob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting {
	Instance: *string,
	Service: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.instance">Instance</a></code> | <code>*string</code> | App instance. By default, the job is sent to an instance which is available when the job is attempted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.service">Service</a></code> | <code>*string</code> | App service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.version">Version</a></code> | <code>*string</code> | App version. |

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

App instance. By default, the job is sent to an instance which is available when the job is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#instance GoogleCloudSchedulerJob#instance}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.service"></a>

```go
Service *string
```

- *Type:* *string

App service.

By default, the job is sent to the service which is the default service when the job is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#service GoogleCloudSchedulerJob#service}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.version"></a>

```go
Version *string
```

- *Type:* *string

App version.

By default, the job is sent to the version which is the default version when the job is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#version GoogleCloudSchedulerJob#version}

---

### GoogleCloudSchedulerJobConfig <a name="GoogleCloudSchedulerJobConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

&googlecloudschedulerjob.GoogleCloudSchedulerJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AppEngineHttpTarget: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget,
	AttemptDeadline: *string,
	Description: *string,
	HttpTarget: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget,
	Id: *string,
	Paused: interface{},
	Project: *string,
	PubsubTarget: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget,
	Region: *string,
	RetryConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig,
	Schedule: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.name">Name</a></code> | <code>*string</code> | The name of the job. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.appEngineHttpTarget">AppEngineHttpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a></code> | app_engine_http_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.attemptDeadline">AttemptDeadline</a></code> | <code>*string</code> | The deadline for job attempts. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description for the job. This string must not contain more than 500 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.httpTarget">HttpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#id GoogleCloudSchedulerJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.paused">Paused</a></code> | <code>interface{}</code> | Sets the job to a paused state. Jobs default to being enabled when this property is not set. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#project GoogleCloudSchedulerJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.pubsubTarget">PubsubTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a></code> | pubsub_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.region">Region</a></code> | <code>*string</code> | Region where the scheduler job resides. If it is not provided, Terraform will use the provider default. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.retryConfig">RetryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.schedule">Schedule</a></code> | <code>*string</code> | Describes the schedule on which the job will be executed. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | Specifies the time zone to be used in interpreting schedule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#name GoogleCloudSchedulerJob#name}

---

##### `AppEngineHttpTarget`<sup>Optional</sup> <a name="AppEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.appEngineHttpTarget"></a>

```go
AppEngineHttpTarget GoogleCloudSchedulerJobAppEngineHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a>

app_engine_http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#app_engine_http_target GoogleCloudSchedulerJob#app_engine_http_target}

---

##### `AttemptDeadline`<sup>Optional</sup> <a name="AttemptDeadline" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.attemptDeadline"></a>

```go
AttemptDeadline *string
```

- *Type:* *string

The deadline for job attempts.

If the request handler does not respond by this deadline then the request is
cancelled and the attempt is marked as a DEADLINE_EXCEEDED failure. The failed attempt can be viewed in
execution logs. Cloud Scheduler will retry the job according to the RetryConfig.
The allowed duration for this deadline is:

* For HTTP targets, between 15 seconds and 30 minutes.
* For App Engine HTTP targets, between 15 seconds and 24 hours.
* **Note**: For PubSub targets, this field is ignored - setting it will introduce an unresolvable diff.
  A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#attempt_deadline GoogleCloudSchedulerJob#attempt_deadline}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description for the job. This string must not contain more than 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#description GoogleCloudSchedulerJob#description}

---

##### `HttpTarget`<sup>Optional</sup> <a name="HttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.httpTarget"></a>

```go
HttpTarget GoogleCloudSchedulerJobHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#http_target GoogleCloudSchedulerJob#http_target}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#id GoogleCloudSchedulerJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Paused`<sup>Optional</sup> <a name="Paused" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.paused"></a>

```go
Paused interface{}
```

- *Type:* interface{}

Sets the job to a paused state. Jobs default to being enabled when this property is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#paused GoogleCloudSchedulerJob#paused}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#project GoogleCloudSchedulerJob#project}.

---

##### `PubsubTarget`<sup>Optional</sup> <a name="PubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.pubsubTarget"></a>

```go
PubsubTarget GoogleCloudSchedulerJobPubsubTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a>

pubsub_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#pubsub_target GoogleCloudSchedulerJob#pubsub_target}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where the scheduler job resides. If it is not provided, Terraform will use the provider default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#region GoogleCloudSchedulerJob#region}

---

##### `RetryConfig`<sup>Optional</sup> <a name="RetryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.retryConfig"></a>

```go
RetryConfig GoogleCloudSchedulerJobRetryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#retry_config GoogleCloudSchedulerJob#retry_config}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Describes the schedule on which the job will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#schedule GoogleCloudSchedulerJob#schedule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.timeouts"></a>

```go
Timeouts GoogleCloudSchedulerJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#timeouts GoogleCloudSchedulerJob#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Specifies the time zone to be used in interpreting schedule.

The value of this field must be a time zone name from the tz database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#time_zone GoogleCloudSchedulerJob#time_zone}

---

### GoogleCloudSchedulerJobHttpTarget <a name="GoogleCloudSchedulerJobHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

&googlecloudschedulerjob.GoogleCloudSchedulerJobHttpTarget {
	Uri: *string,
	Body: *string,
	Headers: *map[string]*string,
	HttpMethod: *string,
	OauthToken: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken,
	OidcToken: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.uri">Uri</a></code> | <code>*string</code> | The full URI path that the request will be sent to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.body">Body</a></code> | <code>*string</code> | HTTP request body. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.headers">Headers</a></code> | <code>*map[string]*string</code> | This map contains the header field names and values. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | Which HTTP method to use for the request. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.oauthToken">OauthToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a></code> | oauth_token block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a></code> | oidc_token block. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The full URI path that the request will be sent to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#uri GoogleCloudSchedulerJob#uri}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.body"></a>

```go
Body *string
```

- *Type:* *string

HTTP request body.

A request body is allowed only if the HTTP method is POST, PUT, or PATCH.
It is an error to set body on a job with an incompatible HttpMethod.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#body GoogleCloudSchedulerJob#body}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.headers"></a>

```go
Headers *map[string]*string
```

- *Type:* *map[string]*string

This map contains the header field names and values.

Repeated headers are not supported, but a header value can contain commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#headers GoogleCloudSchedulerJob#headers}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.httpMethod"></a>

```go
HttpMethod *string
```

- *Type:* *string

Which HTTP method to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#http_method GoogleCloudSchedulerJob#http_method}

---

##### `OauthToken`<sup>Optional</sup> <a name="OauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.oauthToken"></a>

```go
OauthToken GoogleCloudSchedulerJobHttpTargetOauthToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#oauth_token GoogleCloudSchedulerJob#oauth_token}

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.oidcToken"></a>

```go
OidcToken GoogleCloudSchedulerJobHttpTargetOidcToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#oidc_token GoogleCloudSchedulerJob#oidc_token}

---

### GoogleCloudSchedulerJobHttpTargetOauthToken <a name="GoogleCloudSchedulerJobHttpTargetOauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

&googlecloudschedulerjob.GoogleCloudSchedulerJobHttpTargetOauthToken {
	ServiceAccountEmail: *string,
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.property.scope">Scope</a></code> | <code>*string</code> | OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. |

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

Service account email to be used for generating OAuth token.

The service account must be within the same project as the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#service_account_email GoogleCloudSchedulerJob#service_account_email}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#scope GoogleCloudSchedulerJob#scope}

---

### GoogleCloudSchedulerJobHttpTargetOidcToken <a name="GoogleCloudSchedulerJobHttpTargetOidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

&googlecloudschedulerjob.GoogleCloudSchedulerJobHttpTargetOidcToken {
	ServiceAccountEmail: *string,
	Audience: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.property.audience">Audience</a></code> | <code>*string</code> | Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used. |

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

Service account email to be used for generating OAuth token.

The service account must be within the same project as the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#service_account_email GoogleCloudSchedulerJob#service_account_email}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#audience GoogleCloudSchedulerJob#audience}

---

### GoogleCloudSchedulerJobPubsubTarget <a name="GoogleCloudSchedulerJobPubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

&googlecloudschedulerjob.GoogleCloudSchedulerJobPubsubTarget {
	TopicName: *string,
	Attributes: *map[string]*string,
	Data: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.topicName">TopicName</a></code> | <code>*string</code> | The full resource name for the Cloud Pub/Sub topic to which messages will be published when a job is delivered. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.attributes">Attributes</a></code> | <code>*map[string]*string</code> | Attributes for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.data">Data</a></code> | <code>*string</code> | The message payload for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute. |

---

##### `TopicName`<sup>Required</sup> <a name="TopicName" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.topicName"></a>

```go
TopicName *string
```

- *Type:* *string

The full resource name for the Cloud Pub/Sub topic to which messages will be published when a job is delivered.

~>**NOTE:**
The topic name must be in the same format as required by PubSub's
PublishRequest.name, e.g. 'projects/my-project/topics/my-topic'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#topic_name GoogleCloudSchedulerJob#topic_name}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.attributes"></a>

```go
Attributes *map[string]*string
```

- *Type:* *map[string]*string

Attributes for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#attributes GoogleCloudSchedulerJob#attributes}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.data"></a>

```go
Data *string
```

- *Type:* *string

The message payload for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#data GoogleCloudSchedulerJob#data}

---

### GoogleCloudSchedulerJobRetryConfig <a name="GoogleCloudSchedulerJobRetryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

&googlecloudschedulerjob.GoogleCloudSchedulerJobRetryConfig {
	MaxBackoffDuration: *string,
	MaxDoublings: *f64,
	MaxRetryDuration: *string,
	MinBackoffDuration: *string,
	RetryCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxBackoffDuration">MaxBackoffDuration</a></code> | <code>*string</code> | The maximum amount of time to wait before retrying a job after it fails. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxDoublings">MaxDoublings</a></code> | <code>*f64</code> | The time between retries will double maxDoublings times. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxRetryDuration">MaxRetryDuration</a></code> | <code>*string</code> | The time limit for retrying a failed job, measured from time when an execution was first attempted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.minBackoffDuration">MinBackoffDuration</a></code> | <code>*string</code> | The minimum amount of time to wait before retrying a job after it fails. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.retryCount">RetryCount</a></code> | <code>*f64</code> | The number of attempts that the system will make to run a job using the exponential backoff procedure described by maxDoublings. |

---

##### `MaxBackoffDuration`<sup>Optional</sup> <a name="MaxBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxBackoffDuration"></a>

```go
MaxBackoffDuration *string
```

- *Type:* *string

The maximum amount of time to wait before retrying a job after it fails.

A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#max_backoff_duration GoogleCloudSchedulerJob#max_backoff_duration}

---

##### `MaxDoublings`<sup>Optional</sup> <a name="MaxDoublings" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxDoublings"></a>

```go
MaxDoublings *f64
```

- *Type:* *f64

The time between retries will double maxDoublings times.

A job's retry interval starts at minBackoffDuration,
then doubles maxDoublings times, then increases linearly,
and finally retries retries at intervals of maxBackoffDuration up to retryCount times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#max_doublings GoogleCloudSchedulerJob#max_doublings}

---

##### `MaxRetryDuration`<sup>Optional</sup> <a name="MaxRetryDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxRetryDuration"></a>

```go
MaxRetryDuration *string
```

- *Type:* *string

The time limit for retrying a failed job, measured from time when an execution was first attempted.

If specified with retryCount, the job will be retried until both limits are reached.
A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#max_retry_duration GoogleCloudSchedulerJob#max_retry_duration}

---

##### `MinBackoffDuration`<sup>Optional</sup> <a name="MinBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.minBackoffDuration"></a>

```go
MinBackoffDuration *string
```

- *Type:* *string

The minimum amount of time to wait before retrying a job after it fails.

A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#min_backoff_duration GoogleCloudSchedulerJob#min_backoff_duration}

---

##### `RetryCount`<sup>Optional</sup> <a name="RetryCount" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.retryCount"></a>

```go
RetryCount *f64
```

- *Type:* *f64

The number of attempts that the system will make to run a job using the exponential backoff procedure described by maxDoublings.

Values greater than 5 and negative values are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#retry_count GoogleCloudSchedulerJob#retry_count}

---

### GoogleCloudSchedulerJobTimeouts <a name="GoogleCloudSchedulerJobTimeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

&googlecloudschedulerjob.GoogleCloudSchedulerJobTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#create GoogleCloudSchedulerJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#delete GoogleCloudSchedulerJob#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#update GoogleCloudSchedulerJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#create GoogleCloudSchedulerJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#delete GoogleCloudSchedulerJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_scheduler_job#update GoogleCloudSchedulerJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference <a name="GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

googlecloudschedulerjob.NewGoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetInstance"></a>

```go
func ResetInstance()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---


### GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference <a name="GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

googlecloudschedulerjob.NewGoogleCloudSchedulerJobAppEngineHttpTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting">PutAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetAppEngineRouting">ResetAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAppEngineRouting` <a name="PutAppEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting"></a>

```go
func PutAppEngineRouting(value GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---

##### `ResetAppEngineRouting` <a name="ResetAppEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetAppEngineRouting"></a>

```go
func ResetAppEngineRouting()
```

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetBody"></a>

```go
func ResetBody()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetHttpMethod"></a>

```go
func ResetHttpMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRouting">AppEngineRouting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRoutingInput">AppEngineRoutingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.headersInput">HeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUriInput">RelativeUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.headers">Headers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUri">RelativeUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppEngineRouting`<sup>Required</sup> <a name="AppEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRouting"></a>

```go
func AppEngineRouting() GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference</a>

---

##### `AppEngineRoutingInput`<sup>Optional</sup> <a name="AppEngineRoutingInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRoutingInput"></a>

```go
func AppEngineRoutingInput() GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.headersInput"></a>

```go
func HeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethodInput"></a>

```go
func HttpMethodInput() *string
```

- *Type:* *string

---

##### `RelativeUriInput`<sup>Optional</sup> <a name="RelativeUriInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUriInput"></a>

```go
func RelativeUriInput() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.headers"></a>

```go
func Headers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `RelativeUri`<sup>Required</sup> <a name="RelativeUri" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUri"></a>

```go
func RelativeUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSchedulerJobAppEngineHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a>

---


### GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference <a name="GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

googlecloudschedulerjob.NewGoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSchedulerJobHttpTargetOauthToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a>

---


### GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference <a name="GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

googlecloudschedulerjob.NewGoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resetAudience"></a>

```go
func ResetAudience()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSchedulerJobHttpTargetOidcToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a>

---


### GoogleCloudSchedulerJobHttpTargetOutputReference <a name="GoogleCloudSchedulerJobHttpTargetOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

googlecloudschedulerjob.NewGoogleCloudSchedulerJobHttpTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSchedulerJobHttpTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOauthToken">PutOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOidcToken">PutOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetOauthToken">ResetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetOidcToken">ResetOidcToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauthToken` <a name="PutOauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOauthToken"></a>

```go
func PutOauthToken(value GoogleCloudSchedulerJobHttpTargetOauthToken)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOauthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a>

---

##### `PutOidcToken` <a name="PutOidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOidcToken"></a>

```go
func PutOidcToken(value GoogleCloudSchedulerJobHttpTargetOidcToken)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a>

---

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetBody"></a>

```go
func ResetBody()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetHttpMethod"></a>

```go
func ResetHttpMethod()
```

##### `ResetOauthToken` <a name="ResetOauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetOauthToken"></a>

```go
func ResetOauthToken()
```

##### `ResetOidcToken` <a name="ResetOidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetOidcToken"></a>

```go
func ResetOidcToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oauthToken">OauthToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference">GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference">GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.headersInput">HeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oauthTokenInput">OauthTokenInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oidcTokenInput">OidcTokenInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.headers">Headers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OauthToken`<sup>Required</sup> <a name="OauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oauthToken"></a>

```go
func OauthToken() GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference">GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference</a>

---

##### `OidcToken`<sup>Required</sup> <a name="OidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oidcToken"></a>

```go
func OidcToken() GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference">GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.headersInput"></a>

```go
func HeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.httpMethodInput"></a>

```go
func HttpMethodInput() *string
```

- *Type:* *string

---

##### `OauthTokenInput`<sup>Optional</sup> <a name="OauthTokenInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oauthTokenInput"></a>

```go
func OauthTokenInput() GoogleCloudSchedulerJobHttpTargetOauthToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a>

---

##### `OidcTokenInput`<sup>Optional</sup> <a name="OidcTokenInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oidcTokenInput"></a>

```go
func OidcTokenInput() GoogleCloudSchedulerJobHttpTargetOidcToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a>

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.headers"></a>

```go
func Headers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSchedulerJobHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a>

---


### GoogleCloudSchedulerJobPubsubTargetOutputReference <a name="GoogleCloudSchedulerJobPubsubTargetOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

googlecloudschedulerjob.NewGoogleCloudSchedulerJobPubsubTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSchedulerJobPubsubTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resetData">ResetData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resetData"></a>

```go
func ResetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.attributesInput">AttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.topicNameInput">TopicNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.attributes">Attributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.topicName">TopicName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.attributesInput"></a>

```go
func AttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `TopicNameInput`<sup>Optional</sup> <a name="TopicNameInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.topicNameInput"></a>

```go
func TopicNameInput() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.attributes"></a>

```go
func Attributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `TopicName`<sup>Required</sup> <a name="TopicName" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.topicName"></a>

```go
func TopicName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSchedulerJobPubsubTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a>

---


### GoogleCloudSchedulerJobRetryConfigOutputReference <a name="GoogleCloudSchedulerJobRetryConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

googlecloudschedulerjob.NewGoogleCloudSchedulerJobRetryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSchedulerJobRetryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxBackoffDuration">ResetMaxBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxDoublings">ResetMaxDoublings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxRetryDuration">ResetMaxRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMinBackoffDuration">ResetMinBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetRetryCount">ResetRetryCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxBackoffDuration` <a name="ResetMaxBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxBackoffDuration"></a>

```go
func ResetMaxBackoffDuration()
```

##### `ResetMaxDoublings` <a name="ResetMaxDoublings" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxDoublings"></a>

```go
func ResetMaxDoublings()
```

##### `ResetMaxRetryDuration` <a name="ResetMaxRetryDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxRetryDuration"></a>

```go
func ResetMaxRetryDuration()
```

##### `ResetMinBackoffDuration` <a name="ResetMinBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMinBackoffDuration"></a>

```go
func ResetMinBackoffDuration()
```

##### `ResetRetryCount` <a name="ResetRetryCount" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetRetryCount"></a>

```go
func ResetRetryCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDurationInput">MaxBackoffDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxDoublingsInput">MaxDoublingsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxRetryDurationInput">MaxRetryDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.minBackoffDurationInput">MinBackoffDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.retryCountInput">RetryCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDuration">MaxBackoffDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxDoublings">MaxDoublings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxRetryDuration">MaxRetryDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.minBackoffDuration">MinBackoffDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.retryCount">RetryCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxBackoffDurationInput`<sup>Optional</sup> <a name="MaxBackoffDurationInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDurationInput"></a>

```go
func MaxBackoffDurationInput() *string
```

- *Type:* *string

---

##### `MaxDoublingsInput`<sup>Optional</sup> <a name="MaxDoublingsInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxDoublingsInput"></a>

```go
func MaxDoublingsInput() *f64
```

- *Type:* *f64

---

##### `MaxRetryDurationInput`<sup>Optional</sup> <a name="MaxRetryDurationInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxRetryDurationInput"></a>

```go
func MaxRetryDurationInput() *string
```

- *Type:* *string

---

##### `MinBackoffDurationInput`<sup>Optional</sup> <a name="MinBackoffDurationInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.minBackoffDurationInput"></a>

```go
func MinBackoffDurationInput() *string
```

- *Type:* *string

---

##### `RetryCountInput`<sup>Optional</sup> <a name="RetryCountInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.retryCountInput"></a>

```go
func RetryCountInput() *f64
```

- *Type:* *f64

---

##### `MaxBackoffDuration`<sup>Required</sup> <a name="MaxBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDuration"></a>

```go
func MaxBackoffDuration() *string
```

- *Type:* *string

---

##### `MaxDoublings`<sup>Required</sup> <a name="MaxDoublings" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxDoublings"></a>

```go
func MaxDoublings() *f64
```

- *Type:* *f64

---

##### `MaxRetryDuration`<sup>Required</sup> <a name="MaxRetryDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxRetryDuration"></a>

```go
func MaxRetryDuration() *string
```

- *Type:* *string

---

##### `MinBackoffDuration`<sup>Required</sup> <a name="MinBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.minBackoffDuration"></a>

```go
func MinBackoffDuration() *string
```

- *Type:* *string

---

##### `RetryCount`<sup>Required</sup> <a name="RetryCount" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.retryCount"></a>

```go
func RetryCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSchedulerJobRetryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a>

---


### GoogleCloudSchedulerJobTimeoutsOutputReference <a name="GoogleCloudSchedulerJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudschedulerjob"

googlecloudschedulerjob.NewGoogleCloudSchedulerJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSchedulerJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



