# `googleDialogflowCxWebhook` Submodule <a name="`googleDialogflowCxWebhook` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxWebhook <a name="GoogleDialogflowCxWebhook" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook google_dialogflow_cx_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

googledialogflowcxwebhook.NewGoogleDialogflowCxWebhook(scope Construct, id *string, config GoogleDialogflowCxWebhookConfig) GoogleDialogflowCxWebhook
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig">GoogleDialogflowCxWebhookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig">GoogleDialogflowCxWebhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.putGenericWebService">PutGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.putServiceDirectory">PutServiceDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetEnableSpellCorrection">ResetEnableSpellCorrection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetEnableStackdriverLogging">ResetEnableStackdriverLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetGenericWebService">ResetGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetSecuritySettings">ResetSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetServiceDirectory">ResetServiceDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGenericWebService` <a name="PutGenericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.putGenericWebService"></a>

```go
func PutGenericWebService(value GoogleDialogflowCxWebhookGenericWebService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.putGenericWebService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService">GoogleDialogflowCxWebhookGenericWebService</a>

---

##### `PutServiceDirectory` <a name="PutServiceDirectory" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.putServiceDirectory"></a>

```go
func PutServiceDirectory(value GoogleDialogflowCxWebhookServiceDirectory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.putServiceDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory">GoogleDialogflowCxWebhookServiceDirectory</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDialogflowCxWebhookTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts">GoogleDialogflowCxWebhookTimeouts</a>

---

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetEnableSpellCorrection` <a name="ResetEnableSpellCorrection" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetEnableSpellCorrection"></a>

```go
func ResetEnableSpellCorrection()
```

##### `ResetEnableStackdriverLogging` <a name="ResetEnableStackdriverLogging" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetEnableStackdriverLogging"></a>

```go
func ResetEnableStackdriverLogging()
```

##### `ResetGenericWebService` <a name="ResetGenericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetGenericWebService"></a>

```go
func ResetGenericWebService()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetId"></a>

```go
func ResetId()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetParent"></a>

```go
func ResetParent()
```

##### `ResetSecuritySettings` <a name="ResetSecuritySettings" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetSecuritySettings"></a>

```go
func ResetSecuritySettings()
```

##### `ResetServiceDirectory` <a name="ResetServiceDirectory" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetServiceDirectory"></a>

```go
func ResetServiceDirectory()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxWebhook resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

googledialogflowcxwebhook.GoogleDialogflowCxWebhook_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

googledialogflowcxwebhook.GoogleDialogflowCxWebhook_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

googledialogflowcxwebhook.GoogleDialogflowCxWebhook_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

googledialogflowcxwebhook.GoogleDialogflowCxWebhook_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDialogflowCxWebhook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDialogflowCxWebhook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDialogflowCxWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference">GoogleDialogflowCxWebhookGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.serviceDirectory">ServiceDirectory</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference">GoogleDialogflowCxWebhookServiceDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.startFlow">StartFlow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference">GoogleDialogflowCxWebhookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.enableSpellCorrectionInput">EnableSpellCorrectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.enableStackdriverLoggingInput">EnableStackdriverLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.genericWebServiceInput">GenericWebServiceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService">GoogleDialogflowCxWebhookGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.securitySettingsInput">SecuritySettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.serviceDirectoryInput">ServiceDirectoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory">GoogleDialogflowCxWebhookServiceDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.enableSpellCorrection">EnableSpellCorrection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.enableStackdriverLogging">EnableStackdriverLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.securitySettings">SecuritySettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GenericWebService`<sup>Required</sup> <a name="GenericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.genericWebService"></a>

```go
func GenericWebService() GoogleDialogflowCxWebhookGenericWebServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference">GoogleDialogflowCxWebhookGenericWebServiceOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceDirectory`<sup>Required</sup> <a name="ServiceDirectory" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.serviceDirectory"></a>

```go
func ServiceDirectory() GoogleDialogflowCxWebhookServiceDirectoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference">GoogleDialogflowCxWebhookServiceDirectoryOutputReference</a>

---

##### `StartFlow`<sup>Required</sup> <a name="StartFlow" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.startFlow"></a>

```go
func StartFlow() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.timeouts"></a>

```go
func Timeouts() GoogleDialogflowCxWebhookTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference">GoogleDialogflowCxWebhookTimeoutsOutputReference</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnableSpellCorrectionInput`<sup>Optional</sup> <a name="EnableSpellCorrectionInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.enableSpellCorrectionInput"></a>

```go
func EnableSpellCorrectionInput() interface{}
```

- *Type:* interface{}

---

##### `EnableStackdriverLoggingInput`<sup>Optional</sup> <a name="EnableStackdriverLoggingInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.enableStackdriverLoggingInput"></a>

```go
func EnableStackdriverLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `GenericWebServiceInput`<sup>Optional</sup> <a name="GenericWebServiceInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.genericWebServiceInput"></a>

```go
func GenericWebServiceInput() GoogleDialogflowCxWebhookGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService">GoogleDialogflowCxWebhookGenericWebService</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `SecuritySettingsInput`<sup>Optional</sup> <a name="SecuritySettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.securitySettingsInput"></a>

```go
func SecuritySettingsInput() *string
```

- *Type:* *string

---

##### `ServiceDirectoryInput`<sup>Optional</sup> <a name="ServiceDirectoryInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.serviceDirectoryInput"></a>

```go
func ServiceDirectoryInput() GoogleDialogflowCxWebhookServiceDirectory
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory">GoogleDialogflowCxWebhookServiceDirectory</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnableSpellCorrection`<sup>Required</sup> <a name="EnableSpellCorrection" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.enableSpellCorrection"></a>

```go
func EnableSpellCorrection() interface{}
```

- *Type:* interface{}

---

##### `EnableStackdriverLogging`<sup>Required</sup> <a name="EnableStackdriverLogging" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.enableStackdriverLogging"></a>

```go
func EnableStackdriverLogging() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `SecuritySettings`<sup>Required</sup> <a name="SecuritySettings" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.securitySettings"></a>

```go
func SecuritySettings() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxWebhookConfig <a name="GoogleDialogflowCxWebhookConfig" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

&googledialogflowcxwebhook.GoogleDialogflowCxWebhookConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Disabled: interface{},
	EnableSpellCorrection: interface{},
	EnableStackdriverLogging: interface{},
	GenericWebService: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService,
	Id: *string,
	Parent: *string,
	SecuritySettings: *string,
	ServiceDirectory: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory,
	Timeout: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable name of the webhook, unique within the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Indicates whether the webhook is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.enableSpellCorrection">EnableSpellCorrection</a></code> | <code>interface{}</code> | Deprecated. Indicates if automatic spell correction is enabled in detect intent requests. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.enableStackdriverLogging">EnableStackdriverLogging</a></code> | <code>interface{}</code> | Deprecated. Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService">GoogleDialogflowCxWebhookGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#id GoogleDialogflowCxWebhook#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.parent">Parent</a></code> | <code>*string</code> | The agent to create a webhook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.securitySettings">SecuritySettings</a></code> | <code>*string</code> | Deprecated. Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.serviceDirectory">ServiceDirectory</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory">GoogleDialogflowCxWebhookServiceDirectory</a></code> | service_directory block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.timeout">Timeout</a></code> | <code>*string</code> | Webhook execution timeout. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts">GoogleDialogflowCxWebhookTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable name of the webhook, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#display_name GoogleDialogflowCxWebhook#display_name}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Indicates whether the webhook is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#disabled GoogleDialogflowCxWebhook#disabled}

---

##### `EnableSpellCorrection`<sup>Optional</sup> <a name="EnableSpellCorrection" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.enableSpellCorrection"></a>

```go
EnableSpellCorrection interface{}
```

- *Type:* interface{}

Deprecated. Indicates if automatic spell correction is enabled in detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#enable_spell_correction GoogleDialogflowCxWebhook#enable_spell_correction}

---

##### `EnableStackdriverLogging`<sup>Optional</sup> <a name="EnableStackdriverLogging" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.enableStackdriverLogging"></a>

```go
EnableStackdriverLogging interface{}
```

- *Type:* interface{}

Deprecated. Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#enable_stackdriver_logging GoogleDialogflowCxWebhook#enable_stackdriver_logging}

---

##### `GenericWebService`<sup>Optional</sup> <a name="GenericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.genericWebService"></a>

```go
GenericWebService GoogleDialogflowCxWebhookGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService">GoogleDialogflowCxWebhookGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#generic_web_service GoogleDialogflowCxWebhook#generic_web_service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#id GoogleDialogflowCxWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The agent to create a webhook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#parent GoogleDialogflowCxWebhook#parent}

---

##### `SecuritySettings`<sup>Optional</sup> <a name="SecuritySettings" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.securitySettings"></a>

```go
SecuritySettings *string
```

- *Type:* *string

Deprecated. Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#security_settings GoogleDialogflowCxWebhook#security_settings}

---

##### `ServiceDirectory`<sup>Optional</sup> <a name="ServiceDirectory" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.serviceDirectory"></a>

```go
ServiceDirectory GoogleDialogflowCxWebhookServiceDirectory
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory">GoogleDialogflowCxWebhookServiceDirectory</a>

service_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#service_directory GoogleDialogflowCxWebhook#service_directory}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Webhook execution timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#timeout GoogleDialogflowCxWebhook#timeout}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.timeouts"></a>

```go
Timeouts GoogleDialogflowCxWebhookTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts">GoogleDialogflowCxWebhookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#timeouts GoogleDialogflowCxWebhook#timeouts}

---

### GoogleDialogflowCxWebhookGenericWebService <a name="GoogleDialogflowCxWebhookGenericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

&googledialogflowcxwebhook.GoogleDialogflowCxWebhookGenericWebService {
	Uri: *string,
	AllowedCaCerts: *[]*string,
	HttpMethod: *string,
	OauthConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig,
	ParameterMapping: *map[string]*string,
	RequestBody: *string,
	RequestHeaders: *map[string]*string,
	SecretVersionForUsernamePassword: *string,
	SecretVersionsForRequestHeaders: interface{},
	ServiceAgentAuth: *string,
	WebhookType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.uri">Uri</a></code> | <code>*string</code> | The webhook URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.allowedCaCerts">AllowedCaCerts</a></code> | <code>*[]*string</code> | Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | HTTP method for the flexible webhook calls. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig">GoogleDialogflowCxWebhookGenericWebServiceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.parameterMapping">ParameterMapping</a></code> | <code>*map[string]*string</code> | Maps the values extracted from specific fields of the flexible webhook response into session parameters. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.requestBody">RequestBody</a></code> | <code>*string</code> | Defines a custom JSON object as request body to send to flexible webhook. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | The HTTP request headers to send together with webhook requests. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.secretVersionForUsernamePassword">SecretVersionForUsernamePassword</a></code> | <code>*string</code> | The SecretManager secret version resource storing the username:password pair for HTTP Basic authentication. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.secretVersionsForRequestHeaders">SecretVersionsForRequestHeaders</a></code> | <code>interface{}</code> | secret_versions_for_request_headers block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>*string</code> | Indicate the auth token type generated from the [Diglogflow service agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent). The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.webhookType">WebhookType</a></code> | <code>*string</code> | Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"]. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The webhook URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#uri GoogleDialogflowCxWebhook#uri}

---

##### `AllowedCaCerts`<sup>Optional</sup> <a name="AllowedCaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.allowedCaCerts"></a>

```go
AllowedCaCerts *[]*string
```

- *Type:* *[]*string

Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, Dialogflow will use Google's default trust store
to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt
name". For instance a certificate can be self-signed using the following
command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#allowed_ca_certs GoogleDialogflowCxWebhook#allowed_ca_certs}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.httpMethod"></a>

```go
HttpMethod *string
```

- *Type:* *string

HTTP method for the flexible webhook calls.

Standard webhook always uses
POST. Possible values: ["POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#http_method GoogleDialogflowCxWebhook#http_method}

---

##### `OauthConfig`<sup>Optional</sup> <a name="OauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.oauthConfig"></a>

```go
OauthConfig GoogleDialogflowCxWebhookGenericWebServiceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig">GoogleDialogflowCxWebhookGenericWebServiceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#oauth_config GoogleDialogflowCxWebhook#oauth_config}

---

##### `ParameterMapping`<sup>Optional</sup> <a name="ParameterMapping" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.parameterMapping"></a>

```go
ParameterMapping *map[string]*string
```

- *Type:* *map[string]*string

Maps the values extracted from specific fields of the flexible webhook response into session parameters.

* Key: session parameter name
* Value: field path in the webhook response

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#parameter_mapping GoogleDialogflowCxWebhook#parameter_mapping}

---

##### `RequestBody`<sup>Optional</sup> <a name="RequestBody" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.requestBody"></a>

```go
RequestBody *string
```

- *Type:* *string

Defines a custom JSON object as request body to send to flexible webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#request_body GoogleDialogflowCxWebhook#request_body}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.requestHeaders"></a>

```go
RequestHeaders *map[string]*string
```

- *Type:* *map[string]*string

The HTTP request headers to send together with webhook requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#request_headers GoogleDialogflowCxWebhook#request_headers}

---

##### `SecretVersionForUsernamePassword`<sup>Optional</sup> <a name="SecretVersionForUsernamePassword" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.secretVersionForUsernamePassword"></a>

```go
SecretVersionForUsernamePassword *string
```

- *Type:* *string

The SecretManager secret version resource storing the username:password pair for HTTP Basic authentication. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#secret_version_for_username_password GoogleDialogflowCxWebhook#secret_version_for_username_password}

---

##### `SecretVersionsForRequestHeaders`<sup>Optional</sup> <a name="SecretVersionsForRequestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.secretVersionsForRequestHeaders"></a>

```go
SecretVersionsForRequestHeaders interface{}
```

- *Type:* interface{}

secret_versions_for_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#secret_versions_for_request_headers GoogleDialogflowCxWebhook#secret_versions_for_request_headers}

---

##### `ServiceAgentAuth`<sup>Optional</sup> <a name="ServiceAgentAuth" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.serviceAgentAuth"></a>

```go
ServiceAgentAuth *string
```

- *Type:* *string

Indicate the auth token type generated from the [Diglogflow service agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent). The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#service_agent_auth GoogleDialogflowCxWebhook#service_agent_auth}

---

##### `WebhookType`<sup>Optional</sup> <a name="WebhookType" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.webhookType"></a>

```go
WebhookType *string
```

- *Type:* *string

Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#webhook_type GoogleDialogflowCxWebhook#webhook_type}

---

### GoogleDialogflowCxWebhookGenericWebServiceOauthConfig <a name="GoogleDialogflowCxWebhookGenericWebServiceOauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

&googledialogflowcxwebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig {
	ClientId: *string,
	TokenEndpoint: *string,
	ClientSecret: *string,
	Scopes: *[]*string,
	SecretVersionForClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client ID provided by the 3rd party platform. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | The token endpoint provided by the 3rd party platform to exchange an access token. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The client secret provided by the 3rd party platform.  If the 'secret_version_for_client_secret' field is set, this field will be ignored. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | The OAuth scopes to grant. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>*string</code> | The name of the SecretManager secret version resource storing the client secret. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client ID provided by the 3rd party platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#client_id GoogleDialogflowCxWebhook#client_id}

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

The token endpoint provided by the 3rd party platform to exchange an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#token_endpoint GoogleDialogflowCxWebhook#token_endpoint}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The client secret provided by the 3rd party platform.  If the 'secret_version_for_client_secret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#client_secret GoogleDialogflowCxWebhook#client_secret}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#scopes GoogleDialogflowCxWebhook#scopes}

---

##### `SecretVersionForClientSecret`<sup>Optional</sup> <a name="SecretVersionForClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig.property.secretVersionForClientSecret"></a>

```go
SecretVersionForClientSecret *string
```

- *Type:* *string

The name of the SecretManager secret version resource storing the client secret.

If this field is set, the 'client_secret' field will be
ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#secret_version_for_client_secret GoogleDialogflowCxWebhook#secret_version_for_client_secret}

---

### GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders <a name="GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

&googledialogflowcxwebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders {
	Key: *string,
	SecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#key GoogleDialogflowCxWebhook#key}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | The SecretManager secret version resource storing the header value. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#key GoogleDialogflowCxWebhook#key}.

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.property.secretVersion"></a>

```go
SecretVersion *string
```

- *Type:* *string

The SecretManager secret version resource storing the header value. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#secret_version GoogleDialogflowCxWebhook#secret_version}

---

### GoogleDialogflowCxWebhookServiceDirectory <a name="GoogleDialogflowCxWebhookServiceDirectory" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

&googledialogflowcxwebhook.GoogleDialogflowCxWebhookServiceDirectory {
	Service: *string,
	GenericWebService: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory.property.service">Service</a></code> | <code>*string</code> | The name of Service Directory service. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService">GoogleDialogflowCxWebhookServiceDirectoryGenericWebService</a></code> | generic_web_service block. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory.property.service"></a>

```go
Service *string
```

- *Type:* *string

The name of Service Directory service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#service GoogleDialogflowCxWebhook#service}

---

##### `GenericWebService`<sup>Optional</sup> <a name="GenericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory.property.genericWebService"></a>

```go
GenericWebService GoogleDialogflowCxWebhookServiceDirectoryGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService">GoogleDialogflowCxWebhookServiceDirectoryGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#generic_web_service GoogleDialogflowCxWebhook#generic_web_service}

---

### GoogleDialogflowCxWebhookServiceDirectoryGenericWebService <a name="GoogleDialogflowCxWebhookServiceDirectoryGenericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

&googledialogflowcxwebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService {
	Uri: *string,
	AllowedCaCerts: *[]*string,
	HttpMethod: *string,
	OauthConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig,
	ParameterMapping: *map[string]*string,
	RequestBody: *string,
	RequestHeaders: *map[string]*string,
	SecretVersionForUsernamePassword: *string,
	SecretVersionsForRequestHeaders: interface{},
	ServiceAgentAuth: *string,
	WebhookType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.uri">Uri</a></code> | <code>*string</code> | The webhook URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.allowedCaCerts">AllowedCaCerts</a></code> | <code>*[]*string</code> | Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | HTTP method for the flexible webhook calls. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.parameterMapping">ParameterMapping</a></code> | <code>*map[string]*string</code> | Maps the values extracted from specific fields of the flexible webhook response into session parameters. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.requestBody">RequestBody</a></code> | <code>*string</code> | Defines a custom JSON object as request body to send to flexible webhook. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | The HTTP request headers to send together with webhook requests. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.secretVersionForUsernamePassword">SecretVersionForUsernamePassword</a></code> | <code>*string</code> | The SecretManager secret version resource storing the username:password pair for HTTP Basic authentication. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.secretVersionsForRequestHeaders">SecretVersionsForRequestHeaders</a></code> | <code>interface{}</code> | secret_versions_for_request_headers block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>*string</code> | Indicate the auth token type generated from the [Diglogflow service agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent). The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.webhookType">WebhookType</a></code> | <code>*string</code> | Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"]. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The webhook URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#uri GoogleDialogflowCxWebhook#uri}

---

##### `AllowedCaCerts`<sup>Optional</sup> <a name="AllowedCaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.allowedCaCerts"></a>

```go
AllowedCaCerts *[]*string
```

- *Type:* *[]*string

Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, Dialogflow will use Google's default trust store
to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt
name". For instance a certificate can be self-signed using the following
command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#allowed_ca_certs GoogleDialogflowCxWebhook#allowed_ca_certs}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.httpMethod"></a>

```go
HttpMethod *string
```

- *Type:* *string

HTTP method for the flexible webhook calls.

Standard webhook always uses
POST. Possible values: ["POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#http_method GoogleDialogflowCxWebhook#http_method}

---

##### `OauthConfig`<sup>Optional</sup> <a name="OauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.oauthConfig"></a>

```go
OauthConfig GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#oauth_config GoogleDialogflowCxWebhook#oauth_config}

---

##### `ParameterMapping`<sup>Optional</sup> <a name="ParameterMapping" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.parameterMapping"></a>

```go
ParameterMapping *map[string]*string
```

- *Type:* *map[string]*string

Maps the values extracted from specific fields of the flexible webhook response into session parameters.

* Key: session parameter name
* Value: field path in the webhook response

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#parameter_mapping GoogleDialogflowCxWebhook#parameter_mapping}

---

##### `RequestBody`<sup>Optional</sup> <a name="RequestBody" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.requestBody"></a>

```go
RequestBody *string
```

- *Type:* *string

Defines a custom JSON object as request body to send to flexible webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#request_body GoogleDialogflowCxWebhook#request_body}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.requestHeaders"></a>

```go
RequestHeaders *map[string]*string
```

- *Type:* *map[string]*string

The HTTP request headers to send together with webhook requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#request_headers GoogleDialogflowCxWebhook#request_headers}

---

##### `SecretVersionForUsernamePassword`<sup>Optional</sup> <a name="SecretVersionForUsernamePassword" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.secretVersionForUsernamePassword"></a>

```go
SecretVersionForUsernamePassword *string
```

- *Type:* *string

The SecretManager secret version resource storing the username:password pair for HTTP Basic authentication. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#secret_version_for_username_password GoogleDialogflowCxWebhook#secret_version_for_username_password}

---

##### `SecretVersionsForRequestHeaders`<sup>Optional</sup> <a name="SecretVersionsForRequestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.secretVersionsForRequestHeaders"></a>

```go
SecretVersionsForRequestHeaders interface{}
```

- *Type:* interface{}

secret_versions_for_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#secret_versions_for_request_headers GoogleDialogflowCxWebhook#secret_versions_for_request_headers}

---

##### `ServiceAgentAuth`<sup>Optional</sup> <a name="ServiceAgentAuth" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.serviceAgentAuth"></a>

```go
ServiceAgentAuth *string
```

- *Type:* *string

Indicate the auth token type generated from the [Diglogflow service agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent). The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#service_agent_auth GoogleDialogflowCxWebhook#service_agent_auth}

---

##### `WebhookType`<sup>Optional</sup> <a name="WebhookType" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.webhookType"></a>

```go
WebhookType *string
```

- *Type:* *string

Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#webhook_type GoogleDialogflowCxWebhook#webhook_type}

---

### GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig <a name="GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

&googledialogflowcxwebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig {
	ClientId: *string,
	TokenEndpoint: *string,
	ClientSecret: *string,
	Scopes: *[]*string,
	SecretVersionForClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client ID provided by the 3rd party platform. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | The token endpoint provided by the 3rd party platform to exchange an access token. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The client secret provided by the 3rd party platform.  If the 'secret_version_for_client_secret' field is set, this field will be ignored. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | The OAuth scopes to grant. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>*string</code> | The name of the SecretManager secret version resource storing the client secret. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client ID provided by the 3rd party platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#client_id GoogleDialogflowCxWebhook#client_id}

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

The token endpoint provided by the 3rd party platform to exchange an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#token_endpoint GoogleDialogflowCxWebhook#token_endpoint}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The client secret provided by the 3rd party platform.  If the 'secret_version_for_client_secret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#client_secret GoogleDialogflowCxWebhook#client_secret}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#scopes GoogleDialogflowCxWebhook#scopes}

---

##### `SecretVersionForClientSecret`<sup>Optional</sup> <a name="SecretVersionForClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.secretVersionForClientSecret"></a>

```go
SecretVersionForClientSecret *string
```

- *Type:* *string

The name of the SecretManager secret version resource storing the client secret.

If this field is set, the 'client_secret' field will be
ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#secret_version_for_client_secret GoogleDialogflowCxWebhook#secret_version_for_client_secret}

---

### GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders <a name="GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

&googledialogflowcxwebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders {
	Key: *string,
	SecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#key GoogleDialogflowCxWebhook#key}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | The SecretManager secret version resource storing the header value. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#key GoogleDialogflowCxWebhook#key}.

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.property.secretVersion"></a>

```go
SecretVersion *string
```

- *Type:* *string

The SecretManager secret version resource storing the header value. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#secret_version GoogleDialogflowCxWebhook#secret_version}

---

### GoogleDialogflowCxWebhookTimeouts <a name="GoogleDialogflowCxWebhookTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

&googledialogflowcxwebhook.GoogleDialogflowCxWebhookTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#create GoogleDialogflowCxWebhook#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#delete GoogleDialogflowCxWebhook#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#update GoogleDialogflowCxWebhook#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#create GoogleDialogflowCxWebhook#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#delete GoogleDialogflowCxWebhook#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_webhook#update GoogleDialogflowCxWebhook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference <a name="GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

googledialogflowcxwebhook.NewGoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetSecretVersionForClientSecret">ResetSecretVersionForClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetSecretVersionForClientSecret` <a name="ResetSecretVersionForClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```go
func ResetSecretVersionForClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecretInput">SecretVersionForClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig">GoogleDialogflowCxWebhookGenericWebServiceOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecretVersionForClientSecretInput`<sup>Optional</sup> <a name="SecretVersionForClientSecretInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```go
func SecretVersionForClientSecretInput() *string
```

- *Type:* *string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.tokenEndpointInput"></a>

```go
func TokenEndpointInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SecretVersionForClientSecret`<sup>Required</sup> <a name="SecretVersionForClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```go
func SecretVersionForClientSecret() *string
```

- *Type:* *string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxWebhookGenericWebServiceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig">GoogleDialogflowCxWebhookGenericWebServiceOauthConfig</a>

---


### GoogleDialogflowCxWebhookGenericWebServiceOutputReference <a name="GoogleDialogflowCxWebhookGenericWebServiceOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

googledialogflowcxwebhook.NewGoogleDialogflowCxWebhookGenericWebServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxWebhookGenericWebServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.putOauthConfig">PutOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders">PutSecretVersionsForRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetAllowedCaCerts">ResetAllowedCaCerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetOauthConfig">ResetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetParameterMapping">ResetParameterMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetRequestBody">ResetRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetSecretVersionForUsernamePassword">ResetSecretVersionForUsernamePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetSecretVersionsForRequestHeaders">ResetSecretVersionsForRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetServiceAgentAuth">ResetServiceAgentAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetWebhookType">ResetWebhookType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauthConfig` <a name="PutOauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.putOauthConfig"></a>

```go
func PutOauthConfig(value GoogleDialogflowCxWebhookGenericWebServiceOauthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig">GoogleDialogflowCxWebhookGenericWebServiceOauthConfig</a>

---

##### `PutSecretVersionsForRequestHeaders` <a name="PutSecretVersionsForRequestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders"></a>

```go
func PutSecretVersionsForRequestHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedCaCerts` <a name="ResetAllowedCaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetAllowedCaCerts"></a>

```go
func ResetAllowedCaCerts()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetHttpMethod"></a>

```go
func ResetHttpMethod()
```

##### `ResetOauthConfig` <a name="ResetOauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetOauthConfig"></a>

```go
func ResetOauthConfig()
```

##### `ResetParameterMapping` <a name="ResetParameterMapping" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetParameterMapping"></a>

```go
func ResetParameterMapping()
```

##### `ResetRequestBody` <a name="ResetRequestBody" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetRequestBody"></a>

```go
func ResetRequestBody()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetRequestHeaders"></a>

```go
func ResetRequestHeaders()
```

##### `ResetSecretVersionForUsernamePassword` <a name="ResetSecretVersionForUsernamePassword" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetSecretVersionForUsernamePassword"></a>

```go
func ResetSecretVersionForUsernamePassword()
```

##### `ResetSecretVersionsForRequestHeaders` <a name="ResetSecretVersionsForRequestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetSecretVersionsForRequestHeaders"></a>

```go
func ResetSecretVersionsForRequestHeaders()
```

##### `ResetServiceAgentAuth` <a name="ResetServiceAgentAuth" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetServiceAgentAuth"></a>

```go
func ResetServiceAgentAuth()
```

##### `ResetWebhookType` <a name="ResetWebhookType" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetWebhookType"></a>

```go
func ResetWebhookType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference">GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionsForRequestHeaders">SecretVersionsForRequestHeaders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList">GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCertsInput">AllowedCaCertsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.oauthConfigInput">OauthConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig">GoogleDialogflowCxWebhookGenericWebServiceOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.parameterMappingInput">ParameterMappingInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.requestBodyInput">RequestBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeadersInput">RequestHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionForUsernamePasswordInput">SecretVersionForUsernamePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionsForRequestHeadersInput">SecretVersionsForRequestHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.serviceAgentAuthInput">ServiceAgentAuthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.webhookTypeInput">WebhookTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCerts">AllowedCaCerts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.parameterMapping">ParameterMapping</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.requestBody">RequestBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionForUsernamePassword">SecretVersionForUsernamePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.webhookType">WebhookType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService">GoogleDialogflowCxWebhookGenericWebService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.oauthConfig"></a>

```go
func OauthConfig() GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference">GoogleDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference</a>

---

##### `SecretVersionsForRequestHeaders`<sup>Required</sup> <a name="SecretVersionsForRequestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionsForRequestHeaders"></a>

```go
func SecretVersionsForRequestHeaders() GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList">GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList</a>

---

##### `AllowedCaCertsInput`<sup>Optional</sup> <a name="AllowedCaCertsInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCertsInput"></a>

```go
func AllowedCaCertsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.httpMethodInput"></a>

```go
func HttpMethodInput() *string
```

- *Type:* *string

---

##### `OauthConfigInput`<sup>Optional</sup> <a name="OauthConfigInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.oauthConfigInput"></a>

```go
func OauthConfigInput() GoogleDialogflowCxWebhookGenericWebServiceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOauthConfig">GoogleDialogflowCxWebhookGenericWebServiceOauthConfig</a>

---

##### `ParameterMappingInput`<sup>Optional</sup> <a name="ParameterMappingInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.parameterMappingInput"></a>

```go
func ParameterMappingInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestBodyInput`<sup>Optional</sup> <a name="RequestBodyInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.requestBodyInput"></a>

```go
func RequestBodyInput() *string
```

- *Type:* *string

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```go
func RequestHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecretVersionForUsernamePasswordInput`<sup>Optional</sup> <a name="SecretVersionForUsernamePasswordInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionForUsernamePasswordInput"></a>

```go
func SecretVersionForUsernamePasswordInput() *string
```

- *Type:* *string

---

##### `SecretVersionsForRequestHeadersInput`<sup>Optional</sup> <a name="SecretVersionsForRequestHeadersInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionsForRequestHeadersInput"></a>

```go
func SecretVersionsForRequestHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceAgentAuthInput`<sup>Optional</sup> <a name="ServiceAgentAuthInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.serviceAgentAuthInput"></a>

```go
func ServiceAgentAuthInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `WebhookTypeInput`<sup>Optional</sup> <a name="WebhookTypeInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.webhookTypeInput"></a>

```go
func WebhookTypeInput() *string
```

- *Type:* *string

---

##### `AllowedCaCerts`<sup>Required</sup> <a name="AllowedCaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCerts"></a>

```go
func AllowedCaCerts() *[]*string
```

- *Type:* *[]*string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `ParameterMapping`<sup>Required</sup> <a name="ParameterMapping" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.parameterMapping"></a>

```go
func ParameterMapping() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestBody`<sup>Required</sup> <a name="RequestBody" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.requestBody"></a>

```go
func RequestBody() *string
```

- *Type:* *string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeaders"></a>

```go
func RequestHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecretVersionForUsernamePassword`<sup>Required</sup> <a name="SecretVersionForUsernamePassword" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionForUsernamePassword"></a>

```go
func SecretVersionForUsernamePassword() *string
```

- *Type:* *string

---

##### `ServiceAgentAuth`<sup>Required</sup> <a name="ServiceAgentAuth" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.serviceAgentAuth"></a>

```go
func ServiceAgentAuth() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `WebhookType`<sup>Required</sup> <a name="WebhookType" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.webhookType"></a>

```go
func WebhookType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxWebhookGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService">GoogleDialogflowCxWebhookGenericWebService</a>

---


### GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList <a name="GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

googledialogflowcxwebhook.NewGoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference <a name="GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

googledialogflowcxwebhook.NewGoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersionInput"></a>

```go
func SecretVersionInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersion"></a>

```go
func SecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference <a name="GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

googledialogflowcxwebhook.NewGoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetSecretVersionForClientSecret">ResetSecretVersionForClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetSecretVersionForClientSecret` <a name="ResetSecretVersionForClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```go
func ResetSecretVersionForClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecretInput">SecretVersionForClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecretVersionForClientSecretInput`<sup>Optional</sup> <a name="SecretVersionForClientSecretInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```go
func SecretVersionForClientSecretInput() *string
```

- *Type:* *string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.tokenEndpointInput"></a>

```go
func TokenEndpointInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SecretVersionForClientSecret`<sup>Required</sup> <a name="SecretVersionForClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```go
func SecretVersionForClientSecret() *string
```

- *Type:* *string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a>

---


### GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference <a name="GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

googledialogflowcxwebhook.NewGoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putOauthConfig">PutOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders">PutSecretVersionsForRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetAllowedCaCerts">ResetAllowedCaCerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetOauthConfig">ResetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetParameterMapping">ResetParameterMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetRequestBody">ResetRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetSecretVersionForUsernamePassword">ResetSecretVersionForUsernamePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetSecretVersionsForRequestHeaders">ResetSecretVersionsForRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetServiceAgentAuth">ResetServiceAgentAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetWebhookType">ResetWebhookType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauthConfig` <a name="PutOauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putOauthConfig"></a>

```go
func PutOauthConfig(value GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a>

---

##### `PutSecretVersionsForRequestHeaders` <a name="PutSecretVersionsForRequestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders"></a>

```go
func PutSecretVersionsForRequestHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedCaCerts` <a name="ResetAllowedCaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetAllowedCaCerts"></a>

```go
func ResetAllowedCaCerts()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetHttpMethod"></a>

```go
func ResetHttpMethod()
```

##### `ResetOauthConfig` <a name="ResetOauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetOauthConfig"></a>

```go
func ResetOauthConfig()
```

##### `ResetParameterMapping` <a name="ResetParameterMapping" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetParameterMapping"></a>

```go
func ResetParameterMapping()
```

##### `ResetRequestBody` <a name="ResetRequestBody" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetRequestBody"></a>

```go
func ResetRequestBody()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetRequestHeaders"></a>

```go
func ResetRequestHeaders()
```

##### `ResetSecretVersionForUsernamePassword` <a name="ResetSecretVersionForUsernamePassword" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetSecretVersionForUsernamePassword"></a>

```go
func ResetSecretVersionForUsernamePassword()
```

##### `ResetSecretVersionsForRequestHeaders` <a name="ResetSecretVersionsForRequestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetSecretVersionsForRequestHeaders"></a>

```go
func ResetSecretVersionsForRequestHeaders()
```

##### `ResetServiceAgentAuth` <a name="ResetServiceAgentAuth" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetServiceAgentAuth"></a>

```go
func ResetServiceAgentAuth()
```

##### `ResetWebhookType` <a name="ResetWebhookType" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetWebhookType"></a>

```go
func ResetWebhookType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference">GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionsForRequestHeaders">SecretVersionsForRequestHeaders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList">GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCertsInput">AllowedCaCertsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.oauthConfigInput">OauthConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.parameterMappingInput">ParameterMappingInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestBodyInput">RequestBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeadersInput">RequestHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionForUsernamePasswordInput">SecretVersionForUsernamePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionsForRequestHeadersInput">SecretVersionsForRequestHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.serviceAgentAuthInput">ServiceAgentAuthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.webhookTypeInput">WebhookTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCerts">AllowedCaCerts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.parameterMapping">ParameterMapping</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestBody">RequestBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionForUsernamePassword">SecretVersionForUsernamePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.webhookType">WebhookType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService">GoogleDialogflowCxWebhookServiceDirectoryGenericWebService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.oauthConfig"></a>

```go
func OauthConfig() GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference">GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference</a>

---

##### `SecretVersionsForRequestHeaders`<sup>Required</sup> <a name="SecretVersionsForRequestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionsForRequestHeaders"></a>

```go
func SecretVersionsForRequestHeaders() GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList">GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList</a>

---

##### `AllowedCaCertsInput`<sup>Optional</sup> <a name="AllowedCaCertsInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCertsInput"></a>

```go
func AllowedCaCertsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.httpMethodInput"></a>

```go
func HttpMethodInput() *string
```

- *Type:* *string

---

##### `OauthConfigInput`<sup>Optional</sup> <a name="OauthConfigInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.oauthConfigInput"></a>

```go
func OauthConfigInput() GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a>

---

##### `ParameterMappingInput`<sup>Optional</sup> <a name="ParameterMappingInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.parameterMappingInput"></a>

```go
func ParameterMappingInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestBodyInput`<sup>Optional</sup> <a name="RequestBodyInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestBodyInput"></a>

```go
func RequestBodyInput() *string
```

- *Type:* *string

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```go
func RequestHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecretVersionForUsernamePasswordInput`<sup>Optional</sup> <a name="SecretVersionForUsernamePasswordInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionForUsernamePasswordInput"></a>

```go
func SecretVersionForUsernamePasswordInput() *string
```

- *Type:* *string

---

##### `SecretVersionsForRequestHeadersInput`<sup>Optional</sup> <a name="SecretVersionsForRequestHeadersInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionsForRequestHeadersInput"></a>

```go
func SecretVersionsForRequestHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceAgentAuthInput`<sup>Optional</sup> <a name="ServiceAgentAuthInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.serviceAgentAuthInput"></a>

```go
func ServiceAgentAuthInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `WebhookTypeInput`<sup>Optional</sup> <a name="WebhookTypeInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.webhookTypeInput"></a>

```go
func WebhookTypeInput() *string
```

- *Type:* *string

---

##### `AllowedCaCerts`<sup>Required</sup> <a name="AllowedCaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCerts"></a>

```go
func AllowedCaCerts() *[]*string
```

- *Type:* *[]*string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `ParameterMapping`<sup>Required</sup> <a name="ParameterMapping" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.parameterMapping"></a>

```go
func ParameterMapping() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestBody`<sup>Required</sup> <a name="RequestBody" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestBody"></a>

```go
func RequestBody() *string
```

- *Type:* *string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeaders"></a>

```go
func RequestHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecretVersionForUsernamePassword`<sup>Required</sup> <a name="SecretVersionForUsernamePassword" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionForUsernamePassword"></a>

```go
func SecretVersionForUsernamePassword() *string
```

- *Type:* *string

---

##### `ServiceAgentAuth`<sup>Required</sup> <a name="ServiceAgentAuth" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.serviceAgentAuth"></a>

```go
func ServiceAgentAuth() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `WebhookType`<sup>Required</sup> <a name="WebhookType" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.webhookType"></a>

```go
func WebhookType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxWebhookServiceDirectoryGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService">GoogleDialogflowCxWebhookServiceDirectoryGenericWebService</a>

---


### GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList <a name="GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

googledialogflowcxwebhook.NewGoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference <a name="GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

googledialogflowcxwebhook.NewGoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersionInput"></a>

```go
func SecretVersionInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersion"></a>

```go
func SecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxWebhookServiceDirectoryOutputReference <a name="GoogleDialogflowCxWebhookServiceDirectoryOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

googledialogflowcxwebhook.NewGoogleDialogflowCxWebhookServiceDirectoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxWebhookServiceDirectoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService">PutGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.resetGenericWebService">ResetGenericWebService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGenericWebService` <a name="PutGenericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService"></a>

```go
func PutGenericWebService(value GoogleDialogflowCxWebhookServiceDirectoryGenericWebService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService">GoogleDialogflowCxWebhookServiceDirectoryGenericWebService</a>

---

##### `ResetGenericWebService` <a name="ResetGenericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.resetGenericWebService"></a>

```go
func ResetGenericWebService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference">GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebServiceInput">GenericWebServiceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService">GoogleDialogflowCxWebhookServiceDirectoryGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory">GoogleDialogflowCxWebhookServiceDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GenericWebService`<sup>Required</sup> <a name="GenericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebService"></a>

```go
func GenericWebService() GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference">GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference</a>

---

##### `GenericWebServiceInput`<sup>Optional</sup> <a name="GenericWebServiceInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebServiceInput"></a>

```go
func GenericWebServiceInput() GoogleDialogflowCxWebhookServiceDirectoryGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService">GoogleDialogflowCxWebhookServiceDirectoryGenericWebService</a>

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxWebhookServiceDirectory
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory">GoogleDialogflowCxWebhookServiceDirectory</a>

---


### GoogleDialogflowCxWebhookTimeoutsOutputReference <a name="GoogleDialogflowCxWebhookTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxwebhook"

googledialogflowcxwebhook.NewGoogleDialogflowCxWebhookTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxWebhookTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



