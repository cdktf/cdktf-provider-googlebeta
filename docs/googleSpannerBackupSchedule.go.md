# `googleSpannerBackupSchedule` Submodule <a name="`googleSpannerBackupSchedule` Submodule" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSpannerBackupSchedule <a name="GoogleSpannerBackupSchedule" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule google_spanner_backup_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlespannerbackupschedule"

googlespannerbackupschedule.NewGoogleSpannerBackupSchedule(scope Construct, id *string, config GoogleSpannerBackupScheduleConfig) GoogleSpannerBackupSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig">GoogleSpannerBackupScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig">GoogleSpannerBackupScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putFullBackupSpec">PutFullBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putIncrementalBackupSpec">PutIncrementalBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetFullBackupSpec">ResetFullBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetIncrementalBackupSpec">ResetIncrementalBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetSpec">ResetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putEncryptionConfig"></a>

```go
func PutEncryptionConfig(value GoogleSpannerBackupScheduleEncryptionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a>

---

##### `PutFullBackupSpec` <a name="PutFullBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putFullBackupSpec"></a>

```go
func PutFullBackupSpec(value GoogleSpannerBackupScheduleFullBackupSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putFullBackupSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a>

---

##### `PutIncrementalBackupSpec` <a name="PutIncrementalBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putIncrementalBackupSpec"></a>

```go
func PutIncrementalBackupSpec(value GoogleSpannerBackupScheduleIncrementalBackupSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putIncrementalBackupSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putSpec"></a>

```go
func PutSpec(value GoogleSpannerBackupScheduleSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putTimeouts"></a>

```go
func PutTimeouts(value GoogleSpannerBackupScheduleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a>

---

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetEncryptionConfig"></a>

```go
func ResetEncryptionConfig()
```

##### `ResetFullBackupSpec` <a name="ResetFullBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetFullBackupSpec"></a>

```go
func ResetFullBackupSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetId"></a>

```go
func ResetId()
```

##### `ResetIncrementalBackupSpec` <a name="ResetIncrementalBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetIncrementalBackupSpec"></a>

```go
func ResetIncrementalBackupSpec()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetName"></a>

```go
func ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetSpec"></a>

```go
func ResetSpec()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSpannerBackupSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlespannerbackupschedule"

googlespannerbackupschedule.GoogleSpannerBackupSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlespannerbackupschedule"

googlespannerbackupschedule.GoogleSpannerBackupSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlespannerbackupschedule"

googlespannerbackupschedule.GoogleSpannerBackupSchedule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlespannerbackupschedule"

googlespannerbackupschedule.GoogleSpannerBackupSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleSpannerBackupSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleSpannerBackupSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleSpannerBackupSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSpannerBackupSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference">GoogleSpannerBackupScheduleEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fullBackupSpec">FullBackupSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference">GoogleSpannerBackupScheduleFullBackupSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.incrementalBackupSpec">IncrementalBackupSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference">GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference">GoogleSpannerBackupScheduleSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference">GoogleSpannerBackupScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fullBackupSpecInput">FullBackupSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.incrementalBackupSpecInput">IncrementalBackupSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.retentionDurationInput">RetentionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.retentionDuration">RetentionDuration</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.encryptionConfig"></a>

```go
func EncryptionConfig() GoogleSpannerBackupScheduleEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference">GoogleSpannerBackupScheduleEncryptionConfigOutputReference</a>

---

##### `FullBackupSpec`<sup>Required</sup> <a name="FullBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fullBackupSpec"></a>

```go
func FullBackupSpec() GoogleSpannerBackupScheduleFullBackupSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference">GoogleSpannerBackupScheduleFullBackupSpecOutputReference</a>

---

##### `IncrementalBackupSpec`<sup>Required</sup> <a name="IncrementalBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.incrementalBackupSpec"></a>

```go
func IncrementalBackupSpec() GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference">GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.spec"></a>

```go
func Spec() GoogleSpannerBackupScheduleSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference">GoogleSpannerBackupScheduleSpecOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.timeouts"></a>

```go
func Timeouts() GoogleSpannerBackupScheduleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference">GoogleSpannerBackupScheduleTimeoutsOutputReference</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.encryptionConfigInput"></a>

```go
func EncryptionConfigInput() GoogleSpannerBackupScheduleEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a>

---

##### `FullBackupSpecInput`<sup>Optional</sup> <a name="FullBackupSpecInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fullBackupSpecInput"></a>

```go
func FullBackupSpecInput() GoogleSpannerBackupScheduleFullBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncrementalBackupSpecInput`<sup>Optional</sup> <a name="IncrementalBackupSpecInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.incrementalBackupSpecInput"></a>

```go
func IncrementalBackupSpecInput() GoogleSpannerBackupScheduleIncrementalBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a>

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RetentionDurationInput`<sup>Optional</sup> <a name="RetentionDurationInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.retentionDurationInput"></a>

```go
func RetentionDurationInput() *string
```

- *Type:* *string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.specInput"></a>

```go
func SpecInput() GoogleSpannerBackupScheduleSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RetentionDuration`<sup>Required</sup> <a name="RetentionDuration" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.retentionDuration"></a>

```go
func RetentionDuration() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSpannerBackupScheduleConfig <a name="GoogleSpannerBackupScheduleConfig" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlespannerbackupschedule"

&googlespannerbackupschedule.GoogleSpannerBackupScheduleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Database: *string,
	Instance: *string,
	RetentionDuration: *string,
	EncryptionConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig,
	FullBackupSpec: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec,
	Id: *string,
	IncrementalBackupSpec: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec,
	Name: *string,
	Project: *string,
	Spec: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.database">Database</a></code> | <code>*string</code> | The database to create the backup schedule on. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.instance">Instance</a></code> | <code>*string</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.retentionDuration">RetentionDuration</a></code> | <code>*string</code> | At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.fullBackupSpec">FullBackupSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a></code> | full_backup_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#id GoogleSpannerBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.incrementalBackupSpec">IncrementalBackupSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a></code> | incremental_backup_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.name">Name</a></code> | <code>*string</code> | A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#project GoogleSpannerBackupSchedule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database to create the backup schedule on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#database GoogleSpannerBackupSchedule#database}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#instance GoogleSpannerBackupSchedule#instance}

---

##### `RetentionDuration`<sup>Required</sup> <a name="RetentionDuration" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.retentionDuration"></a>

```go
RetentionDuration *string
```

- *Type:* *string

At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#retention_duration GoogleSpannerBackupSchedule#retention_duration}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.encryptionConfig"></a>

```go
EncryptionConfig GoogleSpannerBackupScheduleEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#encryption_config GoogleSpannerBackupSchedule#encryption_config}

---

##### `FullBackupSpec`<sup>Optional</sup> <a name="FullBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.fullBackupSpec"></a>

```go
FullBackupSpec GoogleSpannerBackupScheduleFullBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a>

full_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#full_backup_spec GoogleSpannerBackupSchedule#full_backup_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#id GoogleSpannerBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncrementalBackupSpec`<sup>Optional</sup> <a name="IncrementalBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.incrementalBackupSpec"></a>

```go
IncrementalBackupSpec GoogleSpannerBackupScheduleIncrementalBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a>

incremental_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#incremental_backup_spec GoogleSpannerBackupSchedule#incremental_backup_spec}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created.

Values are of the form [a-z][-a-z0-9]*[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#name GoogleSpannerBackupSchedule#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#project GoogleSpannerBackupSchedule#project}.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.spec"></a>

```go
Spec GoogleSpannerBackupScheduleSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#spec GoogleSpannerBackupSchedule#spec}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.timeouts"></a>

```go
Timeouts GoogleSpannerBackupScheduleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#timeouts GoogleSpannerBackupSchedule#timeouts}

---

### GoogleSpannerBackupScheduleEncryptionConfig <a name="GoogleSpannerBackupScheduleEncryptionConfig" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlespannerbackupschedule"

&googlespannerbackupschedule.GoogleSpannerBackupScheduleEncryptionConfig {
	EncryptionType: *string,
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | The encryption type of backups created by the backup schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The resource name of the Cloud KMS key to use for encryption. Format: 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}'. |

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

The encryption type of backups created by the backup schedule.

Possible values are USE_DATABASE_ENCRYPTION, GOOGLE_DEFAULT_ENCRYPTION, or CUSTOMER_MANAGED_ENCRYPTION.
If you use CUSTOMER_MANAGED_ENCRYPTION, you must specify a kmsKeyName.
If your backup type is incremental-backup, the encryption type must be GOOGLE_DEFAULT_ENCRYPTION. Possible values: ["USE_DATABASE_ENCRYPTION", "GOOGLE_DEFAULT_ENCRYPTION", "CUSTOMER_MANAGED_ENCRYPTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#encryption_type GoogleSpannerBackupSchedule#encryption_type}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The resource name of the Cloud KMS key to use for encryption. Format: 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#kms_key_name GoogleSpannerBackupSchedule#kms_key_name}

---

### GoogleSpannerBackupScheduleFullBackupSpec <a name="GoogleSpannerBackupScheduleFullBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlespannerbackupschedule"

&googlespannerbackupschedule.GoogleSpannerBackupScheduleFullBackupSpec {

}
```


### GoogleSpannerBackupScheduleIncrementalBackupSpec <a name="GoogleSpannerBackupScheduleIncrementalBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlespannerbackupschedule"

&googlespannerbackupschedule.GoogleSpannerBackupScheduleIncrementalBackupSpec {

}
```


### GoogleSpannerBackupScheduleSpec <a name="GoogleSpannerBackupScheduleSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlespannerbackupschedule"

&googlespannerbackupschedule.GoogleSpannerBackupScheduleSpec {
	CronSpec: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec.property.cronSpec">CronSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a></code> | cron_spec block. |

---

##### `CronSpec`<sup>Optional</sup> <a name="CronSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec.property.cronSpec"></a>

```go
CronSpec GoogleSpannerBackupScheduleSpecCronSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a>

cron_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#cron_spec GoogleSpannerBackupSchedule#cron_spec}

---

### GoogleSpannerBackupScheduleSpecCronSpec <a name="GoogleSpannerBackupScheduleSpecCronSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlespannerbackupschedule"

&googlespannerbackupschedule.GoogleSpannerBackupScheduleSpecCronSpec {
	Text: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec.property.text">Text</a></code> | <code>*string</code> | Textual representation of the crontab. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec.property.text"></a>

```go
Text *string
```

- *Type:* *string

Textual representation of the crontab.

User can customize the
backup frequency and the backup version time using the cron
expression. The version time must be in UTC timzeone.
The backup will contain an externally consistent copy of the
database at the version time. Allowed frequencies are 12 hour, 1 day,
1 week and 1 month. Examples of valid cron specifications:
0 2/12 * * * : every 12 hours at (2, 14) hours past midnight in UTC.
0 2,14 * * * : every 12 hours at (2,14) hours past midnight in UTC.
0 2 * * *    : once a day at 2 past midnight in UTC.
0 2 * * 0    : once a week every Sunday at 2 past midnight in UTC.
0 2 8 * *    : once a month on 8th day at 2 past midnight in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#text GoogleSpannerBackupSchedule#text}

---

### GoogleSpannerBackupScheduleTimeouts <a name="GoogleSpannerBackupScheduleTimeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlespannerbackupschedule"

&googlespannerbackupschedule.GoogleSpannerBackupScheduleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#create GoogleSpannerBackupSchedule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#delete GoogleSpannerBackupSchedule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#update GoogleSpannerBackupSchedule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#create GoogleSpannerBackupSchedule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#delete GoogleSpannerBackupSchedule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#update GoogleSpannerBackupSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSpannerBackupScheduleEncryptionConfigOutputReference <a name="GoogleSpannerBackupScheduleEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlespannerbackupschedule"

googlespannerbackupschedule.NewGoogleSpannerBackupScheduleEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSpannerBackupScheduleEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSpannerBackupScheduleEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a>

---


### GoogleSpannerBackupScheduleFullBackupSpecOutputReference <a name="GoogleSpannerBackupScheduleFullBackupSpecOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlespannerbackupschedule"

googlespannerbackupschedule.NewGoogleSpannerBackupScheduleFullBackupSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSpannerBackupScheduleFullBackupSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSpannerBackupScheduleFullBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a>

---


### GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference <a name="GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlespannerbackupschedule"

googlespannerbackupschedule.NewGoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSpannerBackupScheduleIncrementalBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a>

---


### GoogleSpannerBackupScheduleSpecCronSpecOutputReference <a name="GoogleSpannerBackupScheduleSpecCronSpecOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlespannerbackupschedule"

googlespannerbackupschedule.NewGoogleSpannerBackupScheduleSpecCronSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSpannerBackupScheduleSpecCronSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSpannerBackupScheduleSpecCronSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a>

---


### GoogleSpannerBackupScheduleSpecOutputReference <a name="GoogleSpannerBackupScheduleSpecOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlespannerbackupschedule"

googlespannerbackupschedule.NewGoogleSpannerBackupScheduleSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSpannerBackupScheduleSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.putCronSpec">PutCronSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resetCronSpec">ResetCronSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCronSpec` <a name="PutCronSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.putCronSpec"></a>

```go
func PutCronSpec(value GoogleSpannerBackupScheduleSpecCronSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.putCronSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a>

---

##### `ResetCronSpec` <a name="ResetCronSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resetCronSpec"></a>

```go
func ResetCronSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.cronSpec">CronSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference">GoogleSpannerBackupScheduleSpecCronSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.cronSpecInput">CronSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CronSpec`<sup>Required</sup> <a name="CronSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.cronSpec"></a>

```go
func CronSpec() GoogleSpannerBackupScheduleSpecCronSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference">GoogleSpannerBackupScheduleSpecCronSpecOutputReference</a>

---

##### `CronSpecInput`<sup>Optional</sup> <a name="CronSpecInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.cronSpecInput"></a>

```go
func CronSpecInput() GoogleSpannerBackupScheduleSpecCronSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSpannerBackupScheduleSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a>

---


### GoogleSpannerBackupScheduleTimeoutsOutputReference <a name="GoogleSpannerBackupScheduleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlespannerbackupschedule"

googlespannerbackupschedule.NewGoogleSpannerBackupScheduleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSpannerBackupScheduleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



