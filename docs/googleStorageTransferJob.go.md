# `googleStorageTransferJob` Submodule <a name="`googleStorageTransferJob` Submodule" id="@cdktf/provider-google-beta.googleStorageTransferJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageTransferJob <a name="GoogleStorageTransferJob" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job google_storage_transfer_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJob(scope Construct, id *string, config GoogleStorageTransferJobConfig) GoogleStorageTransferJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig">GoogleStorageTransferJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig">GoogleStorageTransferJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putEventStream">PutEventStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putNotificationConfig">PutNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putReplicationSpec">PutReplicationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec">PutTransferSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetEventStream">ResetEventStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetNotificationConfig">ResetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetReplicationSpec">ResetReplicationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetTransferSpec">ResetTransferSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventStream` <a name="PutEventStream" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putEventStream"></a>

```go
func PutEventStream(value GoogleStorageTransferJobEventStream)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putEventStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a>

---

##### `PutNotificationConfig` <a name="PutNotificationConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putNotificationConfig"></a>

```go
func PutNotificationConfig(value GoogleStorageTransferJobNotificationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a>

---

##### `PutReplicationSpec` <a name="PutReplicationSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putReplicationSpec"></a>

```go
func PutReplicationSpec(value GoogleStorageTransferJobReplicationSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putReplicationSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putSchedule"></a>

```go
func PutSchedule(value GoogleStorageTransferJobSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a>

---

##### `PutTransferSpec` <a name="PutTransferSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec"></a>

```go
func PutTransferSpec(value GoogleStorageTransferJobTransferSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a>

---

##### `ResetEventStream` <a name="ResetEventStream" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetEventStream"></a>

```go
func ResetEventStream()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetName"></a>

```go
func ResetName()
```

##### `ResetNotificationConfig` <a name="ResetNotificationConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetNotificationConfig"></a>

```go
func ResetNotificationConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetProject"></a>

```go
func ResetProject()
```

##### `ResetReplicationSpec` <a name="ResetReplicationSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetReplicationSpec"></a>

```go
func ResetReplicationSpec()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTransferSpec` <a name="ResetTransferSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetTransferSpec"></a>

```go
func ResetTransferSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageTransferJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.GoogleStorageTransferJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.GoogleStorageTransferJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.GoogleStorageTransferJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.GoogleStorageTransferJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleStorageTransferJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleStorageTransferJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleStorageTransferJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageTransferJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.deletionTime">DeletionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.eventStream">EventStream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference">GoogleStorageTransferJobEventStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.lastModificationTime">LastModificationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference">GoogleStorageTransferJobNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.replicationSpec">ReplicationSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference">GoogleStorageTransferJobReplicationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference">GoogleStorageTransferJobScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.transferSpec">TransferSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference">GoogleStorageTransferJobTransferSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.eventStreamInput">EventStreamInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.notificationConfigInput">NotificationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.replicationSpecInput">ReplicationSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.transferSpecInput">TransferSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DeletionTime`<sup>Required</sup> <a name="DeletionTime" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.deletionTime"></a>

```go
func DeletionTime() *string
```

- *Type:* *string

---

##### `EventStream`<sup>Required</sup> <a name="EventStream" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.eventStream"></a>

```go
func EventStream() GoogleStorageTransferJobEventStreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference">GoogleStorageTransferJobEventStreamOutputReference</a>

---

##### `LastModificationTime`<sup>Required</sup> <a name="LastModificationTime" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.lastModificationTime"></a>

```go
func LastModificationTime() *string
```

- *Type:* *string

---

##### `NotificationConfig`<sup>Required</sup> <a name="NotificationConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.notificationConfig"></a>

```go
func NotificationConfig() GoogleStorageTransferJobNotificationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference">GoogleStorageTransferJobNotificationConfigOutputReference</a>

---

##### `ReplicationSpec`<sup>Required</sup> <a name="ReplicationSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.replicationSpec"></a>

```go
func ReplicationSpec() GoogleStorageTransferJobReplicationSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference">GoogleStorageTransferJobReplicationSpecOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.schedule"></a>

```go
func Schedule() GoogleStorageTransferJobScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference">GoogleStorageTransferJobScheduleOutputReference</a>

---

##### `TransferSpec`<sup>Required</sup> <a name="TransferSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.transferSpec"></a>

```go
func TransferSpec() GoogleStorageTransferJobTransferSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference">GoogleStorageTransferJobTransferSpecOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EventStreamInput`<sup>Optional</sup> <a name="EventStreamInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.eventStreamInput"></a>

```go
func EventStreamInput() GoogleStorageTransferJobEventStream
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationConfigInput`<sup>Optional</sup> <a name="NotificationConfigInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.notificationConfigInput"></a>

```go
func NotificationConfigInput() GoogleStorageTransferJobNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReplicationSpecInput`<sup>Optional</sup> <a name="ReplicationSpecInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.replicationSpecInput"></a>

```go
func ReplicationSpecInput() GoogleStorageTransferJobReplicationSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.scheduleInput"></a>

```go
func ScheduleInput() GoogleStorageTransferJobSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TransferSpecInput`<sup>Optional</sup> <a name="TransferSpecInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.transferSpecInput"></a>

```go
func TransferSpecInput() GoogleStorageTransferJobTransferSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageTransferJobConfig <a name="GoogleStorageTransferJobConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	EventStream: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobEventStream,
	Id: *string,
	Name: *string,
	NotificationConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig,
	Project: *string,
	ReplicationSpec: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec,
	Schedule: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobSchedule,
	Status: *string,
	TransferSpec: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.description">Description</a></code> | <code>*string</code> | Unique description to identify the Transfer Job. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.eventStream">EventStream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a></code> | event_stream block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#id GoogleStorageTransferJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Transfer Job. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.project">Project</a></code> | <code>*string</code> | The project in which the resource belongs. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.replicationSpec">ReplicationSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a></code> | replication_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.status">Status</a></code> | <code>*string</code> | Status of the job. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.transferSpec">TransferSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a></code> | transfer_spec block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Unique description to identify the Transfer Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#description GoogleStorageTransferJob#description}

---

##### `EventStream`<sup>Optional</sup> <a name="EventStream" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.eventStream"></a>

```go
EventStream GoogleStorageTransferJobEventStream
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a>

event_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#event_stream GoogleStorageTransferJob#event_stream}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#id GoogleStorageTransferJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Transfer Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#name GoogleStorageTransferJob#name}

---

##### `NotificationConfig`<sup>Optional</sup> <a name="NotificationConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.notificationConfig"></a>

```go
NotificationConfig GoogleStorageTransferJobNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#notification_config GoogleStorageTransferJob#notification_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project in which the resource belongs. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#project GoogleStorageTransferJob#project}

---

##### `ReplicationSpec`<sup>Optional</sup> <a name="ReplicationSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.replicationSpec"></a>

```go
ReplicationSpec GoogleStorageTransferJobReplicationSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a>

replication_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#replication_spec GoogleStorageTransferJob#replication_spec}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.schedule"></a>

```go
Schedule GoogleStorageTransferJobSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#schedule GoogleStorageTransferJob#schedule}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Status of the job.

Default: ENABLED. NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#status GoogleStorageTransferJob#status}

---

##### `TransferSpec`<sup>Optional</sup> <a name="TransferSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.transferSpec"></a>

```go
TransferSpec GoogleStorageTransferJobTransferSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a>

transfer_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#transfer_spec GoogleStorageTransferJob#transfer_spec}

---

### GoogleStorageTransferJobEventStream <a name="GoogleStorageTransferJobEventStream" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobEventStream {
	Name: *string,
	EventStreamExpirationTime: *string,
	EventStreamStartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.property.name">Name</a></code> | <code>*string</code> | Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.property.eventStreamExpirationTime">EventStreamExpirationTime</a></code> | <code>*string</code> | Specifies the data and time at which Storage Transfer Service stops listening for events from this stream. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.property.eventStreamStartTime">EventStreamStartTime</a></code> | <code>*string</code> | Specifies the date and time that Storage Transfer Service starts listening for events from this stream. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#name GoogleStorageTransferJob#name}

---

##### `EventStreamExpirationTime`<sup>Optional</sup> <a name="EventStreamExpirationTime" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.property.eventStreamExpirationTime"></a>

```go
EventStreamExpirationTime *string
```

- *Type:* *string

Specifies the data and time at which Storage Transfer Service stops listening for events from this stream.

After this time, any transfers in progress will complete, but no new transfers are initiated

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#event_stream_expiration_time GoogleStorageTransferJob#event_stream_expiration_time}

---

##### `EventStreamStartTime`<sup>Optional</sup> <a name="EventStreamStartTime" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.property.eventStreamStartTime"></a>

```go
EventStreamStartTime *string
```

- *Type:* *string

Specifies the date and time that Storage Transfer Service starts listening for events from this stream.

If no start time is specified or start time is in the past, Storage Transfer Service starts listening immediately

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#event_stream_start_time GoogleStorageTransferJob#event_stream_start_time}

---

### GoogleStorageTransferJobNotificationConfig <a name="GoogleStorageTransferJobNotificationConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobNotificationConfig {
	PayloadFormat: *string,
	PubsubTopic: *string,
	EventTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.property.payloadFormat">PayloadFormat</a></code> | <code>*string</code> | The desired format of the notification message payloads. One of "NONE" or "JSON". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | The Topic.name of the Pub/Sub topic to which to publish notifications. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.property.eventTypes">EventTypes</a></code> | <code>*[]*string</code> | Event types for which a notification is desired. |

---

##### `PayloadFormat`<sup>Required</sup> <a name="PayloadFormat" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.property.payloadFormat"></a>

```go
PayloadFormat *string
```

- *Type:* *string

The desired format of the notification message payloads. One of "NONE" or "JSON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#payload_format GoogleStorageTransferJob#payload_format}

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.property.pubsubTopic"></a>

```go
PubsubTopic *string
```

- *Type:* *string

The Topic.name of the Pub/Sub topic to which to publish notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#pubsub_topic GoogleStorageTransferJob#pubsub_topic}

---

##### `EventTypes`<sup>Optional</sup> <a name="EventTypes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.property.eventTypes"></a>

```go
EventTypes *[]*string
```

- *Type:* *[]*string

Event types for which a notification is desired.

If empty, send notifications for all event types. The valid types are "TRANSFER_OPERATION_SUCCESS", "TRANSFER_OPERATION_FAILED", "TRANSFER_OPERATION_ABORTED".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#event_types GoogleStorageTransferJob#event_types}

---

### GoogleStorageTransferJobReplicationSpec <a name="GoogleStorageTransferJobReplicationSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobReplicationSpec {
	GcsDataSink: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink,
	GcsDataSource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource,
	ObjectConditions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions,
	TransferOptions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.gcsDataSink">GcsDataSink</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a></code> | gcs_data_sink block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.gcsDataSource">GcsDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a></code> | gcs_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.objectConditions">ObjectConditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a></code> | object_conditions block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.transferOptions">TransferOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a></code> | transfer_options block. |

---

##### `GcsDataSink`<sup>Optional</sup> <a name="GcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.gcsDataSink"></a>

```go
GcsDataSink GoogleStorageTransferJobReplicationSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a>

gcs_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#gcs_data_sink GoogleStorageTransferJob#gcs_data_sink}

---

##### `GcsDataSource`<sup>Optional</sup> <a name="GcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.gcsDataSource"></a>

```go
GcsDataSource GoogleStorageTransferJobReplicationSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a>

gcs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#gcs_data_source GoogleStorageTransferJob#gcs_data_source}

---

##### `ObjectConditions`<sup>Optional</sup> <a name="ObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.objectConditions"></a>

```go
ObjectConditions GoogleStorageTransferJobReplicationSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a>

object_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#object_conditions GoogleStorageTransferJob#object_conditions}

---

##### `TransferOptions`<sup>Optional</sup> <a name="TransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.transferOptions"></a>

```go
TransferOptions GoogleStorageTransferJobReplicationSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a>

transfer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#transfer_options GoogleStorageTransferJob#transfer_options}

---

### GoogleStorageTransferJobReplicationSpecGcsDataSink <a name="GoogleStorageTransferJobReplicationSpecGcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobReplicationSpecGcsDataSink {
	BucketName: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink.property.bucketName">BucketName</a></code> | <code>*string</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink.property.path">Path</a></code> | <code>*string</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink.property.path"></a>

```go
Path *string
```

- *Type:* *string

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

### GoogleStorageTransferJobReplicationSpecGcsDataSource <a name="GoogleStorageTransferJobReplicationSpecGcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobReplicationSpecGcsDataSource {
	BucketName: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource.property.bucketName">BucketName</a></code> | <code>*string</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource.property.path">Path</a></code> | <code>*string</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource.property.path"></a>

```go
Path *string
```

- *Type:* *string

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

### GoogleStorageTransferJobReplicationSpecObjectConditions <a name="GoogleStorageTransferJobReplicationSpecObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobReplicationSpecObjectConditions {
	ExcludePrefixes: *[]*string,
	IncludePrefixes: *[]*string,
	LastModifiedBefore: *string,
	LastModifiedSince: *string,
	MaxTimeElapsedSinceLastModification: *string,
	MinTimeElapsedSinceLastModification: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.excludePrefixes">ExcludePrefixes</a></code> | <code>*[]*string</code> | exclude_prefixes must follow the requirements described for include_prefixes. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.includePrefixes">IncludePrefixes</a></code> | <code>*[]*string</code> | If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.lastModifiedBefore">LastModifiedBefore</a></code> | <code>*string</code> | If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.lastModifiedSince">LastModifiedSince</a></code> | <code>*string</code> | If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.maxTimeElapsedSinceLastModification">MaxTimeElapsedSinceLastModification</a></code> | <code>*string</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.minTimeElapsedSinceLastModification">MinTimeElapsedSinceLastModification</a></code> | <code>*string</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |

---

##### `ExcludePrefixes`<sup>Optional</sup> <a name="ExcludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.excludePrefixes"></a>

```go
ExcludePrefixes *[]*string
```

- *Type:* *[]*string

exclude_prefixes must follow the requirements described for include_prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#exclude_prefixes GoogleStorageTransferJob#exclude_prefixes}

---

##### `IncludePrefixes`<sup>Optional</sup> <a name="IncludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.includePrefixes"></a>

```go
IncludePrefixes *[]*string
```

- *Type:* *[]*string

If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes.

If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#include_prefixes GoogleStorageTransferJob#include_prefixes}

---

##### `LastModifiedBefore`<sup>Optional</sup> <a name="LastModifiedBefore" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.lastModifiedBefore"></a>

```go
LastModifiedBefore *string
```

- *Type:* *string

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#last_modified_before GoogleStorageTransferJob#last_modified_before}

---

##### `LastModifiedSince`<sup>Optional</sup> <a name="LastModifiedSince" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.lastModifiedSince"></a>

```go
LastModifiedSince *string
```

- *Type:* *string

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#last_modified_since GoogleStorageTransferJob#last_modified_since}

---

##### `MaxTimeElapsedSinceLastModification`<sup>Optional</sup> <a name="MaxTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.maxTimeElapsedSinceLastModification"></a>

```go
MaxTimeElapsedSinceLastModification *string
```

- *Type:* *string

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#max_time_elapsed_since_last_modification GoogleStorageTransferJob#max_time_elapsed_since_last_modification}

---

##### `MinTimeElapsedSinceLastModification`<sup>Optional</sup> <a name="MinTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.minTimeElapsedSinceLastModification"></a>

```go
MinTimeElapsedSinceLastModification *string
```

- *Type:* *string

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#min_time_elapsed_since_last_modification GoogleStorageTransferJob#min_time_elapsed_since_last_modification}

---

### GoogleStorageTransferJobReplicationSpecTransferOptions <a name="GoogleStorageTransferJobReplicationSpecTransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobReplicationSpecTransferOptions {
	DeleteObjectsFromSourceAfterTransfer: interface{},
	DeleteObjectsUniqueInSink: interface{},
	OverwriteObjectsAlreadyExistingInSink: interface{},
	OverwriteWhen: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer">DeleteObjectsFromSourceAfterTransfer</a></code> | <code>interface{}</code> | Whether objects should be deleted from the source after they are transferred to the sink. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsUniqueInSink">DeleteObjectsUniqueInSink</a></code> | <code>interface{}</code> | Whether objects that exist only in the sink should be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink">OverwriteObjectsAlreadyExistingInSink</a></code> | <code>interface{}</code> | Whether overwriting objects that already exist in the sink is allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.overwriteWhen">OverwriteWhen</a></code> | <code>*string</code> | When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink. |

---

##### `DeleteObjectsFromSourceAfterTransfer`<sup>Optional</sup> <a name="DeleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer"></a>

```go
DeleteObjectsFromSourceAfterTransfer interface{}
```

- *Type:* interface{}

Whether objects should be deleted from the source after they are transferred to the sink.

Note that this option and delete_objects_unique_in_sink are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#delete_objects_from_source_after_transfer GoogleStorageTransferJob#delete_objects_from_source_after_transfer}

---

##### `DeleteObjectsUniqueInSink`<sup>Optional</sup> <a name="DeleteObjectsUniqueInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsUniqueInSink"></a>

```go
DeleteObjectsUniqueInSink interface{}
```

- *Type:* interface{}

Whether objects that exist only in the sink should be deleted.

Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#delete_objects_unique_in_sink GoogleStorageTransferJob#delete_objects_unique_in_sink}

---

##### `OverwriteObjectsAlreadyExistingInSink`<sup>Optional</sup> <a name="OverwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink"></a>

```go
OverwriteObjectsAlreadyExistingInSink interface{}
```

- *Type:* interface{}

Whether overwriting objects that already exist in the sink is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#overwrite_objects_already_existing_in_sink GoogleStorageTransferJob#overwrite_objects_already_existing_in_sink}

---

##### `OverwriteWhen`<sup>Optional</sup> <a name="OverwriteWhen" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.overwriteWhen"></a>

```go
OverwriteWhen *string
```

- *Type:* *string

When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#overwrite_when GoogleStorageTransferJob#overwrite_when}

---

### GoogleStorageTransferJobSchedule <a name="GoogleStorageTransferJobSchedule" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobSchedule {
	ScheduleStartDate: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate,
	RepeatInterval: *string,
	ScheduleEndDate: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate,
	StartTimeOfDay: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.scheduleStartDate">ScheduleStartDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a></code> | schedule_start_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.repeatInterval">RepeatInterval</a></code> | <code>*string</code> | Interval between the start of each scheduled transfer. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.scheduleEndDate">ScheduleEndDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a></code> | schedule_end_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.startTimeOfDay">StartTimeOfDay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a></code> | start_time_of_day block. |

---

##### `ScheduleStartDate`<sup>Required</sup> <a name="ScheduleStartDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.scheduleStartDate"></a>

```go
ScheduleStartDate GoogleStorageTransferJobScheduleScheduleStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a>

schedule_start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#schedule_start_date GoogleStorageTransferJob#schedule_start_date}

---

##### `RepeatInterval`<sup>Optional</sup> <a name="RepeatInterval" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.repeatInterval"></a>

```go
RepeatInterval *string
```

- *Type:* *string

Interval between the start of each scheduled transfer.

If unspecified, the default value is 24 hours. This value may not be less than 1 hour. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#repeat_interval GoogleStorageTransferJob#repeat_interval}

---

##### `ScheduleEndDate`<sup>Optional</sup> <a name="ScheduleEndDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.scheduleEndDate"></a>

```go
ScheduleEndDate GoogleStorageTransferJobScheduleScheduleEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a>

schedule_end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#schedule_end_date GoogleStorageTransferJob#schedule_end_date}

---

##### `StartTimeOfDay`<sup>Optional</sup> <a name="StartTimeOfDay" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.startTimeOfDay"></a>

```go
StartTimeOfDay GoogleStorageTransferJobScheduleStartTimeOfDay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a>

start_time_of_day block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#start_time_of_day GoogleStorageTransferJob#start_time_of_day}

---

### GoogleStorageTransferJobScheduleScheduleEndDate <a name="GoogleStorageTransferJobScheduleScheduleEndDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobScheduleScheduleEndDate {
	Day: *f64,
	Month: *f64,
	Year: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.property.day">Day</a></code> | <code>*f64</code> | Day of month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.property.month">Month</a></code> | <code>*f64</code> | Month of year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.property.year">Year</a></code> | <code>*f64</code> | Year of date. Must be from 1 to 9999. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

Day of month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#day GoogleStorageTransferJob#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.property.month"></a>

```go
Month *f64
```

- *Type:* *f64

Month of year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#month GoogleStorageTransferJob#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.property.year"></a>

```go
Year *f64
```

- *Type:* *f64

Year of date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#year GoogleStorageTransferJob#year}

---

### GoogleStorageTransferJobScheduleScheduleStartDate <a name="GoogleStorageTransferJobScheduleScheduleStartDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobScheduleScheduleStartDate {
	Day: *f64,
	Month: *f64,
	Year: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.property.day">Day</a></code> | <code>*f64</code> | Day of month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.property.month">Month</a></code> | <code>*f64</code> | Month of year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.property.year">Year</a></code> | <code>*f64</code> | Year of date. Must be from 1 to 9999. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

Day of month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#day GoogleStorageTransferJob#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.property.month"></a>

```go
Month *f64
```

- *Type:* *f64

Month of year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#month GoogleStorageTransferJob#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.property.year"></a>

```go
Year *f64
```

- *Type:* *f64

Year of date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#year GoogleStorageTransferJob#year}

---

### GoogleStorageTransferJobScheduleStartTimeOfDay <a name="GoogleStorageTransferJobScheduleStartTimeOfDay" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobScheduleStartTimeOfDay {
	Hours: *f64,
	Minutes: *f64,
	Nanos: *f64,
	Seconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.hours">Hours</a></code> | <code>*f64</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.minutes">Minutes</a></code> | <code>*f64</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.nanos">Nanos</a></code> | <code>*f64</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.seconds">Seconds</a></code> | <code>*f64</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#hours GoogleStorageTransferJob#hours}

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.minutes"></a>

```go
Minutes *f64
```

- *Type:* *f64

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#minutes GoogleStorageTransferJob#minutes}

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#nanos GoogleStorageTransferJob#nanos}

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#seconds GoogleStorageTransferJob#seconds}

---

### GoogleStorageTransferJobTransferSpec <a name="GoogleStorageTransferJobTransferSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobTransferSpec {
	AwsS3DataSource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource,
	AzureBlobStorageDataSource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource,
	GcsDataSink: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink,
	GcsDataSource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource,
	HdfsDataSource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource,
	HttpDataSource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource,
	ObjectConditions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions,
	PosixDataSink: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink,
	PosixDataSource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource,
	SinkAgentPoolName: *string,
	SourceAgentPoolName: *string,
	TransferOptions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.awsS3DataSource">AwsS3DataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a></code> | aws_s3_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.azureBlobStorageDataSource">AzureBlobStorageDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | azure_blob_storage_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.gcsDataSink">GcsDataSink</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a></code> | gcs_data_sink block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.gcsDataSource">GcsDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a></code> | gcs_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.hdfsDataSource">HdfsDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a></code> | hdfs_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.httpDataSource">HttpDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a></code> | http_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.objectConditions">ObjectConditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a></code> | object_conditions block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.posixDataSink">PosixDataSink</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a></code> | posix_data_sink block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.posixDataSource">PosixDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a></code> | posix_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.sinkAgentPoolName">SinkAgentPoolName</a></code> | <code>*string</code> | Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.sourceAgentPoolName">SourceAgentPoolName</a></code> | <code>*string</code> | Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.transferOptions">TransferOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a></code> | transfer_options block. |

---

##### `AwsS3DataSource`<sup>Optional</sup> <a name="AwsS3DataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.awsS3DataSource"></a>

```go
AwsS3DataSource GoogleStorageTransferJobTransferSpecAwsS3DataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a>

aws_s3_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#aws_s3_data_source GoogleStorageTransferJob#aws_s3_data_source}

---

##### `AzureBlobStorageDataSource`<sup>Optional</sup> <a name="AzureBlobStorageDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.azureBlobStorageDataSource"></a>

```go
AzureBlobStorageDataSource GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

azure_blob_storage_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#azure_blob_storage_data_source GoogleStorageTransferJob#azure_blob_storage_data_source}

---

##### `GcsDataSink`<sup>Optional</sup> <a name="GcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.gcsDataSink"></a>

```go
GcsDataSink GoogleStorageTransferJobTransferSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a>

gcs_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#gcs_data_sink GoogleStorageTransferJob#gcs_data_sink}

---

##### `GcsDataSource`<sup>Optional</sup> <a name="GcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.gcsDataSource"></a>

```go
GcsDataSource GoogleStorageTransferJobTransferSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a>

gcs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#gcs_data_source GoogleStorageTransferJob#gcs_data_source}

---

##### `HdfsDataSource`<sup>Optional</sup> <a name="HdfsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.hdfsDataSource"></a>

```go
HdfsDataSource GoogleStorageTransferJobTransferSpecHdfsDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a>

hdfs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#hdfs_data_source GoogleStorageTransferJob#hdfs_data_source}

---

##### `HttpDataSource`<sup>Optional</sup> <a name="HttpDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.httpDataSource"></a>

```go
HttpDataSource GoogleStorageTransferJobTransferSpecHttpDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a>

http_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#http_data_source GoogleStorageTransferJob#http_data_source}

---

##### `ObjectConditions`<sup>Optional</sup> <a name="ObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.objectConditions"></a>

```go
ObjectConditions GoogleStorageTransferJobTransferSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a>

object_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#object_conditions GoogleStorageTransferJob#object_conditions}

---

##### `PosixDataSink`<sup>Optional</sup> <a name="PosixDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.posixDataSink"></a>

```go
PosixDataSink GoogleStorageTransferJobTransferSpecPosixDataSink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a>

posix_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#posix_data_sink GoogleStorageTransferJob#posix_data_sink}

---

##### `PosixDataSource`<sup>Optional</sup> <a name="PosixDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.posixDataSource"></a>

```go
PosixDataSource GoogleStorageTransferJobTransferSpecPosixDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a>

posix_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#posix_data_source GoogleStorageTransferJob#posix_data_source}

---

##### `SinkAgentPoolName`<sup>Optional</sup> <a name="SinkAgentPoolName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.sinkAgentPoolName"></a>

```go
SinkAgentPoolName *string
```

- *Type:* *string

Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#sink_agent_pool_name GoogleStorageTransferJob#sink_agent_pool_name}

---

##### `SourceAgentPoolName`<sup>Optional</sup> <a name="SourceAgentPoolName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.sourceAgentPoolName"></a>

```go
SourceAgentPoolName *string
```

- *Type:* *string

Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#source_agent_pool_name GoogleStorageTransferJob#source_agent_pool_name}

---

##### `TransferOptions`<sup>Optional</sup> <a name="TransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.transferOptions"></a>

```go
TransferOptions GoogleStorageTransferJobTransferSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a>

transfer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#transfer_options GoogleStorageTransferJob#transfer_options}

---

### GoogleStorageTransferJobTransferSpecAwsS3DataSource <a name="GoogleStorageTransferJobTransferSpecAwsS3DataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobTransferSpecAwsS3DataSource {
	BucketName: *string,
	AwsAccessKey: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey,
	Path: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.bucketName">BucketName</a></code> | <code>*string</code> | S3 Bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.awsAccessKey">AwsAccessKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | aws_access_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.path">Path</a></code> | <code>*string</code> | S3 Bucket path in bucket to transfer. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

S3 Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

##### `AwsAccessKey`<sup>Optional</sup> <a name="AwsAccessKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.awsAccessKey"></a>

```go
AwsAccessKey GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

aws_access_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#aws_access_key GoogleStorageTransferJob#aws_access_key}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.path"></a>

```go
Path *string
```

- *Type:* *string

S3 Bucket path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'.

For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a 'AssumeRoleWithWebIdentity' call for the provided role using the [GoogleServiceAccount][] for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#role_arn GoogleStorageTransferJob#role_arn}

---

### GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey <a name="GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey {
	AccessKeyId: *string,
	SecretAccessKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | AWS Key ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | AWS Secret Access Key. |

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.accessKeyId"></a>

```go
AccessKeyId *string
```

- *Type:* *string

AWS Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#access_key_id GoogleStorageTransferJob#access_key_id}

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.secretAccessKey"></a>

```go
SecretAccessKey *string
```

- *Type:* *string

AWS Secret Access Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#secret_access_key GoogleStorageTransferJob#secret_access_key}

---

### GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource <a name="GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource {
	Container: *string,
	StorageAccount: *string,
	AzureCredentials: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials,
	CredentialsSecret: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.container">Container</a></code> | <code>*string</code> | The container to transfer from the Azure Storage account. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.storageAccount">StorageAccount</a></code> | <code>*string</code> | The name of the Azure Storage account. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.azureCredentials">AzureCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | azure_credentials block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.credentialsSecret">CredentialsSecret</a></code> | <code>*string</code> | The Resource name of a secret in Secret Manager containing SAS Credentials in JSON form. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.path">Path</a></code> | <code>*string</code> | Root path to transfer objects. |

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.container"></a>

```go
Container *string
```

- *Type:* *string

The container to transfer from the Azure Storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#container GoogleStorageTransferJob#container}

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.storageAccount"></a>

```go
StorageAccount *string
```

- *Type:* *string

The name of the Azure Storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#storage_account GoogleStorageTransferJob#storage_account}

---

##### `AzureCredentials`<sup>Optional</sup> <a name="AzureCredentials" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.azureCredentials"></a>

```go
AzureCredentials GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

azure_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#azure_credentials GoogleStorageTransferJob#azure_credentials}

---

##### `CredentialsSecret`<sup>Optional</sup> <a name="CredentialsSecret" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.credentialsSecret"></a>

```go
CredentialsSecret *string
```

- *Type:* *string

The Resource name of a secret in Secret Manager containing SAS Credentials in JSON form.

Service Agent must have permissions to access secret. If credentials_secret is specified, do not specify azure_credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#credentials_secret GoogleStorageTransferJob#credentials_secret}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.path"></a>

```go
Path *string
```

- *Type:* *string

Root path to transfer objects.

Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

### GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials <a name="GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials {
	SasToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.property.sasToken">SasToken</a></code> | <code>*string</code> | Azure shared access signature. |

---

##### `SasToken`<sup>Required</sup> <a name="SasToken" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.property.sasToken"></a>

```go
SasToken *string
```

- *Type:* *string

Azure shared access signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#sas_token GoogleStorageTransferJob#sas_token}

---

### GoogleStorageTransferJobTransferSpecGcsDataSink <a name="GoogleStorageTransferJobTransferSpecGcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobTransferSpecGcsDataSink {
	BucketName: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink.property.bucketName">BucketName</a></code> | <code>*string</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink.property.path">Path</a></code> | <code>*string</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink.property.path"></a>

```go
Path *string
```

- *Type:* *string

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

### GoogleStorageTransferJobTransferSpecGcsDataSource <a name="GoogleStorageTransferJobTransferSpecGcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobTransferSpecGcsDataSource {
	BucketName: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource.property.bucketName">BucketName</a></code> | <code>*string</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource.property.path">Path</a></code> | <code>*string</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource.property.path"></a>

```go
Path *string
```

- *Type:* *string

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

### GoogleStorageTransferJobTransferSpecHdfsDataSource <a name="GoogleStorageTransferJobTransferSpecHdfsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobTransferSpecHdfsDataSource {
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource.property.path">Path</a></code> | <code>*string</code> | Directory path to the filesystem. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource.property.path"></a>

```go
Path *string
```

- *Type:* *string

Directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

### GoogleStorageTransferJobTransferSpecHttpDataSource <a name="GoogleStorageTransferJobTransferSpecHttpDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobTransferSpecHttpDataSource {
	ListUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource.property.listUrl">ListUrl</a></code> | <code>*string</code> | The URL that points to the file that stores the object list entries. |

---

##### `ListUrl`<sup>Required</sup> <a name="ListUrl" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource.property.listUrl"></a>

```go
ListUrl *string
```

- *Type:* *string

The URL that points to the file that stores the object list entries.

This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#list_url GoogleStorageTransferJob#list_url}

---

### GoogleStorageTransferJobTransferSpecObjectConditions <a name="GoogleStorageTransferJobTransferSpecObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobTransferSpecObjectConditions {
	ExcludePrefixes: *[]*string,
	IncludePrefixes: *[]*string,
	LastModifiedBefore: *string,
	LastModifiedSince: *string,
	MaxTimeElapsedSinceLastModification: *string,
	MinTimeElapsedSinceLastModification: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.excludePrefixes">ExcludePrefixes</a></code> | <code>*[]*string</code> | exclude_prefixes must follow the requirements described for include_prefixes. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.includePrefixes">IncludePrefixes</a></code> | <code>*[]*string</code> | If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.lastModifiedBefore">LastModifiedBefore</a></code> | <code>*string</code> | If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.lastModifiedSince">LastModifiedSince</a></code> | <code>*string</code> | If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.maxTimeElapsedSinceLastModification">MaxTimeElapsedSinceLastModification</a></code> | <code>*string</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.minTimeElapsedSinceLastModification">MinTimeElapsedSinceLastModification</a></code> | <code>*string</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |

---

##### `ExcludePrefixes`<sup>Optional</sup> <a name="ExcludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.excludePrefixes"></a>

```go
ExcludePrefixes *[]*string
```

- *Type:* *[]*string

exclude_prefixes must follow the requirements described for include_prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#exclude_prefixes GoogleStorageTransferJob#exclude_prefixes}

---

##### `IncludePrefixes`<sup>Optional</sup> <a name="IncludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.includePrefixes"></a>

```go
IncludePrefixes *[]*string
```

- *Type:* *[]*string

If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes.

If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#include_prefixes GoogleStorageTransferJob#include_prefixes}

---

##### `LastModifiedBefore`<sup>Optional</sup> <a name="LastModifiedBefore" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.lastModifiedBefore"></a>

```go
LastModifiedBefore *string
```

- *Type:* *string

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#last_modified_before GoogleStorageTransferJob#last_modified_before}

---

##### `LastModifiedSince`<sup>Optional</sup> <a name="LastModifiedSince" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.lastModifiedSince"></a>

```go
LastModifiedSince *string
```

- *Type:* *string

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#last_modified_since GoogleStorageTransferJob#last_modified_since}

---

##### `MaxTimeElapsedSinceLastModification`<sup>Optional</sup> <a name="MaxTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.maxTimeElapsedSinceLastModification"></a>

```go
MaxTimeElapsedSinceLastModification *string
```

- *Type:* *string

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#max_time_elapsed_since_last_modification GoogleStorageTransferJob#max_time_elapsed_since_last_modification}

---

##### `MinTimeElapsedSinceLastModification`<sup>Optional</sup> <a name="MinTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.minTimeElapsedSinceLastModification"></a>

```go
MinTimeElapsedSinceLastModification *string
```

- *Type:* *string

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#min_time_elapsed_since_last_modification GoogleStorageTransferJob#min_time_elapsed_since_last_modification}

---

### GoogleStorageTransferJobTransferSpecPosixDataSink <a name="GoogleStorageTransferJobTransferSpecPosixDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobTransferSpecPosixDataSink {
	RootDirectory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink.property.rootDirectory">RootDirectory</a></code> | <code>*string</code> | Root directory path to the filesystem. |

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink.property.rootDirectory"></a>

```go
RootDirectory *string
```

- *Type:* *string

Root directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#root_directory GoogleStorageTransferJob#root_directory}

---

### GoogleStorageTransferJobTransferSpecPosixDataSource <a name="GoogleStorageTransferJobTransferSpecPosixDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobTransferSpecPosixDataSource {
	RootDirectory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource.property.rootDirectory">RootDirectory</a></code> | <code>*string</code> | Root directory path to the filesystem. |

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource.property.rootDirectory"></a>

```go
RootDirectory *string
```

- *Type:* *string

Root directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#root_directory GoogleStorageTransferJob#root_directory}

---

### GoogleStorageTransferJobTransferSpecTransferOptions <a name="GoogleStorageTransferJobTransferSpecTransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

&googlestoragetransferjob.GoogleStorageTransferJobTransferSpecTransferOptions {
	DeleteObjectsFromSourceAfterTransfer: interface{},
	DeleteObjectsUniqueInSink: interface{},
	OverwriteObjectsAlreadyExistingInSink: interface{},
	OverwriteWhen: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer">DeleteObjectsFromSourceAfterTransfer</a></code> | <code>interface{}</code> | Whether objects should be deleted from the source after they are transferred to the sink. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.deleteObjectsUniqueInSink">DeleteObjectsUniqueInSink</a></code> | <code>interface{}</code> | Whether objects that exist only in the sink should be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink">OverwriteObjectsAlreadyExistingInSink</a></code> | <code>interface{}</code> | Whether overwriting objects that already exist in the sink is allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.overwriteWhen">OverwriteWhen</a></code> | <code>*string</code> | When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink. |

---

##### `DeleteObjectsFromSourceAfterTransfer`<sup>Optional</sup> <a name="DeleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer"></a>

```go
DeleteObjectsFromSourceAfterTransfer interface{}
```

- *Type:* interface{}

Whether objects should be deleted from the source after they are transferred to the sink.

Note that this option and delete_objects_unique_in_sink are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#delete_objects_from_source_after_transfer GoogleStorageTransferJob#delete_objects_from_source_after_transfer}

---

##### `DeleteObjectsUniqueInSink`<sup>Optional</sup> <a name="DeleteObjectsUniqueInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.deleteObjectsUniqueInSink"></a>

```go
DeleteObjectsUniqueInSink interface{}
```

- *Type:* interface{}

Whether objects that exist only in the sink should be deleted.

Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#delete_objects_unique_in_sink GoogleStorageTransferJob#delete_objects_unique_in_sink}

---

##### `OverwriteObjectsAlreadyExistingInSink`<sup>Optional</sup> <a name="OverwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink"></a>

```go
OverwriteObjectsAlreadyExistingInSink interface{}
```

- *Type:* interface{}

Whether overwriting objects that already exist in the sink is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#overwrite_objects_already_existing_in_sink GoogleStorageTransferJob#overwrite_objects_already_existing_in_sink}

---

##### `OverwriteWhen`<sup>Optional</sup> <a name="OverwriteWhen" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.overwriteWhen"></a>

```go
OverwriteWhen *string
```

- *Type:* *string

When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#overwrite_when GoogleStorageTransferJob#overwrite_when}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageTransferJobEventStreamOutputReference <a name="GoogleStorageTransferJobEventStreamOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobEventStreamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobEventStreamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resetEventStreamExpirationTime">ResetEventStreamExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resetEventStreamStartTime">ResetEventStreamStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventStreamExpirationTime` <a name="ResetEventStreamExpirationTime" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resetEventStreamExpirationTime"></a>

```go
func ResetEventStreamExpirationTime()
```

##### `ResetEventStreamStartTime` <a name="ResetEventStreamStartTime" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resetEventStreamStartTime"></a>

```go
func ResetEventStreamStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTimeInput">EventStreamExpirationTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamStartTimeInput">EventStreamStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTime">EventStreamExpirationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamStartTime">EventStreamStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventStreamExpirationTimeInput`<sup>Optional</sup> <a name="EventStreamExpirationTimeInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTimeInput"></a>

```go
func EventStreamExpirationTimeInput() *string
```

- *Type:* *string

---

##### `EventStreamStartTimeInput`<sup>Optional</sup> <a name="EventStreamStartTimeInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamStartTimeInput"></a>

```go
func EventStreamStartTimeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `EventStreamExpirationTime`<sup>Required</sup> <a name="EventStreamExpirationTime" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTime"></a>

```go
func EventStreamExpirationTime() *string
```

- *Type:* *string

---

##### `EventStreamStartTime`<sup>Required</sup> <a name="EventStreamStartTime" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamStartTime"></a>

```go
func EventStreamStartTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobEventStream
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a>

---


### GoogleStorageTransferJobNotificationConfigOutputReference <a name="GoogleStorageTransferJobNotificationConfigOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobNotificationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobNotificationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.resetEventTypes">ResetEventTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventTypes` <a name="ResetEventTypes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.resetEventTypes"></a>

```go
func ResetEventTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.eventTypesInput">EventTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.payloadFormatInput">PayloadFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.eventTypes">EventTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.payloadFormat">PayloadFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventTypesInput`<sup>Optional</sup> <a name="EventTypesInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.eventTypesInput"></a>

```go
func EventTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PayloadFormatInput`<sup>Optional</sup> <a name="PayloadFormatInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.payloadFormatInput"></a>

```go
func PayloadFormatInput() *string
```

- *Type:* *string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```go
func PubsubTopicInput() *string
```

- *Type:* *string

---

##### `EventTypes`<sup>Required</sup> <a name="EventTypes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.eventTypes"></a>

```go
func EventTypes() *[]*string
```

- *Type:* *[]*string

---

##### `PayloadFormat`<sup>Required</sup> <a name="PayloadFormat" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.payloadFormat"></a>

```go
func PayloadFormat() *string
```

- *Type:* *string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.pubsubTopic"></a>

```go
func PubsubTopic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a>

---


### GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference <a name="GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobReplicationSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a>

---


### GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference <a name="GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobReplicationSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a>

---


### GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference <a name="GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetExcludePrefixes">ResetExcludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetIncludePrefixes">ResetIncludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedBefore">ResetLastModifiedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedSince">ResetLastModifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification">ResetMaxTimeElapsedSinceLastModification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification">ResetMinTimeElapsedSinceLastModification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludePrefixes` <a name="ResetExcludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetExcludePrefixes"></a>

```go
func ResetExcludePrefixes()
```

##### `ResetIncludePrefixes` <a name="ResetIncludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetIncludePrefixes"></a>

```go
func ResetIncludePrefixes()
```

##### `ResetLastModifiedBefore` <a name="ResetLastModifiedBefore" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedBefore"></a>

```go
func ResetLastModifiedBefore()
```

##### `ResetLastModifiedSince` <a name="ResetLastModifiedSince" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedSince"></a>

```go
func ResetLastModifiedSince()
```

##### `ResetMaxTimeElapsedSinceLastModification` <a name="ResetMaxTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification"></a>

```go
func ResetMaxTimeElapsedSinceLastModification()
```

##### `ResetMinTimeElapsedSinceLastModification` <a name="ResetMinTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification"></a>

```go
func ResetMinTimeElapsedSinceLastModification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixesInput">ExcludePrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixesInput">IncludePrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput">LastModifiedBeforeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSinceInput">LastModifiedSinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput">MaxTimeElapsedSinceLastModificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput">MinTimeElapsedSinceLastModificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixes">ExcludePrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixes">IncludePrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBefore">LastModifiedBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSince">LastModifiedSince</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification">MaxTimeElapsedSinceLastModification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification">MinTimeElapsedSinceLastModification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludePrefixesInput`<sup>Optional</sup> <a name="ExcludePrefixesInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixesInput"></a>

```go
func ExcludePrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludePrefixesInput`<sup>Optional</sup> <a name="IncludePrefixesInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixesInput"></a>

```go
func IncludePrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LastModifiedBeforeInput`<sup>Optional</sup> <a name="LastModifiedBeforeInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput"></a>

```go
func LastModifiedBeforeInput() *string
```

- *Type:* *string

---

##### `LastModifiedSinceInput`<sup>Optional</sup> <a name="LastModifiedSinceInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSinceInput"></a>

```go
func LastModifiedSinceInput() *string
```

- *Type:* *string

---

##### `MaxTimeElapsedSinceLastModificationInput`<sup>Optional</sup> <a name="MaxTimeElapsedSinceLastModificationInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput"></a>

```go
func MaxTimeElapsedSinceLastModificationInput() *string
```

- *Type:* *string

---

##### `MinTimeElapsedSinceLastModificationInput`<sup>Optional</sup> <a name="MinTimeElapsedSinceLastModificationInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput"></a>

```go
func MinTimeElapsedSinceLastModificationInput() *string
```

- *Type:* *string

---

##### `ExcludePrefixes`<sup>Required</sup> <a name="ExcludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixes"></a>

```go
func ExcludePrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `IncludePrefixes`<sup>Required</sup> <a name="IncludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixes"></a>

```go
func IncludePrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `LastModifiedBefore`<sup>Required</sup> <a name="LastModifiedBefore" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBefore"></a>

```go
func LastModifiedBefore() *string
```

- *Type:* *string

---

##### `LastModifiedSince`<sup>Required</sup> <a name="LastModifiedSince" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSince"></a>

```go
func LastModifiedSince() *string
```

- *Type:* *string

---

##### `MaxTimeElapsedSinceLastModification`<sup>Required</sup> <a name="MaxTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification"></a>

```go
func MaxTimeElapsedSinceLastModification() *string
```

- *Type:* *string

---

##### `MinTimeElapsedSinceLastModification`<sup>Required</sup> <a name="MinTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification"></a>

```go
func MinTimeElapsedSinceLastModification() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobReplicationSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a>

---


### GoogleStorageTransferJobReplicationSpecOutputReference <a name="GoogleStorageTransferJobReplicationSpecOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobReplicationSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobReplicationSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSink">PutGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSource">PutGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putObjectConditions">PutObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putTransferOptions">PutTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetGcsDataSink">ResetGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetGcsDataSource">ResetGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetObjectConditions">ResetObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetTransferOptions">ResetTransferOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcsDataSink` <a name="PutGcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSink"></a>

```go
func PutGcsDataSink(value GoogleStorageTransferJobReplicationSpecGcsDataSink)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a>

---

##### `PutGcsDataSource` <a name="PutGcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSource"></a>

```go
func PutGcsDataSource(value GoogleStorageTransferJobReplicationSpecGcsDataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a>

---

##### `PutObjectConditions` <a name="PutObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putObjectConditions"></a>

```go
func PutObjectConditions(value GoogleStorageTransferJobReplicationSpecObjectConditions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putObjectConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a>

---

##### `PutTransferOptions` <a name="PutTransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putTransferOptions"></a>

```go
func PutTransferOptions(value GoogleStorageTransferJobReplicationSpecTransferOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putTransferOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a>

---

##### `ResetGcsDataSink` <a name="ResetGcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetGcsDataSink"></a>

```go
func ResetGcsDataSink()
```

##### `ResetGcsDataSource` <a name="ResetGcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetGcsDataSource"></a>

```go
func ResetGcsDataSource()
```

##### `ResetObjectConditions` <a name="ResetObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetObjectConditions"></a>

```go
func ResetObjectConditions()
```

##### `ResetTransferOptions` <a name="ResetTransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetTransferOptions"></a>

```go
func ResetTransferOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSink">GcsDataSink</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference">GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSource">GcsDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference">GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.objectConditions">ObjectConditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference">GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.transferOptions">TransferOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference">GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSinkInput">GcsDataSinkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSourceInput">GcsDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.objectConditionsInput">ObjectConditionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.transferOptionsInput">TransferOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcsDataSink`<sup>Required</sup> <a name="GcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSink"></a>

```go
func GcsDataSink() GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference">GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference</a>

---

##### `GcsDataSource`<sup>Required</sup> <a name="GcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSource"></a>

```go
func GcsDataSource() GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference">GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference</a>

---

##### `ObjectConditions`<sup>Required</sup> <a name="ObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.objectConditions"></a>

```go
func ObjectConditions() GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference">GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference</a>

---

##### `TransferOptions`<sup>Required</sup> <a name="TransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.transferOptions"></a>

```go
func TransferOptions() GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference">GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference</a>

---

##### `GcsDataSinkInput`<sup>Optional</sup> <a name="GcsDataSinkInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSinkInput"></a>

```go
func GcsDataSinkInput() GoogleStorageTransferJobReplicationSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a>

---

##### `GcsDataSourceInput`<sup>Optional</sup> <a name="GcsDataSourceInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSourceInput"></a>

```go
func GcsDataSourceInput() GoogleStorageTransferJobReplicationSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a>

---

##### `ObjectConditionsInput`<sup>Optional</sup> <a name="ObjectConditionsInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.objectConditionsInput"></a>

```go
func ObjectConditionsInput() GoogleStorageTransferJobReplicationSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a>

---

##### `TransferOptionsInput`<sup>Optional</sup> <a name="TransferOptionsInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.transferOptionsInput"></a>

```go
func TransferOptionsInput() GoogleStorageTransferJobReplicationSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobReplicationSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a>

---


### GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference <a name="GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer">ResetDeleteObjectsFromSourceAfterTransfer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink">ResetDeleteObjectsUniqueInSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink">ResetOverwriteObjectsAlreadyExistingInSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteWhen">ResetOverwriteWhen</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteObjectsFromSourceAfterTransfer` <a name="ResetDeleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer"></a>

```go
func ResetDeleteObjectsFromSourceAfterTransfer()
```

##### `ResetDeleteObjectsUniqueInSink` <a name="ResetDeleteObjectsUniqueInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink"></a>

```go
func ResetDeleteObjectsUniqueInSink()
```

##### `ResetOverwriteObjectsAlreadyExistingInSink` <a name="ResetOverwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink"></a>

```go
func ResetOverwriteObjectsAlreadyExistingInSink()
```

##### `ResetOverwriteWhen` <a name="ResetOverwriteWhen" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteWhen"></a>

```go
func ResetOverwriteWhen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput">DeleteObjectsFromSourceAfterTransferInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput">DeleteObjectsUniqueInSinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput">OverwriteObjectsAlreadyExistingInSinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhenInput">OverwriteWhenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer">DeleteObjectsFromSourceAfterTransfer</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink">DeleteObjectsUniqueInSink</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink">OverwriteObjectsAlreadyExistingInSink</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhen">OverwriteWhen</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteObjectsFromSourceAfterTransferInput`<sup>Optional</sup> <a name="DeleteObjectsFromSourceAfterTransferInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput"></a>

```go
func DeleteObjectsFromSourceAfterTransferInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteObjectsUniqueInSinkInput`<sup>Optional</sup> <a name="DeleteObjectsUniqueInSinkInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput"></a>

```go
func DeleteObjectsUniqueInSinkInput() interface{}
```

- *Type:* interface{}

---

##### `OverwriteObjectsAlreadyExistingInSinkInput`<sup>Optional</sup> <a name="OverwriteObjectsAlreadyExistingInSinkInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput"></a>

```go
func OverwriteObjectsAlreadyExistingInSinkInput() interface{}
```

- *Type:* interface{}

---

##### `OverwriteWhenInput`<sup>Optional</sup> <a name="OverwriteWhenInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhenInput"></a>

```go
func OverwriteWhenInput() *string
```

- *Type:* *string

---

##### `DeleteObjectsFromSourceAfterTransfer`<sup>Required</sup> <a name="DeleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer"></a>

```go
func DeleteObjectsFromSourceAfterTransfer() interface{}
```

- *Type:* interface{}

---

##### `DeleteObjectsUniqueInSink`<sup>Required</sup> <a name="DeleteObjectsUniqueInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink"></a>

```go
func DeleteObjectsUniqueInSink() interface{}
```

- *Type:* interface{}

---

##### `OverwriteObjectsAlreadyExistingInSink`<sup>Required</sup> <a name="OverwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink"></a>

```go
func OverwriteObjectsAlreadyExistingInSink() interface{}
```

- *Type:* interface{}

---

##### `OverwriteWhen`<sup>Required</sup> <a name="OverwriteWhen" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhen"></a>

```go
func OverwriteWhen() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobReplicationSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a>

---


### GoogleStorageTransferJobScheduleOutputReference <a name="GoogleStorageTransferJobScheduleOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleEndDate">PutScheduleEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleStartDate">PutScheduleStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putStartTimeOfDay">PutStartTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resetRepeatInterval">ResetRepeatInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resetScheduleEndDate">ResetScheduleEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resetStartTimeOfDay">ResetStartTimeOfDay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScheduleEndDate` <a name="PutScheduleEndDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleEndDate"></a>

```go
func PutScheduleEndDate(value GoogleStorageTransferJobScheduleScheduleEndDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a>

---

##### `PutScheduleStartDate` <a name="PutScheduleStartDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleStartDate"></a>

```go
func PutScheduleStartDate(value GoogleStorageTransferJobScheduleScheduleStartDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a>

---

##### `PutStartTimeOfDay` <a name="PutStartTimeOfDay" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putStartTimeOfDay"></a>

```go
func PutStartTimeOfDay(value GoogleStorageTransferJobScheduleStartTimeOfDay)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putStartTimeOfDay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a>

---

##### `ResetRepeatInterval` <a name="ResetRepeatInterval" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resetRepeatInterval"></a>

```go
func ResetRepeatInterval()
```

##### `ResetScheduleEndDate` <a name="ResetScheduleEndDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resetScheduleEndDate"></a>

```go
func ResetScheduleEndDate()
```

##### `ResetStartTimeOfDay` <a name="ResetStartTimeOfDay" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resetStartTimeOfDay"></a>

```go
func ResetStartTimeOfDay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleEndDate">ScheduleEndDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference">GoogleStorageTransferJobScheduleScheduleEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleStartDate">ScheduleStartDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference">GoogleStorageTransferJobScheduleScheduleStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.startTimeOfDay">StartTimeOfDay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference">GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.repeatIntervalInput">RepeatIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleEndDateInput">ScheduleEndDateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleStartDateInput">ScheduleStartDateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.startTimeOfDayInput">StartTimeOfDayInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.repeatInterval">RepeatInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScheduleEndDate`<sup>Required</sup> <a name="ScheduleEndDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleEndDate"></a>

```go
func ScheduleEndDate() GoogleStorageTransferJobScheduleScheduleEndDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference">GoogleStorageTransferJobScheduleScheduleEndDateOutputReference</a>

---

##### `ScheduleStartDate`<sup>Required</sup> <a name="ScheduleStartDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleStartDate"></a>

```go
func ScheduleStartDate() GoogleStorageTransferJobScheduleScheduleStartDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference">GoogleStorageTransferJobScheduleScheduleStartDateOutputReference</a>

---

##### `StartTimeOfDay`<sup>Required</sup> <a name="StartTimeOfDay" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.startTimeOfDay"></a>

```go
func StartTimeOfDay() GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference">GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference</a>

---

##### `RepeatIntervalInput`<sup>Optional</sup> <a name="RepeatIntervalInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.repeatIntervalInput"></a>

```go
func RepeatIntervalInput() *string
```

- *Type:* *string

---

##### `ScheduleEndDateInput`<sup>Optional</sup> <a name="ScheduleEndDateInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleEndDateInput"></a>

```go
func ScheduleEndDateInput() GoogleStorageTransferJobScheduleScheduleEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a>

---

##### `ScheduleStartDateInput`<sup>Optional</sup> <a name="ScheduleStartDateInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleStartDateInput"></a>

```go
func ScheduleStartDateInput() GoogleStorageTransferJobScheduleScheduleStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a>

---

##### `StartTimeOfDayInput`<sup>Optional</sup> <a name="StartTimeOfDayInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.startTimeOfDayInput"></a>

```go
func StartTimeOfDayInput() GoogleStorageTransferJobScheduleStartTimeOfDay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a>

---

##### `RepeatInterval`<sup>Required</sup> <a name="RepeatInterval" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.repeatInterval"></a>

```go
func RepeatInterval() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a>

---


### GoogleStorageTransferJobScheduleScheduleEndDateOutputReference <a name="GoogleStorageTransferJobScheduleScheduleEndDateOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobScheduleScheduleEndDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobScheduleScheduleEndDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.monthInput">MonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.yearInput">YearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.monthInput"></a>

```go
func MonthInput() *f64
```

- *Type:* *f64

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.yearInput"></a>

```go
func YearInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobScheduleScheduleEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a>

---


### GoogleStorageTransferJobScheduleScheduleStartDateOutputReference <a name="GoogleStorageTransferJobScheduleScheduleStartDateOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobScheduleScheduleStartDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobScheduleScheduleStartDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.monthInput">MonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.yearInput">YearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.monthInput"></a>

```go
func MonthInput() *f64
```

- *Type:* *f64

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.yearInput"></a>

```go
func YearInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobScheduleScheduleStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a>

---


### GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference <a name="GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobScheduleStartTimeOfDayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *f64
```

- *Type:* *f64

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobScheduleStartTimeOfDay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a>

---


### GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference <a name="GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyIdInput"></a>

```go
func AccessKeyIdInput() *string
```

- *Type:* *string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKeyInput"></a>

```go
func SecretAccessKeyInput() *string
```

- *Type:* *string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyId"></a>

```go
func AccessKeyId() *string
```

- *Type:* *string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKey"></a>

```go
func SecretAccessKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---


### GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference <a name="GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey">PutAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetAwsAccessKey">ResetAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsAccessKey` <a name="PutAwsAccessKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey"></a>

```go
func PutAwsAccessKey(value GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---

##### `ResetAwsAccessKey` <a name="ResetAwsAccessKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetAwsAccessKey"></a>

```go
func ResetAwsAccessKey()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKey">AwsAccessKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKeyInput">AwsAccessKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsAccessKey`<sup>Required</sup> <a name="AwsAccessKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKey"></a>

```go
func AwsAccessKey() GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference</a>

---

##### `AwsAccessKeyInput`<sup>Optional</sup> <a name="AwsAccessKeyInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKeyInput"></a>

```go
func AwsAccessKeyInput() GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobTransferSpecAwsS3DataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a>

---


### GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference <a name="GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasTokenInput">SasTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasToken">SasToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SasTokenInput`<sup>Optional</sup> <a name="SasTokenInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasTokenInput"></a>

```go
func SasTokenInput() *string
```

- *Type:* *string

---

##### `SasToken`<sup>Required</sup> <a name="SasToken" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasToken"></a>

```go
func SasToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---


### GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference <a name="GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials">PutAzureCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetAzureCredentials">ResetAzureCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetCredentialsSecret">ResetCredentialsSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzureCredentials` <a name="PutAzureCredentials" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials"></a>

```go
func PutAzureCredentials(value GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---

##### `ResetAzureCredentials` <a name="ResetAzureCredentials" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetAzureCredentials"></a>

```go
func ResetAzureCredentials()
```

##### `ResetCredentialsSecret` <a name="ResetCredentialsSecret" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetCredentialsSecret"></a>

```go
func ResetCredentialsSecret()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentials">AzureCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentialsInput">AzureCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.containerInput">ContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.credentialsSecretInput">CredentialsSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccountInput">StorageAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.container">Container</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.credentialsSecret">CredentialsSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccount">StorageAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureCredentials`<sup>Required</sup> <a name="AzureCredentials" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentials"></a>

```go
func AzureCredentials() GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference</a>

---

##### `AzureCredentialsInput`<sup>Optional</sup> <a name="AzureCredentialsInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentialsInput"></a>

```go
func AzureCredentialsInput() GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.containerInput"></a>

```go
func ContainerInput() *string
```

- *Type:* *string

---

##### `CredentialsSecretInput`<sup>Optional</sup> <a name="CredentialsSecretInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.credentialsSecretInput"></a>

```go
func CredentialsSecretInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccountInput"></a>

```go
func StorageAccountInput() *string
```

- *Type:* *string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.container"></a>

```go
func Container() *string
```

- *Type:* *string

---

##### `CredentialsSecret`<sup>Required</sup> <a name="CredentialsSecret" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.credentialsSecret"></a>

```go
func CredentialsSecret() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccount"></a>

```go
func StorageAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---


### GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference <a name="GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobTransferSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a>

---


### GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference <a name="GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobTransferSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a>

---


### GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference <a name="GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobTransferSpecHdfsDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a>

---


### GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference <a name="GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrlInput">ListUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrl">ListUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ListUrlInput`<sup>Optional</sup> <a name="ListUrlInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrlInput"></a>

```go
func ListUrlInput() *string
```

- *Type:* *string

---

##### `ListUrl`<sup>Required</sup> <a name="ListUrl" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrl"></a>

```go
func ListUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobTransferSpecHttpDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a>

---


### GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference <a name="GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobTransferSpecObjectConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetExcludePrefixes">ResetExcludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetIncludePrefixes">ResetIncludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedBefore">ResetLastModifiedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedSince">ResetLastModifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification">ResetMaxTimeElapsedSinceLastModification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification">ResetMinTimeElapsedSinceLastModification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludePrefixes` <a name="ResetExcludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetExcludePrefixes"></a>

```go
func ResetExcludePrefixes()
```

##### `ResetIncludePrefixes` <a name="ResetIncludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetIncludePrefixes"></a>

```go
func ResetIncludePrefixes()
```

##### `ResetLastModifiedBefore` <a name="ResetLastModifiedBefore" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedBefore"></a>

```go
func ResetLastModifiedBefore()
```

##### `ResetLastModifiedSince` <a name="ResetLastModifiedSince" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedSince"></a>

```go
func ResetLastModifiedSince()
```

##### `ResetMaxTimeElapsedSinceLastModification` <a name="ResetMaxTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification"></a>

```go
func ResetMaxTimeElapsedSinceLastModification()
```

##### `ResetMinTimeElapsedSinceLastModification` <a name="ResetMinTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification"></a>

```go
func ResetMinTimeElapsedSinceLastModification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixesInput">ExcludePrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixesInput">IncludePrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput">LastModifiedBeforeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSinceInput">LastModifiedSinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput">MaxTimeElapsedSinceLastModificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput">MinTimeElapsedSinceLastModificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixes">ExcludePrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixes">IncludePrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBefore">LastModifiedBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSince">LastModifiedSince</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification">MaxTimeElapsedSinceLastModification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification">MinTimeElapsedSinceLastModification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludePrefixesInput`<sup>Optional</sup> <a name="ExcludePrefixesInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixesInput"></a>

```go
func ExcludePrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludePrefixesInput`<sup>Optional</sup> <a name="IncludePrefixesInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixesInput"></a>

```go
func IncludePrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LastModifiedBeforeInput`<sup>Optional</sup> <a name="LastModifiedBeforeInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput"></a>

```go
func LastModifiedBeforeInput() *string
```

- *Type:* *string

---

##### `LastModifiedSinceInput`<sup>Optional</sup> <a name="LastModifiedSinceInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSinceInput"></a>

```go
func LastModifiedSinceInput() *string
```

- *Type:* *string

---

##### `MaxTimeElapsedSinceLastModificationInput`<sup>Optional</sup> <a name="MaxTimeElapsedSinceLastModificationInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput"></a>

```go
func MaxTimeElapsedSinceLastModificationInput() *string
```

- *Type:* *string

---

##### `MinTimeElapsedSinceLastModificationInput`<sup>Optional</sup> <a name="MinTimeElapsedSinceLastModificationInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput"></a>

```go
func MinTimeElapsedSinceLastModificationInput() *string
```

- *Type:* *string

---

##### `ExcludePrefixes`<sup>Required</sup> <a name="ExcludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixes"></a>

```go
func ExcludePrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `IncludePrefixes`<sup>Required</sup> <a name="IncludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixes"></a>

```go
func IncludePrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `LastModifiedBefore`<sup>Required</sup> <a name="LastModifiedBefore" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBefore"></a>

```go
func LastModifiedBefore() *string
```

- *Type:* *string

---

##### `LastModifiedSince`<sup>Required</sup> <a name="LastModifiedSince" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSince"></a>

```go
func LastModifiedSince() *string
```

- *Type:* *string

---

##### `MaxTimeElapsedSinceLastModification`<sup>Required</sup> <a name="MaxTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification"></a>

```go
func MaxTimeElapsedSinceLastModification() *string
```

- *Type:* *string

---

##### `MinTimeElapsedSinceLastModification`<sup>Required</sup> <a name="MinTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification"></a>

```go
func MinTimeElapsedSinceLastModification() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobTransferSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a>

---


### GoogleStorageTransferJobTransferSpecOutputReference <a name="GoogleStorageTransferJobTransferSpecOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobTransferSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobTransferSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAwsS3DataSource">PutAwsS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource">PutAzureBlobStorageDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSink">PutGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSource">PutGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putHdfsDataSource">PutHdfsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putHttpDataSource">PutHttpDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putObjectConditions">PutObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putPosixDataSink">PutPosixDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putPosixDataSource">PutPosixDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putTransferOptions">PutTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetAwsS3DataSource">ResetAwsS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetAzureBlobStorageDataSource">ResetAzureBlobStorageDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetGcsDataSink">ResetGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetGcsDataSource">ResetGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetHdfsDataSource">ResetHdfsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetHttpDataSource">ResetHttpDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetObjectConditions">ResetObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetPosixDataSink">ResetPosixDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetPosixDataSource">ResetPosixDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetSinkAgentPoolName">ResetSinkAgentPoolName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetSourceAgentPoolName">ResetSourceAgentPoolName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetTransferOptions">ResetTransferOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsS3DataSource` <a name="PutAwsS3DataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAwsS3DataSource"></a>

```go
func PutAwsS3DataSource(value GoogleStorageTransferJobTransferSpecAwsS3DataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAwsS3DataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a>

---

##### `PutAzureBlobStorageDataSource` <a name="PutAzureBlobStorageDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource"></a>

```go
func PutAzureBlobStorageDataSource(value GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---

##### `PutGcsDataSink` <a name="PutGcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSink"></a>

```go
func PutGcsDataSink(value GoogleStorageTransferJobTransferSpecGcsDataSink)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a>

---

##### `PutGcsDataSource` <a name="PutGcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSource"></a>

```go
func PutGcsDataSource(value GoogleStorageTransferJobTransferSpecGcsDataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a>

---

##### `PutHdfsDataSource` <a name="PutHdfsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putHdfsDataSource"></a>

```go
func PutHdfsDataSource(value GoogleStorageTransferJobTransferSpecHdfsDataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putHdfsDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a>

---

##### `PutHttpDataSource` <a name="PutHttpDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putHttpDataSource"></a>

```go
func PutHttpDataSource(value GoogleStorageTransferJobTransferSpecHttpDataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putHttpDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a>

---

##### `PutObjectConditions` <a name="PutObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putObjectConditions"></a>

```go
func PutObjectConditions(value GoogleStorageTransferJobTransferSpecObjectConditions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putObjectConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a>

---

##### `PutPosixDataSink` <a name="PutPosixDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putPosixDataSink"></a>

```go
func PutPosixDataSink(value GoogleStorageTransferJobTransferSpecPosixDataSink)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putPosixDataSink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a>

---

##### `PutPosixDataSource` <a name="PutPosixDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putPosixDataSource"></a>

```go
func PutPosixDataSource(value GoogleStorageTransferJobTransferSpecPosixDataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putPosixDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a>

---

##### `PutTransferOptions` <a name="PutTransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putTransferOptions"></a>

```go
func PutTransferOptions(value GoogleStorageTransferJobTransferSpecTransferOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putTransferOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a>

---

##### `ResetAwsS3DataSource` <a name="ResetAwsS3DataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetAwsS3DataSource"></a>

```go
func ResetAwsS3DataSource()
```

##### `ResetAzureBlobStorageDataSource` <a name="ResetAzureBlobStorageDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetAzureBlobStorageDataSource"></a>

```go
func ResetAzureBlobStorageDataSource()
```

##### `ResetGcsDataSink` <a name="ResetGcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetGcsDataSink"></a>

```go
func ResetGcsDataSink()
```

##### `ResetGcsDataSource` <a name="ResetGcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetGcsDataSource"></a>

```go
func ResetGcsDataSource()
```

##### `ResetHdfsDataSource` <a name="ResetHdfsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetHdfsDataSource"></a>

```go
func ResetHdfsDataSource()
```

##### `ResetHttpDataSource` <a name="ResetHttpDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetHttpDataSource"></a>

```go
func ResetHttpDataSource()
```

##### `ResetObjectConditions` <a name="ResetObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetObjectConditions"></a>

```go
func ResetObjectConditions()
```

##### `ResetPosixDataSink` <a name="ResetPosixDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetPosixDataSink"></a>

```go
func ResetPosixDataSink()
```

##### `ResetPosixDataSource` <a name="ResetPosixDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetPosixDataSource"></a>

```go
func ResetPosixDataSource()
```

##### `ResetSinkAgentPoolName` <a name="ResetSinkAgentPoolName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetSinkAgentPoolName"></a>

```go
func ResetSinkAgentPoolName()
```

##### `ResetSourceAgentPoolName` <a name="ResetSourceAgentPoolName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetSourceAgentPoolName"></a>

```go
func ResetSourceAgentPoolName()
```

##### `ResetTransferOptions` <a name="ResetTransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetTransferOptions"></a>

```go
func ResetTransferOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.awsS3DataSource">AwsS3DataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference">GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSource">AzureBlobStorageDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSink">GcsDataSink</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference">GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSource">GcsDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference">GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.hdfsDataSource">HdfsDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference">GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.httpDataSource">HttpDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference">GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.objectConditions">ObjectConditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference">GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSink">PosixDataSink</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference">GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSource">PosixDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference">GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.transferOptions">TransferOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference">GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.awsS3DataSourceInput">AwsS3DataSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSourceInput">AzureBlobStorageDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSinkInput">GcsDataSinkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSourceInput">GcsDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.hdfsDataSourceInput">HdfsDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.httpDataSourceInput">HttpDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.objectConditionsInput">ObjectConditionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSinkInput">PosixDataSinkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSourceInput">PosixDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolNameInput">SinkAgentPoolNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolNameInput">SourceAgentPoolNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.transferOptionsInput">TransferOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolName">SinkAgentPoolName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolName">SourceAgentPoolName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsS3DataSource`<sup>Required</sup> <a name="AwsS3DataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.awsS3DataSource"></a>

```go
func AwsS3DataSource() GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference">GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference</a>

---

##### `AzureBlobStorageDataSource`<sup>Required</sup> <a name="AzureBlobStorageDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSource"></a>

```go
func AzureBlobStorageDataSource() GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference</a>

---

##### `GcsDataSink`<sup>Required</sup> <a name="GcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSink"></a>

```go
func GcsDataSink() GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference">GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference</a>

---

##### `GcsDataSource`<sup>Required</sup> <a name="GcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSource"></a>

```go
func GcsDataSource() GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference">GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference</a>

---

##### `HdfsDataSource`<sup>Required</sup> <a name="HdfsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.hdfsDataSource"></a>

```go
func HdfsDataSource() GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference">GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference</a>

---

##### `HttpDataSource`<sup>Required</sup> <a name="HttpDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.httpDataSource"></a>

```go
func HttpDataSource() GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference">GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference</a>

---

##### `ObjectConditions`<sup>Required</sup> <a name="ObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.objectConditions"></a>

```go
func ObjectConditions() GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference">GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference</a>

---

##### `PosixDataSink`<sup>Required</sup> <a name="PosixDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSink"></a>

```go
func PosixDataSink() GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference">GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference</a>

---

##### `PosixDataSource`<sup>Required</sup> <a name="PosixDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSource"></a>

```go
func PosixDataSource() GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference">GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference</a>

---

##### `TransferOptions`<sup>Required</sup> <a name="TransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.transferOptions"></a>

```go
func TransferOptions() GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference">GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference</a>

---

##### `AwsS3DataSourceInput`<sup>Optional</sup> <a name="AwsS3DataSourceInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.awsS3DataSourceInput"></a>

```go
func AwsS3DataSourceInput() GoogleStorageTransferJobTransferSpecAwsS3DataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a>

---

##### `AzureBlobStorageDataSourceInput`<sup>Optional</sup> <a name="AzureBlobStorageDataSourceInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSourceInput"></a>

```go
func AzureBlobStorageDataSourceInput() GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---

##### `GcsDataSinkInput`<sup>Optional</sup> <a name="GcsDataSinkInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSinkInput"></a>

```go
func GcsDataSinkInput() GoogleStorageTransferJobTransferSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a>

---

##### `GcsDataSourceInput`<sup>Optional</sup> <a name="GcsDataSourceInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSourceInput"></a>

```go
func GcsDataSourceInput() GoogleStorageTransferJobTransferSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a>

---

##### `HdfsDataSourceInput`<sup>Optional</sup> <a name="HdfsDataSourceInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.hdfsDataSourceInput"></a>

```go
func HdfsDataSourceInput() GoogleStorageTransferJobTransferSpecHdfsDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a>

---

##### `HttpDataSourceInput`<sup>Optional</sup> <a name="HttpDataSourceInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.httpDataSourceInput"></a>

```go
func HttpDataSourceInput() GoogleStorageTransferJobTransferSpecHttpDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a>

---

##### `ObjectConditionsInput`<sup>Optional</sup> <a name="ObjectConditionsInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.objectConditionsInput"></a>

```go
func ObjectConditionsInput() GoogleStorageTransferJobTransferSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a>

---

##### `PosixDataSinkInput`<sup>Optional</sup> <a name="PosixDataSinkInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSinkInput"></a>

```go
func PosixDataSinkInput() GoogleStorageTransferJobTransferSpecPosixDataSink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a>

---

##### `PosixDataSourceInput`<sup>Optional</sup> <a name="PosixDataSourceInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSourceInput"></a>

```go
func PosixDataSourceInput() GoogleStorageTransferJobTransferSpecPosixDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a>

---

##### `SinkAgentPoolNameInput`<sup>Optional</sup> <a name="SinkAgentPoolNameInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolNameInput"></a>

```go
func SinkAgentPoolNameInput() *string
```

- *Type:* *string

---

##### `SourceAgentPoolNameInput`<sup>Optional</sup> <a name="SourceAgentPoolNameInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolNameInput"></a>

```go
func SourceAgentPoolNameInput() *string
```

- *Type:* *string

---

##### `TransferOptionsInput`<sup>Optional</sup> <a name="TransferOptionsInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.transferOptionsInput"></a>

```go
func TransferOptionsInput() GoogleStorageTransferJobTransferSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a>

---

##### `SinkAgentPoolName`<sup>Required</sup> <a name="SinkAgentPoolName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolName"></a>

```go
func SinkAgentPoolName() *string
```

- *Type:* *string

---

##### `SourceAgentPoolName`<sup>Required</sup> <a name="SourceAgentPoolName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolName"></a>

```go
func SourceAgentPoolName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobTransferSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a>

---


### GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference <a name="GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectory">RootDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectoryInput"></a>

```go
func RootDirectoryInput() *string
```

- *Type:* *string

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectory"></a>

```go
func RootDirectory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobTransferSpecPosixDataSink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a>

---


### GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference <a name="GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectory">RootDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectoryInput"></a>

```go
func RootDirectoryInput() *string
```

- *Type:* *string

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectory"></a>

```go
func RootDirectory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobTransferSpecPosixDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a>

---


### GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference <a name="GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestoragetransferjob"

googlestoragetransferjob.NewGoogleStorageTransferJobTransferSpecTransferOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer">ResetDeleteObjectsFromSourceAfterTransfer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink">ResetDeleteObjectsUniqueInSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink">ResetOverwriteObjectsAlreadyExistingInSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteWhen">ResetOverwriteWhen</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteObjectsFromSourceAfterTransfer` <a name="ResetDeleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer"></a>

```go
func ResetDeleteObjectsFromSourceAfterTransfer()
```

##### `ResetDeleteObjectsUniqueInSink` <a name="ResetDeleteObjectsUniqueInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink"></a>

```go
func ResetDeleteObjectsUniqueInSink()
```

##### `ResetOverwriteObjectsAlreadyExistingInSink` <a name="ResetOverwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink"></a>

```go
func ResetOverwriteObjectsAlreadyExistingInSink()
```

##### `ResetOverwriteWhen` <a name="ResetOverwriteWhen" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteWhen"></a>

```go
func ResetOverwriteWhen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput">DeleteObjectsFromSourceAfterTransferInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput">DeleteObjectsUniqueInSinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput">OverwriteObjectsAlreadyExistingInSinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhenInput">OverwriteWhenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer">DeleteObjectsFromSourceAfterTransfer</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink">DeleteObjectsUniqueInSink</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink">OverwriteObjectsAlreadyExistingInSink</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhen">OverwriteWhen</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteObjectsFromSourceAfterTransferInput`<sup>Optional</sup> <a name="DeleteObjectsFromSourceAfterTransferInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput"></a>

```go
func DeleteObjectsFromSourceAfterTransferInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteObjectsUniqueInSinkInput`<sup>Optional</sup> <a name="DeleteObjectsUniqueInSinkInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput"></a>

```go
func DeleteObjectsUniqueInSinkInput() interface{}
```

- *Type:* interface{}

---

##### `OverwriteObjectsAlreadyExistingInSinkInput`<sup>Optional</sup> <a name="OverwriteObjectsAlreadyExistingInSinkInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput"></a>

```go
func OverwriteObjectsAlreadyExistingInSinkInput() interface{}
```

- *Type:* interface{}

---

##### `OverwriteWhenInput`<sup>Optional</sup> <a name="OverwriteWhenInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhenInput"></a>

```go
func OverwriteWhenInput() *string
```

- *Type:* *string

---

##### `DeleteObjectsFromSourceAfterTransfer`<sup>Required</sup> <a name="DeleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer"></a>

```go
func DeleteObjectsFromSourceAfterTransfer() interface{}
```

- *Type:* interface{}

---

##### `DeleteObjectsUniqueInSink`<sup>Required</sup> <a name="DeleteObjectsUniqueInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink"></a>

```go
func DeleteObjectsUniqueInSink() interface{}
```

- *Type:* interface{}

---

##### `OverwriteObjectsAlreadyExistingInSink`<sup>Required</sup> <a name="OverwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink"></a>

```go
func OverwriteObjectsAlreadyExistingInSink() interface{}
```

- *Type:* interface{}

---

##### `OverwriteWhen`<sup>Required</sup> <a name="OverwriteWhen" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhen"></a>

```go
func OverwriteWhen() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferJobTransferSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a>

---



