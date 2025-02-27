# `googleStorageInsightsReportConfig` Submodule <a name="`googleStorageInsightsReportConfig` Submodule" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageInsightsReportConfig <a name="GoogleStorageInsightsReportConfig" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config google_storage_insights_report_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

googlestorageinsightsreportconfig.NewGoogleStorageInsightsReportConfig(scope Construct, id *string, config GoogleStorageInsightsReportConfigConfig) GoogleStorageInsightsReportConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig">GoogleStorageInsightsReportConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig">GoogleStorageInsightsReportConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.putCsvOptions">PutCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.putFrequencyOptions">PutFrequencyOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.putObjectMetadataReportOptions">PutObjectMetadataReportOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.resetFrequencyOptions">ResetFrequencyOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.resetObjectMetadataReportOptions">ResetObjectMetadataReportOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCsvOptions` <a name="PutCsvOptions" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.putCsvOptions"></a>

```go
func PutCsvOptions(value GoogleStorageInsightsReportConfigCsvOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.putCsvOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptions">GoogleStorageInsightsReportConfigCsvOptions</a>

---

##### `PutFrequencyOptions` <a name="PutFrequencyOptions" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.putFrequencyOptions"></a>

```go
func PutFrequencyOptions(value GoogleStorageInsightsReportConfigFrequencyOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.putFrequencyOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptions">GoogleStorageInsightsReportConfigFrequencyOptions</a>

---

##### `PutObjectMetadataReportOptions` <a name="PutObjectMetadataReportOptions" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.putObjectMetadataReportOptions"></a>

```go
func PutObjectMetadataReportOptions(value GoogleStorageInsightsReportConfigObjectMetadataReportOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.putObjectMetadataReportOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptions">GoogleStorageInsightsReportConfigObjectMetadataReportOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleStorageInsightsReportConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeouts">GoogleStorageInsightsReportConfigTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFrequencyOptions` <a name="ResetFrequencyOptions" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.resetFrequencyOptions"></a>

```go
func ResetFrequencyOptions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetObjectMetadataReportOptions` <a name="ResetObjectMetadataReportOptions" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.resetObjectMetadataReportOptions"></a>

```go
func ResetObjectMetadataReportOptions()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageInsightsReportConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

googlestorageinsightsreportconfig.GoogleStorageInsightsReportConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

googlestorageinsightsreportconfig.GoogleStorageInsightsReportConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

googlestorageinsightsreportconfig.GoogleStorageInsightsReportConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

googlestorageinsightsreportconfig.GoogleStorageInsightsReportConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleStorageInsightsReportConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleStorageInsightsReportConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleStorageInsightsReportConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageInsightsReportConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference">GoogleStorageInsightsReportConfigCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.frequencyOptions">FrequencyOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference">GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.objectMetadataReportOptions">ObjectMetadataReportOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference">GoogleStorageInsightsReportConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.csvOptionsInput">CsvOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptions">GoogleStorageInsightsReportConfigCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.frequencyOptionsInput">FrequencyOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptions">GoogleStorageInsightsReportConfigFrequencyOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.objectMetadataReportOptionsInput">ObjectMetadataReportOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptions">GoogleStorageInsightsReportConfigObjectMetadataReportOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CsvOptions`<sup>Required</sup> <a name="CsvOptions" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.csvOptions"></a>

```go
func CsvOptions() GoogleStorageInsightsReportConfigCsvOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference">GoogleStorageInsightsReportConfigCsvOptionsOutputReference</a>

---

##### `FrequencyOptions`<sup>Required</sup> <a name="FrequencyOptions" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.frequencyOptions"></a>

```go
func FrequencyOptions() GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference">GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectMetadataReportOptions`<sup>Required</sup> <a name="ObjectMetadataReportOptions" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.objectMetadataReportOptions"></a>

```go
func ObjectMetadataReportOptions() GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.timeouts"></a>

```go
func Timeouts() GoogleStorageInsightsReportConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference">GoogleStorageInsightsReportConfigTimeoutsOutputReference</a>

---

##### `CsvOptionsInput`<sup>Optional</sup> <a name="CsvOptionsInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.csvOptionsInput"></a>

```go
func CsvOptionsInput() GoogleStorageInsightsReportConfigCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptions">GoogleStorageInsightsReportConfigCsvOptions</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FrequencyOptionsInput`<sup>Optional</sup> <a name="FrequencyOptionsInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.frequencyOptionsInput"></a>

```go
func FrequencyOptionsInput() GoogleStorageInsightsReportConfigFrequencyOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptions">GoogleStorageInsightsReportConfigFrequencyOptions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ObjectMetadataReportOptionsInput`<sup>Optional</sup> <a name="ObjectMetadataReportOptionsInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.objectMetadataReportOptionsInput"></a>

```go
func ObjectMetadataReportOptionsInput() GoogleStorageInsightsReportConfigObjectMetadataReportOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptions">GoogleStorageInsightsReportConfigObjectMetadataReportOptions</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageInsightsReportConfigConfig <a name="GoogleStorageInsightsReportConfigConfig" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

&googlestorageinsightsreportconfig.GoogleStorageInsightsReportConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CsvOptions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptions,
	Location: *string,
	DisplayName: *string,
	FrequencyOptions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptions,
	Id: *string,
	ObjectMetadataReportOptions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptions,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptions">GoogleStorageInsightsReportConfigCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.location">Location</a></code> | <code>*string</code> | The location of the ReportConfig. The source and destination buckets specified in the ReportConfig must be in the same location. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The editable display name of the inventory report configuration. Has a limit of 256 characters. Can be empty. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.frequencyOptions">FrequencyOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptions">GoogleStorageInsightsReportConfigFrequencyOptions</a></code> | frequency_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#id GoogleStorageInsightsReportConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.objectMetadataReportOptions">ObjectMetadataReportOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptions">GoogleStorageInsightsReportConfigObjectMetadataReportOptions</a></code> | object_metadata_report_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#project GoogleStorageInsightsReportConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeouts">GoogleStorageInsightsReportConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CsvOptions`<sup>Required</sup> <a name="CsvOptions" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.csvOptions"></a>

```go
CsvOptions GoogleStorageInsightsReportConfigCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptions">GoogleStorageInsightsReportConfigCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#csv_options GoogleStorageInsightsReportConfig#csv_options}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the ReportConfig. The source and destination buckets specified in the ReportConfig must be in the same location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#location GoogleStorageInsightsReportConfig#location}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The editable display name of the inventory report configuration. Has a limit of 256 characters. Can be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#display_name GoogleStorageInsightsReportConfig#display_name}

---

##### `FrequencyOptions`<sup>Optional</sup> <a name="FrequencyOptions" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.frequencyOptions"></a>

```go
FrequencyOptions GoogleStorageInsightsReportConfigFrequencyOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptions">GoogleStorageInsightsReportConfigFrequencyOptions</a>

frequency_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#frequency_options GoogleStorageInsightsReportConfig#frequency_options}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#id GoogleStorageInsightsReportConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ObjectMetadataReportOptions`<sup>Optional</sup> <a name="ObjectMetadataReportOptions" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.objectMetadataReportOptions"></a>

```go
ObjectMetadataReportOptions GoogleStorageInsightsReportConfigObjectMetadataReportOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptions">GoogleStorageInsightsReportConfigObjectMetadataReportOptions</a>

object_metadata_report_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#object_metadata_report_options GoogleStorageInsightsReportConfig#object_metadata_report_options}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#project GoogleStorageInsightsReportConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleStorageInsightsReportConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeouts">GoogleStorageInsightsReportConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#timeouts GoogleStorageInsightsReportConfig#timeouts}

---

### GoogleStorageInsightsReportConfigCsvOptions <a name="GoogleStorageInsightsReportConfigCsvOptions" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

&googlestorageinsightsreportconfig.GoogleStorageInsightsReportConfigCsvOptions {
	Delimiter: *string,
	HeaderRequired: interface{},
	RecordSeparator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptions.property.delimiter">Delimiter</a></code> | <code>*string</code> | The delimiter used to separate the fields in the inventory report CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptions.property.headerRequired">HeaderRequired</a></code> | <code>interface{}</code> | The boolean that indicates whether or not headers are included in the inventory report CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptions.property.recordSeparator">RecordSeparator</a></code> | <code>*string</code> | The character used to separate the records in the inventory report CSV file. |

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptions.property.delimiter"></a>

```go
Delimiter *string
```

- *Type:* *string

The delimiter used to separate the fields in the inventory report CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#delimiter GoogleStorageInsightsReportConfig#delimiter}

---

##### `HeaderRequired`<sup>Optional</sup> <a name="HeaderRequired" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptions.property.headerRequired"></a>

```go
HeaderRequired interface{}
```

- *Type:* interface{}

The boolean that indicates whether or not headers are included in the inventory report CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#header_required GoogleStorageInsightsReportConfig#header_required}

---

##### `RecordSeparator`<sup>Optional</sup> <a name="RecordSeparator" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptions.property.recordSeparator"></a>

```go
RecordSeparator *string
```

- *Type:* *string

The character used to separate the records in the inventory report CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#record_separator GoogleStorageInsightsReportConfig#record_separator}

---

### GoogleStorageInsightsReportConfigFrequencyOptions <a name="GoogleStorageInsightsReportConfigFrequencyOptions" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

&googlestorageinsightsreportconfig.GoogleStorageInsightsReportConfigFrequencyOptions {
	EndDate: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDate,
	Frequency: *string,
	StartDate: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDate,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptions.property.endDate">EndDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDate">GoogleStorageInsightsReportConfigFrequencyOptionsEndDate</a></code> | end_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptions.property.frequency">Frequency</a></code> | <code>*string</code> | The frequency in which inventory reports are generated. Values are DAILY or WEEKLY. Possible values: ["DAILY", "WEEKLY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptions.property.startDate">StartDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDate">GoogleStorageInsightsReportConfigFrequencyOptionsStartDate</a></code> | start_date block. |

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptions.property.endDate"></a>

```go
EndDate GoogleStorageInsightsReportConfigFrequencyOptionsEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDate">GoogleStorageInsightsReportConfigFrequencyOptionsEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#end_date GoogleStorageInsightsReportConfig#end_date}

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptions.property.frequency"></a>

```go
Frequency *string
```

- *Type:* *string

The frequency in which inventory reports are generated. Values are DAILY or WEEKLY. Possible values: ["DAILY", "WEEKLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#frequency GoogleStorageInsightsReportConfig#frequency}

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptions.property.startDate"></a>

```go
StartDate GoogleStorageInsightsReportConfigFrequencyOptionsStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDate">GoogleStorageInsightsReportConfigFrequencyOptionsStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#start_date GoogleStorageInsightsReportConfig#start_date}

---

### GoogleStorageInsightsReportConfigFrequencyOptionsEndDate <a name="GoogleStorageInsightsReportConfigFrequencyOptionsEndDate" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

&googlestorageinsightsreportconfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDate {
	Day: *f64,
	Month: *f64,
	Year: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDate.property.day">Day</a></code> | <code>*f64</code> | The day of the month to stop generating inventory reports. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDate.property.month">Month</a></code> | <code>*f64</code> | The month to stop generating inventory reports. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDate.property.year">Year</a></code> | <code>*f64</code> | The year to stop generating inventory reports. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDate.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

The day of the month to stop generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#day GoogleStorageInsightsReportConfig#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDate.property.month"></a>

```go
Month *f64
```

- *Type:* *f64

The month to stop generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#month GoogleStorageInsightsReportConfig#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDate.property.year"></a>

```go
Year *f64
```

- *Type:* *f64

The year to stop generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#year GoogleStorageInsightsReportConfig#year}

---

### GoogleStorageInsightsReportConfigFrequencyOptionsStartDate <a name="GoogleStorageInsightsReportConfigFrequencyOptionsStartDate" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

&googlestorageinsightsreportconfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDate {
	Day: *f64,
	Month: *f64,
	Year: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDate.property.day">Day</a></code> | <code>*f64</code> | The day of the month to start generating inventory reports. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDate.property.month">Month</a></code> | <code>*f64</code> | The month to start generating inventory reports. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDate.property.year">Year</a></code> | <code>*f64</code> | The year to start generating inventory reports. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDate.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

The day of the month to start generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#day GoogleStorageInsightsReportConfig#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDate.property.month"></a>

```go
Month *f64
```

- *Type:* *f64

The month to start generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#month GoogleStorageInsightsReportConfig#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDate.property.year"></a>

```go
Year *f64
```

- *Type:* *f64

The year to start generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#year GoogleStorageInsightsReportConfig#year}

---

### GoogleStorageInsightsReportConfigObjectMetadataReportOptions <a name="GoogleStorageInsightsReportConfigObjectMetadataReportOptions" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

&googlestorageinsightsreportconfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptions {
	MetadataFields: *[]*string,
	StorageDestinationOptions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions,
	StorageFilters: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptions.property.metadataFields">MetadataFields</a></code> | <code>*[]*string</code> | The metadata fields included in an inventory report. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptions.property.storageDestinationOptions">StorageDestinationOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a></code> | storage_destination_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptions.property.storageFilters">StorageFilters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a></code> | storage_filters block. |

---

##### `MetadataFields`<sup>Required</sup> <a name="MetadataFields" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptions.property.metadataFields"></a>

```go
MetadataFields *[]*string
```

- *Type:* *[]*string

The metadata fields included in an inventory report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#metadata_fields GoogleStorageInsightsReportConfig#metadata_fields}

---

##### `StorageDestinationOptions`<sup>Required</sup> <a name="StorageDestinationOptions" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptions.property.storageDestinationOptions"></a>

```go
StorageDestinationOptions GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a>

storage_destination_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#storage_destination_options GoogleStorageInsightsReportConfig#storage_destination_options}

---

##### `StorageFilters`<sup>Optional</sup> <a name="StorageFilters" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptions.property.storageFilters"></a>

```go
StorageFilters GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a>

storage_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#storage_filters GoogleStorageInsightsReportConfig#storage_filters}

---

### GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions <a name="GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

&googlestorageinsightsreportconfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions {
	Bucket: *string,
	DestinationPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.property.bucket">Bucket</a></code> | <code>*string</code> | The destination bucket that stores the generated inventory reports. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.property.destinationPath">DestinationPath</a></code> | <code>*string</code> | The path within the destination bucket to store generated inventory reports. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The destination bucket that stores the generated inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#bucket GoogleStorageInsightsReportConfig#bucket}

---

##### `DestinationPath`<sup>Optional</sup> <a name="DestinationPath" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.property.destinationPath"></a>

```go
DestinationPath *string
```

- *Type:* *string

The path within the destination bucket to store generated inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#destination_path GoogleStorageInsightsReportConfig#destination_path}

---

### GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters <a name="GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

&googlestorageinsightsreportconfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters {
	Bucket: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters.property.bucket">Bucket</a></code> | <code>*string</code> | The filter to use when specifying which bucket to generate inventory reports for. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The filter to use when specifying which bucket to generate inventory reports for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#bucket GoogleStorageInsightsReportConfig#bucket}

---

### GoogleStorageInsightsReportConfigTimeouts <a name="GoogleStorageInsightsReportConfigTimeouts" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

&googlestorageinsightsreportconfig.GoogleStorageInsightsReportConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#create GoogleStorageInsightsReportConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#delete GoogleStorageInsightsReportConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#update GoogleStorageInsightsReportConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#create GoogleStorageInsightsReportConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#delete GoogleStorageInsightsReportConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_insights_report_config#update GoogleStorageInsightsReportConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageInsightsReportConfigCsvOptionsOutputReference <a name="GoogleStorageInsightsReportConfigCsvOptionsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

googlestorageinsightsreportconfig.NewGoogleStorageInsightsReportConfigCsvOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageInsightsReportConfigCsvOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.resetHeaderRequired">ResetHeaderRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.resetRecordSeparator">ResetRecordSeparator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.resetDelimiter"></a>

```go
func ResetDelimiter()
```

##### `ResetHeaderRequired` <a name="ResetHeaderRequired" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.resetHeaderRequired"></a>

```go
func ResetHeaderRequired()
```

##### `ResetRecordSeparator` <a name="ResetRecordSeparator" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.resetRecordSeparator"></a>

```go
func ResetRecordSeparator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.property.headerRequiredInput">HeaderRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.property.recordSeparatorInput">RecordSeparatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.property.headerRequired">HeaderRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.property.recordSeparator">RecordSeparator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptions">GoogleStorageInsightsReportConfigCsvOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.property.delimiterInput"></a>

```go
func DelimiterInput() *string
```

- *Type:* *string

---

##### `HeaderRequiredInput`<sup>Optional</sup> <a name="HeaderRequiredInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.property.headerRequiredInput"></a>

```go
func HeaderRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `RecordSeparatorInput`<sup>Optional</sup> <a name="RecordSeparatorInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.property.recordSeparatorInput"></a>

```go
func RecordSeparatorInput() *string
```

- *Type:* *string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `HeaderRequired`<sup>Required</sup> <a name="HeaderRequired" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.property.headerRequired"></a>

```go
func HeaderRequired() interface{}
```

- *Type:* interface{}

---

##### `RecordSeparator`<sup>Required</sup> <a name="RecordSeparator" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.property.recordSeparator"></a>

```go
func RecordSeparator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageInsightsReportConfigCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigCsvOptions">GoogleStorageInsightsReportConfigCsvOptions</a>

---


### GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference <a name="GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

googlestorageinsightsreportconfig.NewGoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.monthInput">MonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.yearInput">YearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDate">GoogleStorageInsightsReportConfigFrequencyOptionsEndDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.monthInput"></a>

```go
func MonthInput() *f64
```

- *Type:* *f64

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.yearInput"></a>

```go
func YearInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageInsightsReportConfigFrequencyOptionsEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDate">GoogleStorageInsightsReportConfigFrequencyOptionsEndDate</a>

---


### GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference <a name="GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

googlestorageinsightsreportconfig.NewGoogleStorageInsightsReportConfigFrequencyOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.putEndDate">PutEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.putStartDate">PutStartDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndDate` <a name="PutEndDate" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.putEndDate"></a>

```go
func PutEndDate(value GoogleStorageInsightsReportConfigFrequencyOptionsEndDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDate">GoogleStorageInsightsReportConfigFrequencyOptionsEndDate</a>

---

##### `PutStartDate` <a name="PutStartDate" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.putStartDate"></a>

```go
func PutStartDate(value GoogleStorageInsightsReportConfigFrequencyOptionsStartDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDate">GoogleStorageInsightsReportConfigFrequencyOptionsStartDate</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.property.endDate">EndDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference">GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.property.startDate">StartDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference">GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.property.endDateInput">EndDateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDate">GoogleStorageInsightsReportConfigFrequencyOptionsEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.property.startDateInput">StartDateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDate">GoogleStorageInsightsReportConfigFrequencyOptionsStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptions">GoogleStorageInsightsReportConfigFrequencyOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.property.endDate"></a>

```go
func EndDate() GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference">GoogleStorageInsightsReportConfigFrequencyOptionsEndDateOutputReference</a>

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.property.startDate"></a>

```go
func StartDate() GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference">GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference</a>

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.property.endDateInput"></a>

```go
func EndDateInput() GoogleStorageInsightsReportConfigFrequencyOptionsEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsEndDate">GoogleStorageInsightsReportConfigFrequencyOptionsEndDate</a>

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.property.frequencyInput"></a>

```go
func FrequencyInput() *string
```

- *Type:* *string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.property.startDateInput"></a>

```go
func StartDateInput() GoogleStorageInsightsReportConfigFrequencyOptionsStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDate">GoogleStorageInsightsReportConfigFrequencyOptionsStartDate</a>

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageInsightsReportConfigFrequencyOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptions">GoogleStorageInsightsReportConfigFrequencyOptions</a>

---


### GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference <a name="GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

googlestorageinsightsreportconfig.NewGoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.monthInput">MonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.yearInput">YearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDate">GoogleStorageInsightsReportConfigFrequencyOptionsStartDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.monthInput"></a>

```go
func MonthInput() *f64
```

- *Type:* *f64

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.yearInput"></a>

```go
func YearInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageInsightsReportConfigFrequencyOptionsStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigFrequencyOptionsStartDate">GoogleStorageInsightsReportConfigFrequencyOptionsStartDate</a>

---


### GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference <a name="GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

googlestorageinsightsreportconfig.NewGoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageDestinationOptions">PutStorageDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageFilters">PutStorageFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resetStorageFilters">ResetStorageFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStorageDestinationOptions` <a name="PutStorageDestinationOptions" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageDestinationOptions"></a>

```go
func PutStorageDestinationOptions(value GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageDestinationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a>

---

##### `PutStorageFilters` <a name="PutStorageFilters" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageFilters"></a>

```go
func PutStorageFilters(value GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a>

---

##### `ResetStorageFilters` <a name="ResetStorageFilters" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resetStorageFilters"></a>

```go
func ResetStorageFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageDestinationOptions">StorageDestinationOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageFilters">StorageFilters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.metadataFieldsInput">MetadataFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageDestinationOptionsInput">StorageDestinationOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageFiltersInput">StorageFiltersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.metadataFields">MetadataFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptions">GoogleStorageInsightsReportConfigObjectMetadataReportOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageDestinationOptions`<sup>Required</sup> <a name="StorageDestinationOptions" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageDestinationOptions"></a>

```go
func StorageDestinationOptions() GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference</a>

---

##### `StorageFilters`<sup>Required</sup> <a name="StorageFilters" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageFilters"></a>

```go
func StorageFilters() GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference</a>

---

##### `MetadataFieldsInput`<sup>Optional</sup> <a name="MetadataFieldsInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.metadataFieldsInput"></a>

```go
func MetadataFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StorageDestinationOptionsInput`<sup>Optional</sup> <a name="StorageDestinationOptionsInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageDestinationOptionsInput"></a>

```go
func StorageDestinationOptionsInput() GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a>

---

##### `StorageFiltersInput`<sup>Optional</sup> <a name="StorageFiltersInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageFiltersInput"></a>

```go
func StorageFiltersInput() GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a>

---

##### `MetadataFields`<sup>Required</sup> <a name="MetadataFields" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.metadataFields"></a>

```go
func MetadataFields() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageInsightsReportConfigObjectMetadataReportOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptions">GoogleStorageInsightsReportConfigObjectMetadataReportOptions</a>

---


### GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference <a name="GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

googlestorageinsightsreportconfig.NewGoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resetDestinationPath">ResetDestinationPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPath` <a name="ResetDestinationPath" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resetDestinationPath"></a>

```go
func ResetDestinationPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.destinationPathInput">DestinationPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.destinationPath">DestinationPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `DestinationPathInput`<sup>Optional</sup> <a name="DestinationPathInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.destinationPathInput"></a>

```go
func DestinationPathInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `DestinationPath`<sup>Required</sup> <a name="DestinationPath" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.destinationPath"></a>

```go
func DestinationPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a>

---


### GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference <a name="GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

googlestorageinsightsreportconfig.NewGoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resetBucket"></a>

```go
func ResetBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">GoogleStorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a>

---


### GoogleStorageInsightsReportConfigTimeoutsOutputReference <a name="GoogleStorageInsightsReportConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlestorageinsightsreportconfig"

googlestorageinsightsreportconfig.NewGoogleStorageInsightsReportConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageInsightsReportConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsReportConfig.GoogleStorageInsightsReportConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



