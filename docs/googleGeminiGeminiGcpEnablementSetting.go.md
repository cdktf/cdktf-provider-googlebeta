# `googleGeminiGeminiGcpEnablementSetting` Submodule <a name="`googleGeminiGeminiGcpEnablementSetting` Submodule" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiGeminiGcpEnablementSetting <a name="GoogleGeminiGeminiGcpEnablementSetting" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_gemini_gcp_enablement_setting google_gemini_gemini_gcp_enablement_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegeminigeminigcpenablementsetting"

googlegeminigeminigcpenablementsetting.NewGoogleGeminiGeminiGcpEnablementSetting(scope Construct, id *string, config GoogleGeminiGeminiGcpEnablementSettingConfig) GoogleGeminiGeminiGcpEnablementSetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig">GoogleGeminiGeminiGcpEnablementSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig">GoogleGeminiGeminiGcpEnablementSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetEnableCustomerDataSharing">ResetEnableCustomerDataSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.putTimeouts"></a>

```go
func PutTimeouts(value GoogleGeminiGeminiGcpEnablementSettingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts">GoogleGeminiGeminiGcpEnablementSettingTimeouts</a>

---

##### `ResetEnableCustomerDataSharing` <a name="ResetEnableCustomerDataSharing" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetEnableCustomerDataSharing"></a>

```go
func ResetEnableCustomerDataSharing()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGeminiGeminiGcpEnablementSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegeminigeminigcpenablementsetting"

googlegeminigeminigcpenablementsetting.GoogleGeminiGeminiGcpEnablementSetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegeminigeminigcpenablementsetting"

googlegeminigeminigcpenablementsetting.GoogleGeminiGeminiGcpEnablementSetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegeminigeminigcpenablementsetting"

googlegeminigeminigcpenablementsetting.GoogleGeminiGeminiGcpEnablementSetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegeminigeminigcpenablementsetting"

googlegeminigeminigcpenablementsetting.GoogleGeminiGeminiGcpEnablementSetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleGeminiGeminiGcpEnablementSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleGeminiGeminiGcpEnablementSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleGeminiGeminiGcpEnablementSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGeminiGeminiGcpEnablementSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference">GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharingInput">EnableCustomerDataSharingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingIdInput">GeminiGcpEnablementSettingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharing">EnableCustomerDataSharing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingId">GeminiGcpEnablementSettingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.timeouts"></a>

```go
func Timeouts() GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference">GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `EnableCustomerDataSharingInput`<sup>Optional</sup> <a name="EnableCustomerDataSharingInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharingInput"></a>

```go
func EnableCustomerDataSharingInput() interface{}
```

- *Type:* interface{}

---

##### `GeminiGcpEnablementSettingIdInput`<sup>Optional</sup> <a name="GeminiGcpEnablementSettingIdInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingIdInput"></a>

```go
func GeminiGcpEnablementSettingIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EnableCustomerDataSharing`<sup>Required</sup> <a name="EnableCustomerDataSharing" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharing"></a>

```go
func EnableCustomerDataSharing() interface{}
```

- *Type:* interface{}

---

##### `GeminiGcpEnablementSettingId`<sup>Required</sup> <a name="GeminiGcpEnablementSettingId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingId"></a>

```go
func GeminiGcpEnablementSettingId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiGeminiGcpEnablementSettingConfig <a name="GoogleGeminiGeminiGcpEnablementSettingConfig" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegeminigeminigcpenablementsetting"

&googlegeminigeminigcpenablementsetting.GoogleGeminiGeminiGcpEnablementSettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GeminiGcpEnablementSettingId: *string,
	Location: *string,
	EnableCustomerDataSharing: interface{},
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.geminiGcpEnablementSettingId">GeminiGcpEnablementSettingId</a></code> | <code>*string</code> | Id of the Gemini Gcp Enablement setting. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.enableCustomerDataSharing">EnableCustomerDataSharing</a></code> | <code>interface{}</code> | Whether customer data sharing should be enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#id GoogleGeminiGeminiGcpEnablementSetting#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#project GoogleGeminiGeminiGcpEnablementSetting#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts">GoogleGeminiGeminiGcpEnablementSettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GeminiGcpEnablementSettingId`<sup>Required</sup> <a name="GeminiGcpEnablementSettingId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.geminiGcpEnablementSettingId"></a>

```go
GeminiGcpEnablementSettingId *string
```

- *Type:* *string

Id of the Gemini Gcp Enablement setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#gemini_gcp_enablement_setting_id GoogleGeminiGeminiGcpEnablementSetting#gemini_gcp_enablement_setting_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#location GoogleGeminiGeminiGcpEnablementSetting#location}

---

##### `EnableCustomerDataSharing`<sup>Optional</sup> <a name="EnableCustomerDataSharing" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.enableCustomerDataSharing"></a>

```go
EnableCustomerDataSharing interface{}
```

- *Type:* interface{}

Whether customer data sharing should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#enable_customer_data_sharing GoogleGeminiGeminiGcpEnablementSetting#enable_customer_data_sharing}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#id GoogleGeminiGeminiGcpEnablementSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#labels GoogleGeminiGeminiGcpEnablementSetting#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#project GoogleGeminiGeminiGcpEnablementSetting#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.timeouts"></a>

```go
Timeouts GoogleGeminiGeminiGcpEnablementSettingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts">GoogleGeminiGeminiGcpEnablementSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#timeouts GoogleGeminiGeminiGcpEnablementSetting#timeouts}

---

### GoogleGeminiGeminiGcpEnablementSettingTimeouts <a name="GoogleGeminiGeminiGcpEnablementSettingTimeouts" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegeminigeminigcpenablementsetting"

&googlegeminigeminigcpenablementsetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#create GoogleGeminiGeminiGcpEnablementSetting#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#delete GoogleGeminiGeminiGcpEnablementSetting#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#update GoogleGeminiGeminiGcpEnablementSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#create GoogleGeminiGeminiGcpEnablementSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#delete GoogleGeminiGeminiGcpEnablementSetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#update GoogleGeminiGeminiGcpEnablementSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference <a name="GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegeminigeminigcpenablementsetting"

googlegeminigeminigcpenablementsetting.NewGoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



