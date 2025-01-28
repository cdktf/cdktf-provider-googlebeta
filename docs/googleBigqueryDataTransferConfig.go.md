# `googleBigqueryDataTransferConfig` Submodule <a name="`googleBigqueryDataTransferConfig` Submodule" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryDataTransferConfig <a name="GoogleBigqueryDataTransferConfig" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config google_bigquery_data_transfer_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatatransferconfig"

googlebigquerydatatransferconfig.NewGoogleBigqueryDataTransferConfig(scope Construct, id *string, config GoogleBigqueryDataTransferConfigConfig) GoogleBigqueryDataTransferConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig">GoogleBigqueryDataTransferConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig">GoogleBigqueryDataTransferConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putEmailPreferences">PutEmailPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putScheduleOptions">PutScheduleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putSensitiveParams">PutSensitiveParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetDataRefreshWindowDays">ResetDataRefreshWindowDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetDestinationDatasetId">ResetDestinationDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetEmailPreferences">ResetEmailPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetNotificationPubsubTopic">ResetNotificationPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetScheduleOptions">ResetScheduleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetSensitiveParams">ResetSensitiveParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetServiceAccountName">ResetServiceAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEmailPreferences` <a name="PutEmailPreferences" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putEmailPreferences"></a>

```go
func PutEmailPreferences(value GoogleBigqueryDataTransferConfigEmailPreferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putEmailPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences">GoogleBigqueryDataTransferConfigEmailPreferences</a>

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value GoogleBigqueryDataTransferConfigEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration">GoogleBigqueryDataTransferConfigEncryptionConfiguration</a>

---

##### `PutScheduleOptions` <a name="PutScheduleOptions" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putScheduleOptions"></a>

```go
func PutScheduleOptions(value GoogleBigqueryDataTransferConfigScheduleOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putScheduleOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions">GoogleBigqueryDataTransferConfigScheduleOptions</a>

---

##### `PutSensitiveParams` <a name="PutSensitiveParams" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putSensitiveParams"></a>

```go
func PutSensitiveParams(value GoogleBigqueryDataTransferConfigSensitiveParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putSensitiveParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams">GoogleBigqueryDataTransferConfigSensitiveParams</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBigqueryDataTransferConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts">GoogleBigqueryDataTransferConfigTimeouts</a>

---

##### `ResetDataRefreshWindowDays` <a name="ResetDataRefreshWindowDays" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetDataRefreshWindowDays"></a>

```go
func ResetDataRefreshWindowDays()
```

##### `ResetDestinationDatasetId` <a name="ResetDestinationDatasetId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetDestinationDatasetId"></a>

```go
func ResetDestinationDatasetId()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetEmailPreferences` <a name="ResetEmailPreferences" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetEmailPreferences"></a>

```go
func ResetEmailPreferences()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetNotificationPubsubTopic` <a name="ResetNotificationPubsubTopic" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetNotificationPubsubTopic"></a>

```go
func ResetNotificationPubsubTopic()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetScheduleOptions` <a name="ResetScheduleOptions" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetScheduleOptions"></a>

```go
func ResetScheduleOptions()
```

##### `ResetSensitiveParams` <a name="ResetSensitiveParams" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetSensitiveParams"></a>

```go
func ResetSensitiveParams()
```

##### `ResetServiceAccountName` <a name="ResetServiceAccountName" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetServiceAccountName"></a>

```go
func ResetServiceAccountName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryDataTransferConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatatransferconfig"

googlebigquerydatatransferconfig.GoogleBigqueryDataTransferConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatatransferconfig"

googlebigquerydatatransferconfig.GoogleBigqueryDataTransferConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatatransferconfig"

googlebigquerydatatransferconfig.GoogleBigqueryDataTransferConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatatransferconfig"

googlebigquerydatatransferconfig.GoogleBigqueryDataTransferConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleBigqueryDataTransferConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBigqueryDataTransferConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBigqueryDataTransferConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryDataTransferConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.emailPreferences">EmailPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference">GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference">GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.scheduleOptions">ScheduleOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference">GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.sensitiveParams">SensitiveParams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference">GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference">GoogleBigqueryDataTransferConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dataRefreshWindowDaysInput">DataRefreshWindowDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dataSourceIdInput">DataSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.destinationDatasetIdInput">DestinationDatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.emailPreferencesInput">EmailPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences">GoogleBigqueryDataTransferConfigEmailPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration">GoogleBigqueryDataTransferConfigEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.notificationPubsubTopicInput">NotificationPubsubTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.paramsInput">ParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.scheduleOptionsInput">ScheduleOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions">GoogleBigqueryDataTransferConfigScheduleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.sensitiveParamsInput">SensitiveParamsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams">GoogleBigqueryDataTransferConfigSensitiveParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.serviceAccountNameInput">ServiceAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dataRefreshWindowDays">DataRefreshWindowDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.destinationDatasetId">DestinationDatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.notificationPubsubTopic">NotificationPubsubTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.params">Params</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.serviceAccountName">ServiceAccountName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EmailPreferences`<sup>Required</sup> <a name="EmailPreferences" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.emailPreferences"></a>

```go
func EmailPreferences() GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference">GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference</a>

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference">GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScheduleOptions`<sup>Required</sup> <a name="ScheduleOptions" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.scheduleOptions"></a>

```go
func ScheduleOptions() GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference">GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference</a>

---

##### `SensitiveParams`<sup>Required</sup> <a name="SensitiveParams" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.sensitiveParams"></a>

```go
func SensitiveParams() GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference">GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.timeouts"></a>

```go
func Timeouts() GoogleBigqueryDataTransferConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference">GoogleBigqueryDataTransferConfigTimeoutsOutputReference</a>

---

##### `DataRefreshWindowDaysInput`<sup>Optional</sup> <a name="DataRefreshWindowDaysInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dataRefreshWindowDaysInput"></a>

```go
func DataRefreshWindowDaysInput() *f64
```

- *Type:* *f64

---

##### `DataSourceIdInput`<sup>Optional</sup> <a name="DataSourceIdInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dataSourceIdInput"></a>

```go
func DataSourceIdInput() *string
```

- *Type:* *string

---

##### `DestinationDatasetIdInput`<sup>Optional</sup> <a name="DestinationDatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.destinationDatasetIdInput"></a>

```go
func DestinationDatasetIdInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailPreferencesInput`<sup>Optional</sup> <a name="EmailPreferencesInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.emailPreferencesInput"></a>

```go
func EmailPreferencesInput() GoogleBigqueryDataTransferConfigEmailPreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences">GoogleBigqueryDataTransferConfigEmailPreferences</a>

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() GoogleBigqueryDataTransferConfigEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration">GoogleBigqueryDataTransferConfigEncryptionConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NotificationPubsubTopicInput`<sup>Optional</sup> <a name="NotificationPubsubTopicInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.notificationPubsubTopicInput"></a>

```go
func NotificationPubsubTopicInput() *string
```

- *Type:* *string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.paramsInput"></a>

```go
func ParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `ScheduleOptionsInput`<sup>Optional</sup> <a name="ScheduleOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.scheduleOptionsInput"></a>

```go
func ScheduleOptionsInput() GoogleBigqueryDataTransferConfigScheduleOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions">GoogleBigqueryDataTransferConfigScheduleOptions</a>

---

##### `SensitiveParamsInput`<sup>Optional</sup> <a name="SensitiveParamsInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.sensitiveParamsInput"></a>

```go
func SensitiveParamsInput() GoogleBigqueryDataTransferConfigSensitiveParams
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams">GoogleBigqueryDataTransferConfigSensitiveParams</a>

---

##### `ServiceAccountNameInput`<sup>Optional</sup> <a name="ServiceAccountNameInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.serviceAccountNameInput"></a>

```go
func ServiceAccountNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataRefreshWindowDays`<sup>Required</sup> <a name="DataRefreshWindowDays" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dataRefreshWindowDays"></a>

```go
func DataRefreshWindowDays() *f64
```

- *Type:* *f64

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `DestinationDatasetId`<sup>Required</sup> <a name="DestinationDatasetId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.destinationDatasetId"></a>

```go
func DestinationDatasetId() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `NotificationPubsubTopic`<sup>Required</sup> <a name="NotificationPubsubTopic" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.notificationPubsubTopic"></a>

```go
func NotificationPubsubTopic() *string
```

- *Type:* *string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.params"></a>

```go
func Params() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `ServiceAccountName`<sup>Required</sup> <a name="ServiceAccountName" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.serviceAccountName"></a>

```go
func ServiceAccountName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryDataTransferConfigConfig <a name="GoogleBigqueryDataTransferConfigConfig" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatatransferconfig"

&googlebigquerydatatransferconfig.GoogleBigqueryDataTransferConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataSourceId: *string,
	DisplayName: *string,
	Params: *map[string]*string,
	DataRefreshWindowDays: *f64,
	DestinationDatasetId: *string,
	Disabled: interface{},
	EmailPreferences: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences,
	EncryptionConfiguration: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration,
	Id: *string,
	Location: *string,
	NotificationPubsubTopic: *string,
	Project: *string,
	Schedule: *string,
	ScheduleOptions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions,
	SensitiveParams: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams,
	ServiceAccountName: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | The data source id. Cannot be changed once the transfer config is created. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The user specified display name for the transfer config. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.params">Params</a></code> | <code>*map[string]*string</code> | Parameters specific to each data source. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.dataRefreshWindowDays">DataRefreshWindowDays</a></code> | <code>*f64</code> | The number of days to look back to automatically refresh the data. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.destinationDatasetId">DestinationDatasetId</a></code> | <code>*string</code> | The BigQuery target dataset id. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | When set to true, no runs are scheduled for a given transfer. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.emailPreferences">EmailPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences">GoogleBigqueryDataTransferConfigEmailPreferences</a></code> | email_preferences block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration">GoogleBigqueryDataTransferConfigEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#id GoogleBigqueryDataTransferConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.location">Location</a></code> | <code>*string</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.notificationPubsubTopic">NotificationPubsubTopic</a></code> | <code>*string</code> | Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#project GoogleBigqueryDataTransferConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.schedule">Schedule</a></code> | <code>*string</code> | Data transfer schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.scheduleOptions">ScheduleOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions">GoogleBigqueryDataTransferConfigScheduleOptions</a></code> | schedule_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.sensitiveParams">SensitiveParams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams">GoogleBigqueryDataTransferConfigSensitiveParams</a></code> | sensitive_params block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.serviceAccountName">ServiceAccountName</a></code> | <code>*string</code> | Service account email. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts">GoogleBigqueryDataTransferConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.dataSourceId"></a>

```go
DataSourceId *string
```

- *Type:* *string

The data source id. Cannot be changed once the transfer config is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#data_source_id GoogleBigqueryDataTransferConfig#data_source_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The user specified display name for the transfer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#display_name GoogleBigqueryDataTransferConfig#display_name}

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.params"></a>

```go
Params *map[string]*string
```

- *Type:* *map[string]*string

Parameters specific to each data source.

For more information see the bq tab in the 'Setting up a data transfer'
section for each data source. For example the parameters for Cloud Storage transfers are listed here:
https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq

**NOTE** : If you are attempting to update a parameter that cannot be updated (due to api limitations) [please force recreation of the resource](https://www.terraform.io/cli/state/taint#forcing-re-creation-of-resources).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#params GoogleBigqueryDataTransferConfig#params}

---

##### `DataRefreshWindowDays`<sup>Optional</sup> <a name="DataRefreshWindowDays" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.dataRefreshWindowDays"></a>

```go
DataRefreshWindowDays *f64
```

- *Type:* *f64

The number of days to look back to automatically refresh the data.

For example, if dataRefreshWindowDays = 10, then every day BigQuery
reingests data for [today-10, today-1], rather than ingesting data for
just [today-1]. Only valid if the data source supports the feature.
Set the value to 0 to use the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#data_refresh_window_days GoogleBigqueryDataTransferConfig#data_refresh_window_days}

---

##### `DestinationDatasetId`<sup>Optional</sup> <a name="DestinationDatasetId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.destinationDatasetId"></a>

```go
DestinationDatasetId *string
```

- *Type:* *string

The BigQuery target dataset id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#destination_dataset_id GoogleBigqueryDataTransferConfig#destination_dataset_id}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

When set to true, no runs are scheduled for a given transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#disabled GoogleBigqueryDataTransferConfig#disabled}

---

##### `EmailPreferences`<sup>Optional</sup> <a name="EmailPreferences" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.emailPreferences"></a>

```go
EmailPreferences GoogleBigqueryDataTransferConfigEmailPreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences">GoogleBigqueryDataTransferConfigEmailPreferences</a>

email_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#email_preferences GoogleBigqueryDataTransferConfig#email_preferences}

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration GoogleBigqueryDataTransferConfigEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration">GoogleBigqueryDataTransferConfigEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#encryption_configuration GoogleBigqueryDataTransferConfig#encryption_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#id GoogleBigqueryDataTransferConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#location GoogleBigqueryDataTransferConfig#location}

---

##### `NotificationPubsubTopic`<sup>Optional</sup> <a name="NotificationPubsubTopic" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.notificationPubsubTopic"></a>

```go
NotificationPubsubTopic *string
```

- *Type:* *string

Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#notification_pubsub_topic GoogleBigqueryDataTransferConfig#notification_pubsub_topic}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#project GoogleBigqueryDataTransferConfig#project}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Data transfer schedule.

If the data source does not support a custom
schedule, this should be empty. If it is empty, the default value for
the data source will be used. The specified times are in UTC. Examples
of valid format: 1st,3rd monday of month 15:30, every wed,fri of jan,
jun 13:15, and first sunday of quarter 00:00. See more explanation
about the format here:
https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
NOTE: The minimum interval time between recurring transfers depends
on the data source; refer to the documentation for your data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#schedule GoogleBigqueryDataTransferConfig#schedule}

---

##### `ScheduleOptions`<sup>Optional</sup> <a name="ScheduleOptions" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.scheduleOptions"></a>

```go
ScheduleOptions GoogleBigqueryDataTransferConfigScheduleOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions">GoogleBigqueryDataTransferConfigScheduleOptions</a>

schedule_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#schedule_options GoogleBigqueryDataTransferConfig#schedule_options}

---

##### `SensitiveParams`<sup>Optional</sup> <a name="SensitiveParams" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.sensitiveParams"></a>

```go
SensitiveParams GoogleBigqueryDataTransferConfigSensitiveParams
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams">GoogleBigqueryDataTransferConfigSensitiveParams</a>

sensitive_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#sensitive_params GoogleBigqueryDataTransferConfig#sensitive_params}

---

##### `ServiceAccountName`<sup>Optional</sup> <a name="ServiceAccountName" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.serviceAccountName"></a>

```go
ServiceAccountName *string
```

- *Type:* *string

Service account email.

If this field is set, transfer config will
be created with this service account credentials. It requires that
requesting user calling this API has permissions to act as this service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#service_account_name GoogleBigqueryDataTransferConfig#service_account_name}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleBigqueryDataTransferConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts">GoogleBigqueryDataTransferConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#timeouts GoogleBigqueryDataTransferConfig#timeouts}

---

### GoogleBigqueryDataTransferConfigEmailPreferences <a name="GoogleBigqueryDataTransferConfigEmailPreferences" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatatransferconfig"

&googlebigquerydatatransferconfig.GoogleBigqueryDataTransferConfigEmailPreferences {
	EnableFailureEmail: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences.property.enableFailureEmail">EnableFailureEmail</a></code> | <code>interface{}</code> | If true, email notifications will be sent on transfer run failures. |

---

##### `EnableFailureEmail`<sup>Required</sup> <a name="EnableFailureEmail" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences.property.enableFailureEmail"></a>

```go
EnableFailureEmail interface{}
```

- *Type:* interface{}

If true, email notifications will be sent on transfer run failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#enable_failure_email GoogleBigqueryDataTransferConfig#enable_failure_email}

---

### GoogleBigqueryDataTransferConfigEncryptionConfiguration <a name="GoogleBigqueryDataTransferConfigEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatatransferconfig"

&googlebigquerydatatransferconfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The name of the KMS key used for encrypting BigQuery data. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The name of the KMS key used for encrypting BigQuery data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#kms_key_name GoogleBigqueryDataTransferConfig#kms_key_name}

---

### GoogleBigqueryDataTransferConfigScheduleOptions <a name="GoogleBigqueryDataTransferConfigScheduleOptions" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatatransferconfig"

&googlebigquerydatatransferconfig.GoogleBigqueryDataTransferConfigScheduleOptions {
	DisableAutoScheduling: interface{},
	EndTime: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions.property.disableAutoScheduling">DisableAutoScheduling</a></code> | <code>interface{}</code> | If true, automatic scheduling of data transfer runs for this configuration will be disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions.property.endTime">EndTime</a></code> | <code>*string</code> | Defines time to stop scheduling transfer runs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions.property.startTime">StartTime</a></code> | <code>*string</code> | Specifies time to start scheduling transfer runs. |

---

##### `DisableAutoScheduling`<sup>Optional</sup> <a name="DisableAutoScheduling" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions.property.disableAutoScheduling"></a>

```go
DisableAutoScheduling interface{}
```

- *Type:* interface{}

If true, automatic scheduling of data transfer runs for this configuration will be disabled.

The runs can be started on ad-hoc
basis using transferConfigs.startManualRuns API. When automatic
scheduling is disabled, the TransferConfig.schedule field will
be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#disable_auto_scheduling GoogleBigqueryDataTransferConfig#disable_auto_scheduling}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Defines time to stop scheduling transfer runs.

A transfer run cannot be
scheduled at or after the end time. The end time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#end_time GoogleBigqueryDataTransferConfig#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Specifies time to start scheduling transfer runs.

The first run will be
scheduled at or after the start time according to a recurrence pattern
defined in the schedule string. The start time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#start_time GoogleBigqueryDataTransferConfig#start_time}

---

### GoogleBigqueryDataTransferConfigSensitiveParams <a name="GoogleBigqueryDataTransferConfigSensitiveParams" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatatransferconfig"

&googlebigquerydatatransferconfig.GoogleBigqueryDataTransferConfigSensitiveParams {
	SecretAccessKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | The Secret Access Key of the AWS account transferring data from. |

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams.property.secretAccessKey"></a>

```go
SecretAccessKey *string
```

- *Type:* *string

The Secret Access Key of the AWS account transferring data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#secret_access_key GoogleBigqueryDataTransferConfig#secret_access_key}

---

### GoogleBigqueryDataTransferConfigTimeouts <a name="GoogleBigqueryDataTransferConfigTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatatransferconfig"

&googlebigquerydatatransferconfig.GoogleBigqueryDataTransferConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#create GoogleBigqueryDataTransferConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#delete GoogleBigqueryDataTransferConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#update GoogleBigqueryDataTransferConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#create GoogleBigqueryDataTransferConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#delete GoogleBigqueryDataTransferConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigquery_data_transfer_config#update GoogleBigqueryDataTransferConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference <a name="GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatatransferconfig"

googlebigquerydatatransferconfig.NewGoogleBigqueryDataTransferConfigEmailPreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmailInput">EnableFailureEmailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmail">EnableFailureEmail</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences">GoogleBigqueryDataTransferConfigEmailPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableFailureEmailInput`<sup>Optional</sup> <a name="EnableFailureEmailInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmailInput"></a>

```go
func EnableFailureEmailInput() interface{}
```

- *Type:* interface{}

---

##### `EnableFailureEmail`<sup>Required</sup> <a name="EnableFailureEmail" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmail"></a>

```go
func EnableFailureEmail() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryDataTransferConfigEmailPreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences">GoogleBigqueryDataTransferConfigEmailPreferences</a>

---


### GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference <a name="GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatatransferconfig"

googlebigquerydatatransferconfig.NewGoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration">GoogleBigqueryDataTransferConfigEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryDataTransferConfigEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration">GoogleBigqueryDataTransferConfigEncryptionConfiguration</a>

---


### GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference <a name="GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatatransferconfig"

googlebigquerydatatransferconfig.NewGoogleBigqueryDataTransferConfigScheduleOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.resetDisableAutoScheduling">ResetDisableAutoScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableAutoScheduling` <a name="ResetDisableAutoScheduling" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.resetDisableAutoScheduling"></a>

```go
func ResetDisableAutoScheduling()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoSchedulingInput">DisableAutoSchedulingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoScheduling">DisableAutoScheduling</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions">GoogleBigqueryDataTransferConfigScheduleOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableAutoSchedulingInput`<sup>Optional</sup> <a name="DisableAutoSchedulingInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoSchedulingInput"></a>

```go
func DisableAutoSchedulingInput() interface{}
```

- *Type:* interface{}

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `DisableAutoScheduling`<sup>Required</sup> <a name="DisableAutoScheduling" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoScheduling"></a>

```go
func DisableAutoScheduling() interface{}
```

- *Type:* interface{}

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryDataTransferConfigScheduleOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions">GoogleBigqueryDataTransferConfigScheduleOptions</a>

---


### GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference <a name="GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatatransferconfig"

googlebigquerydatatransferconfig.NewGoogleBigqueryDataTransferConfigSensitiveParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams">GoogleBigqueryDataTransferConfigSensitiveParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKeyInput"></a>

```go
func SecretAccessKeyInput() *string
```

- *Type:* *string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKey"></a>

```go
func SecretAccessKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryDataTransferConfigSensitiveParams
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams">GoogleBigqueryDataTransferConfigSensitiveParams</a>

---


### GoogleBigqueryDataTransferConfigTimeoutsOutputReference <a name="GoogleBigqueryDataTransferConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydatatransferconfig"

googlebigquerydatatransferconfig.NewGoogleBigqueryDataTransferConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDataTransferConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



