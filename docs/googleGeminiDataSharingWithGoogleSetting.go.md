# `googleGeminiDataSharingWithGoogleSetting` Submodule <a name="`googleGeminiDataSharingWithGoogleSetting` Submodule" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiDataSharingWithGoogleSetting <a name="GoogleGeminiDataSharingWithGoogleSetting" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_data_sharing_with_google_setting google_gemini_data_sharing_with_google_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminidatasharingwithgooglesetting"

googlegeminidatasharingwithgooglesetting.NewGoogleGeminiDataSharingWithGoogleSetting(scope Construct, id *string, config GoogleGeminiDataSharingWithGoogleSettingConfig) GoogleGeminiDataSharingWithGoogleSetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig">GoogleGeminiDataSharingWithGoogleSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig">GoogleGeminiDataSharingWithGoogleSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetEnablePreviewDataSharing">ResetEnablePreviewDataSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.putTimeouts"></a>

```go
func PutTimeouts(value GoogleGeminiDataSharingWithGoogleSettingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts">GoogleGeminiDataSharingWithGoogleSettingTimeouts</a>

---

##### `ResetEnablePreviewDataSharing` <a name="ResetEnablePreviewDataSharing" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetEnablePreviewDataSharing"></a>

```go
func ResetEnablePreviewDataSharing()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGeminiDataSharingWithGoogleSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminidatasharingwithgooglesetting"

googlegeminidatasharingwithgooglesetting.GoogleGeminiDataSharingWithGoogleSetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminidatasharingwithgooglesetting"

googlegeminidatasharingwithgooglesetting.GoogleGeminiDataSharingWithGoogleSetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminidatasharingwithgooglesetting"

googlegeminidatasharingwithgooglesetting.GoogleGeminiDataSharingWithGoogleSetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminidatasharingwithgooglesetting"

googlegeminidatasharingwithgooglesetting.GoogleGeminiDataSharingWithGoogleSetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleGeminiDataSharingWithGoogleSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleGeminiDataSharingWithGoogleSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleGeminiDataSharingWithGoogleSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_data_sharing_with_google_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGeminiDataSharingWithGoogleSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference">GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingIdInput">DataSharingWithGoogleSettingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharingInput">EnablePreviewDataSharingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingId">DataSharingWithGoogleSettingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharing">EnablePreviewDataSharing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.timeouts"></a>

```go
func Timeouts() GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference">GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DataSharingWithGoogleSettingIdInput`<sup>Optional</sup> <a name="DataSharingWithGoogleSettingIdInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingIdInput"></a>

```go
func DataSharingWithGoogleSettingIdInput() *string
```

- *Type:* *string

---

##### `EnablePreviewDataSharingInput`<sup>Optional</sup> <a name="EnablePreviewDataSharingInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharingInput"></a>

```go
func EnablePreviewDataSharingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataSharingWithGoogleSettingId`<sup>Required</sup> <a name="DataSharingWithGoogleSettingId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingId"></a>

```go
func DataSharingWithGoogleSettingId() *string
```

- *Type:* *string

---

##### `EnablePreviewDataSharing`<sup>Required</sup> <a name="EnablePreviewDataSharing" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharing"></a>

```go
func EnablePreviewDataSharing() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiDataSharingWithGoogleSettingConfig <a name="GoogleGeminiDataSharingWithGoogleSettingConfig" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminidatasharingwithgooglesetting"

&googlegeminidatasharingwithgooglesetting.GoogleGeminiDataSharingWithGoogleSettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataSharingWithGoogleSettingId: *string,
	EnablePreviewDataSharing: interface{},
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.dataSharingWithGoogleSettingId">DataSharingWithGoogleSettingId</a></code> | <code>*string</code> | Id of the Data Sharing With Google Setting. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.enablePreviewDataSharing">EnablePreviewDataSharing</a></code> | <code>interface{}</code> | Whether preview data sharing should be enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_data_sharing_with_google_setting#id GoogleGeminiDataSharingWithGoogleSetting#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_data_sharing_with_google_setting#project GoogleGeminiDataSharingWithGoogleSetting#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts">GoogleGeminiDataSharingWithGoogleSettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataSharingWithGoogleSettingId`<sup>Required</sup> <a name="DataSharingWithGoogleSettingId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.dataSharingWithGoogleSettingId"></a>

```go
DataSharingWithGoogleSettingId *string
```

- *Type:* *string

Id of the Data Sharing With Google Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_data_sharing_with_google_setting#data_sharing_with_google_setting_id GoogleGeminiDataSharingWithGoogleSetting#data_sharing_with_google_setting_id}

---

##### `EnablePreviewDataSharing`<sup>Optional</sup> <a name="EnablePreviewDataSharing" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.enablePreviewDataSharing"></a>

```go
EnablePreviewDataSharing interface{}
```

- *Type:* interface{}

Whether preview data sharing should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_data_sharing_with_google_setting#enable_preview_data_sharing GoogleGeminiDataSharingWithGoogleSetting#enable_preview_data_sharing}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_data_sharing_with_google_setting#id GoogleGeminiDataSharingWithGoogleSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_data_sharing_with_google_setting#labels GoogleGeminiDataSharingWithGoogleSetting#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_data_sharing_with_google_setting#location GoogleGeminiDataSharingWithGoogleSetting#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_data_sharing_with_google_setting#project GoogleGeminiDataSharingWithGoogleSetting#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.timeouts"></a>

```go
Timeouts GoogleGeminiDataSharingWithGoogleSettingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts">GoogleGeminiDataSharingWithGoogleSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_data_sharing_with_google_setting#timeouts GoogleGeminiDataSharingWithGoogleSetting#timeouts}

---

### GoogleGeminiDataSharingWithGoogleSettingTimeouts <a name="GoogleGeminiDataSharingWithGoogleSettingTimeouts" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminidatasharingwithgooglesetting"

&googlegeminidatasharingwithgooglesetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_data_sharing_with_google_setting#create GoogleGeminiDataSharingWithGoogleSetting#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_data_sharing_with_google_setting#delete GoogleGeminiDataSharingWithGoogleSetting#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_data_sharing_with_google_setting#update GoogleGeminiDataSharingWithGoogleSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_data_sharing_with_google_setting#create GoogleGeminiDataSharingWithGoogleSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_data_sharing_with_google_setting#delete GoogleGeminiDataSharingWithGoogleSetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_data_sharing_with_google_setting#update GoogleGeminiDataSharingWithGoogleSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference <a name="GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminidatasharingwithgooglesetting"

googlegeminidatasharingwithgooglesetting.NewGoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



