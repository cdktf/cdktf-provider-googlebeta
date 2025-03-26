# `googleEventarcPipeline` Submodule <a name="`googleEventarcPipeline` Submodule" id="@cdktf/provider-google-beta.googleEventarcPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEventarcPipeline <a name="GoogleEventarcPipeline" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline google_eventarc_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipeline(scope Construct, id *string, config GoogleEventarcPipelineConfig) GoogleEventarcPipeline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig">GoogleEventarcPipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig">GoogleEventarcPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putInputPayloadFormat">PutInputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putMediations">PutMediations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetCryptoKeyName">ResetCryptoKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetInputPayloadFormat">ResetInputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetMediations">ResetMediations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinations` <a name="PutDestinations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putDestinations"></a>

```go
func PutDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInputPayloadFormat` <a name="PutInputPayloadFormat" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putInputPayloadFormat"></a>

```go
func PutInputPayloadFormat(value GoogleEventarcPipelineInputPayloadFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putInputPayloadFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat">GoogleEventarcPipelineInputPayloadFormat</a>

---

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putLoggingConfig"></a>

```go
func PutLoggingConfig(value GoogleEventarcPipelineLoggingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig">GoogleEventarcPipelineLoggingConfig</a>

---

##### `PutMediations` <a name="PutMediations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putMediations"></a>

```go
func PutMediations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putMediations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putRetryPolicy"></a>

```go
func PutRetryPolicy(value GoogleEventarcPipelineRetryPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy">GoogleEventarcPipelineRetryPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putTimeouts"></a>

```go
func PutTimeouts(value GoogleEventarcPipelineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts">GoogleEventarcPipelineTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetCryptoKeyName` <a name="ResetCryptoKeyName" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetCryptoKeyName"></a>

```go
func ResetCryptoKeyName()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetId"></a>

```go
func ResetId()
```

##### `ResetInputPayloadFormat` <a name="ResetInputPayloadFormat" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetInputPayloadFormat"></a>

```go
func ResetInputPayloadFormat()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetLoggingConfig"></a>

```go
func ResetLoggingConfig()
```

##### `ResetMediations` <a name="ResetMediations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetMediations"></a>

```go
func ResetMediations()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetRetryPolicy"></a>

```go
func ResetRetryPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleEventarcPipeline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.GoogleEventarcPipeline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.GoogleEventarcPipeline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.GoogleEventarcPipeline_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.GoogleEventarcPipeline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleEventarcPipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleEventarcPipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleEventarcPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEventarcPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.destinations">Destinations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList">GoogleEventarcPipelineDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.inputPayloadFormat">InputPayloadFormat</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference">GoogleEventarcPipelineInputPayloadFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference">GoogleEventarcPipelineLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.mediations">Mediations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList">GoogleEventarcPipelineMediationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference">GoogleEventarcPipelineRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference">GoogleEventarcPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.cryptoKeyNameInput">CryptoKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.inputPayloadFormatInput">InputPayloadFormatInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat">GoogleEventarcPipelineInputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig">GoogleEventarcPipelineLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.mediationsInput">MediationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.pipelineIdInput">PipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.retryPolicyInput">RetryPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy">GoogleEventarcPipelineRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.cryptoKeyName">CryptoKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.destinations"></a>

```go
func Destinations() GoogleEventarcPipelineDestinationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList">GoogleEventarcPipelineDestinationsList</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `InputPayloadFormat`<sup>Required</sup> <a name="InputPayloadFormat" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.inputPayloadFormat"></a>

```go
func InputPayloadFormat() GoogleEventarcPipelineInputPayloadFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference">GoogleEventarcPipelineInputPayloadFormatOutputReference</a>

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.loggingConfig"></a>

```go
func LoggingConfig() GoogleEventarcPipelineLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference">GoogleEventarcPipelineLoggingConfigOutputReference</a>

---

##### `Mediations`<sup>Required</sup> <a name="Mediations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.mediations"></a>

```go
func Mediations() GoogleEventarcPipelineMediationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList">GoogleEventarcPipelineMediationsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.retryPolicy"></a>

```go
func RetryPolicy() GoogleEventarcPipelineRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference">GoogleEventarcPipelineRetryPolicyOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.timeouts"></a>

```go
func Timeouts() GoogleEventarcPipelineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference">GoogleEventarcPipelineTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CryptoKeyNameInput`<sup>Optional</sup> <a name="CryptoKeyNameInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.cryptoKeyNameInput"></a>

```go
func CryptoKeyNameInput() *string
```

- *Type:* *string

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputPayloadFormatInput`<sup>Optional</sup> <a name="InputPayloadFormatInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.inputPayloadFormatInput"></a>

```go
func InputPayloadFormatInput() GoogleEventarcPipelineInputPayloadFormat
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat">GoogleEventarcPipelineInputPayloadFormat</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.loggingConfigInput"></a>

```go
func LoggingConfigInput() GoogleEventarcPipelineLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig">GoogleEventarcPipelineLoggingConfig</a>

---

##### `MediationsInput`<sup>Optional</sup> <a name="MediationsInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.mediationsInput"></a>

```go
func MediationsInput() interface{}
```

- *Type:* interface{}

---

##### `PipelineIdInput`<sup>Optional</sup> <a name="PipelineIdInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.pipelineIdInput"></a>

```go
func PipelineIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.retryPolicyInput"></a>

```go
func RetryPolicyInput() GoogleEventarcPipelineRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy">GoogleEventarcPipelineRetryPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CryptoKeyName`<sup>Required</sup> <a name="CryptoKeyName" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.cryptoKeyName"></a>

```go
func CryptoKeyName() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipeline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEventarcPipelineConfig <a name="GoogleEventarcPipelineConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Destinations: interface{},
	Location: *string,
	PipelineId: *string,
	Annotations: *map[string]*string,
	CryptoKeyName: *string,
	DisplayName: *string,
	Id: *string,
	InputPayloadFormat: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat,
	Labels: *map[string]*string,
	LoggingConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig,
	Mediations: interface{},
	Project: *string,
	RetryPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcPipeline.GoogleEventarcPipelineTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.destinations">Destinations</a></code> | <code>interface{}</code> | destinations block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.pipelineId">PipelineId</a></code> | <code>*string</code> | The user-provided ID to be assigned to the Pipeline. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | User-defined annotations. See https://google.aip.dev/128#annotations. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.cryptoKeyName">CryptoKeyName</a></code> | <code>*string</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt the event data. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name of resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#id GoogleEventarcPipeline#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.inputPayloadFormat">InputPayloadFormat</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat">GoogleEventarcPipelineInputPayloadFormat</a></code> | input_payload_format block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User labels attached to the Pipeline that can be used to group resources. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig">GoogleEventarcPipelineLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.mediations">Mediations</a></code> | <code>interface{}</code> | mediations block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#project GoogleEventarcPipeline#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy">GoogleEventarcPipelineRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts">GoogleEventarcPipelineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.destinations"></a>

```go
Destinations interface{}
```

- *Type:* interface{}

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#destinations GoogleEventarcPipeline#destinations}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#location GoogleEventarcPipeline#location}

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.pipelineId"></a>

```go
PipelineId *string
```

- *Type:* *string

The user-provided ID to be assigned to the Pipeline. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#pipeline_id GoogleEventarcPipeline#pipeline_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

User-defined annotations. See https://google.aip.dev/128#annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#annotations GoogleEventarcPipeline#annotations}

---

##### `CryptoKeyName`<sup>Optional</sup> <a name="CryptoKeyName" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.cryptoKeyName"></a>

```go
CryptoKeyName *string
```

- *Type:* *string

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt the event data.

If not set, an internal Google-owned key
will be used to encrypt messages. It must match the pattern
"projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#crypto_key_name GoogleEventarcPipeline#crypto_key_name}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#display_name GoogleEventarcPipeline#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#id GoogleEventarcPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputPayloadFormat`<sup>Optional</sup> <a name="InputPayloadFormat" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.inputPayloadFormat"></a>

```go
InputPayloadFormat GoogleEventarcPipelineInputPayloadFormat
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat">GoogleEventarcPipelineInputPayloadFormat</a>

input_payload_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#input_payload_format GoogleEventarcPipeline#input_payload_format}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User labels attached to the Pipeline that can be used to group resources.

An object containing a list of "key": value pairs. Example: {
"name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#labels GoogleEventarcPipeline#labels}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.loggingConfig"></a>

```go
LoggingConfig GoogleEventarcPipelineLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig">GoogleEventarcPipelineLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#logging_config GoogleEventarcPipeline#logging_config}

---

##### `Mediations`<sup>Optional</sup> <a name="Mediations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.mediations"></a>

```go
Mediations interface{}
```

- *Type:* interface{}

mediations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#mediations GoogleEventarcPipeline#mediations}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#project GoogleEventarcPipeline#project}.

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.retryPolicy"></a>

```go
RetryPolicy GoogleEventarcPipelineRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy">GoogleEventarcPipelineRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#retry_policy GoogleEventarcPipeline#retry_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineConfig.property.timeouts"></a>

```go
Timeouts GoogleEventarcPipelineTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts">GoogleEventarcPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#timeouts GoogleEventarcPipeline#timeouts}

---

### GoogleEventarcPipelineDestinations <a name="GoogleEventarcPipelineDestinations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineDestinations {
	AuthenticationConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig,
	HttpEndpoint: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint,
	MessageBus: *string,
	NetworkConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig,
	OutputPayloadFormat: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat,
	Topic: *string,
	Workflow: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.authenticationConfig">AuthenticationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig">GoogleEventarcPipelineDestinationsAuthenticationConfig</a></code> | authentication_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.httpEndpoint">HttpEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint">GoogleEventarcPipelineDestinationsHttpEndpoint</a></code> | http_endpoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.messageBus">MessageBus</a></code> | <code>*string</code> | The resource name of the Message Bus to which events should be published. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig">GoogleEventarcPipelineDestinationsNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.outputPayloadFormat">OutputPayloadFormat</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat">GoogleEventarcPipelineDestinationsOutputPayloadFormat</a></code> | output_payload_format block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.topic">Topic</a></code> | <code>*string</code> | The resource name of the Pub/Sub topic to which events should be published. Format: 'projects/{project}/locations/{location}/topics/{topic}'. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.workflow">Workflow</a></code> | <code>*string</code> | The resource name of the Workflow whose Executions are triggered by the events. |

---

##### `AuthenticationConfig`<sup>Optional</sup> <a name="AuthenticationConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.authenticationConfig"></a>

```go
AuthenticationConfig GoogleEventarcPipelineDestinationsAuthenticationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig">GoogleEventarcPipelineDestinationsAuthenticationConfig</a>

authentication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#authentication_config GoogleEventarcPipeline#authentication_config}

---

##### `HttpEndpoint`<sup>Optional</sup> <a name="HttpEndpoint" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.httpEndpoint"></a>

```go
HttpEndpoint GoogleEventarcPipelineDestinationsHttpEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint">GoogleEventarcPipelineDestinationsHttpEndpoint</a>

http_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#http_endpoint GoogleEventarcPipeline#http_endpoint}

---

##### `MessageBus`<sup>Optional</sup> <a name="MessageBus" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.messageBus"></a>

```go
MessageBus *string
```

- *Type:* *string

The resource name of the Message Bus to which events should be published.

The Message Bus resource should exist in the same project as
the Pipeline. Format:
'projects/{project}/locations/{location}/messageBuses/{message_bus}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#message_bus GoogleEventarcPipeline#message_bus}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.networkConfig"></a>

```go
NetworkConfig GoogleEventarcPipelineDestinationsNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig">GoogleEventarcPipelineDestinationsNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#network_config GoogleEventarcPipeline#network_config}

---

##### `OutputPayloadFormat`<sup>Optional</sup> <a name="OutputPayloadFormat" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.outputPayloadFormat"></a>

```go
OutputPayloadFormat GoogleEventarcPipelineDestinationsOutputPayloadFormat
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat">GoogleEventarcPipelineDestinationsOutputPayloadFormat</a>

output_payload_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#output_payload_format GoogleEventarcPipeline#output_payload_format}

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.topic"></a>

```go
Topic *string
```

- *Type:* *string

The resource name of the Pub/Sub topic to which events should be published. Format: 'projects/{project}/locations/{location}/topics/{topic}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#topic GoogleEventarcPipeline#topic}

---

##### `Workflow`<sup>Optional</sup> <a name="Workflow" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinations.property.workflow"></a>

```go
Workflow *string
```

- *Type:* *string

The resource name of the Workflow whose Executions are triggered by the events.

The Workflow resource should be deployed in the same
project as the Pipeline. Format:
'projects/{project}/locations/{location}/workflows/{workflow}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#workflow GoogleEventarcPipeline#workflow}

---

### GoogleEventarcPipelineDestinationsAuthenticationConfig <a name="GoogleEventarcPipelineDestinationsAuthenticationConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig {
	GoogleOidc: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc,
	OauthToken: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig.property.googleOidc">GoogleOidc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc">GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a></code> | google_oidc block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig.property.oauthToken">OauthToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken">GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken</a></code> | oauth_token block. |

---

##### `GoogleOidc`<sup>Optional</sup> <a name="GoogleOidc" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig.property.googleOidc"></a>

```go
GoogleOidc GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc">GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

google_oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#google_oidc GoogleEventarcPipeline#google_oidc}

---

##### `OauthToken`<sup>Optional</sup> <a name="OauthToken" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig.property.oauthToken"></a>

```go
OauthToken GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken">GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#oauth_token GoogleEventarcPipeline#oauth_token}

---

### GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc <a name="GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc {
	ServiceAccount: *string,
	Audience: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Service account email used to generate the OIDC Token. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.audience">Audience</a></code> | <code>*string</code> | Audience to be used to generate the OIDC Token. |

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Service account email used to generate the OIDC Token.

The principal who calls this API must have
iam.serviceAccounts.actAs permission in the service account. See
https://cloud.google.com/iam/docs/understanding-service-accounts
for more information. Eventarc service agents must have
roles/roles/iam.serviceAccountTokenCreator role to allow the
Pipeline to create OpenID tokens for authenticated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#service_account GoogleEventarcPipeline#service_account}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

Audience to be used to generate the OIDC Token.

The audience claim
identifies the recipient that the JWT is intended for. If
unspecified, the destination URI will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#audience GoogleEventarcPipeline#audience}

---

### GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken <a name="GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken {
	ServiceAccount: *string,
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Service account email used to generate the [OAuth token](https://developers.google.com/identity/protocols/OAuth2). The principal who calls this API must have iam.serviceAccounts.actAs permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc service agents must have roles/roles/iam.serviceAccountTokenCreator role to allow Pipeline to create OAuth2 tokens for authenticated requests. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken.property.scope">Scope</a></code> | <code>*string</code> | OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. |

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Service account email used to generate the [OAuth token](https://developers.google.com/identity/protocols/OAuth2). The principal who calls this API must have iam.serviceAccounts.actAs permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc service agents must have roles/roles/iam.serviceAccountTokenCreator role to allow Pipeline to create OAuth2 tokens for authenticated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#service_account GoogleEventarcPipeline#service_account}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#scope GoogleEventarcPipeline#scope}

---

### GoogleEventarcPipelineDestinationsHttpEndpoint <a name="GoogleEventarcPipelineDestinationsHttpEndpoint" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineDestinationsHttpEndpoint {
	Uri: *string,
	MessageBindingTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint.property.uri">Uri</a></code> | <code>*string</code> | The URI of the HTTP enpdoint. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint.property.messageBindingTemplate">MessageBindingTemplate</a></code> | <code>*string</code> | The CEL expression used to modify how the destination-bound HTTP request is constructed. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The URI of the HTTP enpdoint.

The value must be a RFC2396 URI string.
Examples: 'https://svc.us-central1.p.local:8080/route'.
Only the HTTPS protocol is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#uri GoogleEventarcPipeline#uri}

---

##### `MessageBindingTemplate`<sup>Optional</sup> <a name="MessageBindingTemplate" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint.property.messageBindingTemplate"></a>

```go
MessageBindingTemplate *string
```

- *Type:* *string

The CEL expression used to modify how the destination-bound HTTP request is constructed.

If a binding expression is not specified here, the message
is treated as a CloudEvent and is mapped to the HTTP request according
to the CloudEvent HTTP Protocol Binding Binary Content Mode
(https://github.com/cloudevents/spec/blob/main/cloudevents/bindings/http-protocol-binding.md#31-binary-content-mode).
In this representation, all fields except the 'data' and
'datacontenttype' field on the message are mapped to HTTP request
headers with a prefix of 'ce-'.

To construct the HTTP request payload and the value of the content-type
HTTP header, the payload format is defined as follows:

1) Use the output_payload_format_type on the Pipeline.Destination if it
   is set, else:
2) Use the input_payload_format_type on the Pipeline if it is set,
   else:
3) Treat the payload as opaque binary data.

The 'data' field of the message is converted to the payload format or
left as-is for case 3) and then attached as the payload of the HTTP
request. The 'content-type' header on the HTTP request is set to the
payload format type or left empty for case 3). However, if a mediation
has updated the 'datacontenttype' field on the message so that it is
not the same as the payload format type but it is still a prefix of the
payload format type, then the 'content-type' header on the HTTP request
is set to this 'datacontenttype' value. For example, if the
'datacontenttype' is "application/json" and the payload format type is
"application/json; charset=utf-8", then the 'content-type' header on
the HTTP request is set to "application/json; charset=utf-8".

If a non-empty binding expression is specified then this expression is
used to modify the default CloudEvent HTTP Protocol Binding Binary
Content representation.
The result of the CEL expression must be a map of key/value pairs
which is used as follows:

* If a map named 'headers' exists on the result of the expression,
  then its key/value pairs are directly mapped to the HTTP request
  headers. The headers values are constructed from the corresponding
  value type's canonical representation. If the 'headers' field doesn't
  exist then the resulting HTTP request will be the headers of the
  CloudEvent HTTP Binding Binary Content Mode representation of the final
  message. Note: If the specified binding expression, has updated the
  'datacontenttype' field on the message so that it is not the same as
  the payload format type but it is still a prefix of the payload format
  type, then the 'content-type' header in the 'headers' map is set to
  this 'datacontenttype' value.
* If a field named 'body' exists on the result of the expression then
  its value is directly mapped to the body of the request. If the value
  of the 'body' field is of type bytes or string then it is used for
  the HTTP request body as-is, with no conversion. If the body field is
  of any other type then it is converted to a JSON string. If the body
  field does not exist then the resulting payload of the HTTP request
  will be data value of the CloudEvent HTTP Binding Binary Content Mode
  representation of the final message as described earlier.
* Any other fields in the resulting expression will be ignored.

The CEL expression may access the incoming CloudEvent message in its
definition, as follows:

* The 'data' field of the incoming CloudEvent message can be accessed
  using the 'message.data' value. Subfields of 'message.data' may also be
  accessed if an input_payload_format has been specified on the Pipeline.
* Each attribute of the incoming CloudEvent message can be accessed
  using the 'message.' value, where  is replaced with the
  name of the attribute.
* Existing headers can be accessed in the CEL expression using the
  'headers' variable. The 'headers' variable defines a map of key/value
  pairs corresponding to the HTTP headers of the CloudEvent HTTP Binding
  Binary Content Mode representation of the final message as described
  earlier. For example, the following CEL expression can be used to
  construct an HTTP request by adding an additional header to the HTTP
  headers of the CloudEvent HTTP Binding Binary Content Mode
  representation of the final message and by overwriting the body of the
  request:

```
{
"headers": headers.merge({"new-header-key": "new-header-value"}),
"body": "new-body"
}
```

* The default binding for the message payload can be accessed using the
  'body' variable. It conatins a string representation of the message
  payload in the format specified by the 'output_payload_format' field.
  If the 'input_payload_format' field is not set, the 'body'
  variable contains the same message payload bytes that were published.

Additionally, the following CEL extension functions are provided for
use in this CEL expression:

* toBase64Url:
  map.toBase64Url() -> string
* Converts a CelValue to a base64url encoded string
* toJsonString: map.toJsonString() -> string
* Converts a CelValue to a JSON string
* merge:
  map1.merge(map2) -> map3
* Merges the passed CEL map with the existing CEL map the
  function is applied to.
* If the same key exists in both maps, if the key's value is type
  map both maps are merged else the value from the passed map is
  used.
* denormalize:
  map.denormalize() -> map
* Denormalizes a CEL map such that every value of type map or key
  in the map is expanded to return a single level map.
* The resulting keys are "." separated indices of the map keys.
* For example:
  {
  "a": 1,
  "b": {
  "c": 2,
  "d": 3
  }
  "e": [4, 5]
  }
  .denormalize()
  -> {
  "a": 1,
  "b.c": 2,
  "b.d": 3,
  "e.0": 4,
  "e.1": 5
  }
* setField:
  map.setField(key, value) -> message
* Sets the field of the message with the given key to the
  given value.
* If the field is not present it will be added.
* If the field is present it will be overwritten.
* The key can be a dot separated path to set a field in a nested
  message.
* Key must be of type string.
* Value may be any valid type.
* removeFields:
  map.removeFields([key1, key2, ...]) -> message
* Removes the fields of the map with the given keys.
* The keys can be a dot separated path to remove a field in a
  nested message.
* If a key is not found it will be ignored.
* Keys must be of type string.
* toMap:
  [map1, map2, ...].toMap() -> map
* Converts a CEL list of CEL maps to a single CEL map
* toCloudEventJsonWithPayloadFormat:
  message.toCloudEventJsonWithPayloadFormat() -> map
* Converts a message to the corresponding structure of JSON
  format for CloudEvents.
* It converts 'data' to destination payload format
  specified in 'output_payload_format'. If 'output_payload_format' is
  not set, the data will remain unchanged.
* It also sets the corresponding datacontenttype of
  the CloudEvent, as indicated by
  'output_payload_format'. If no
  'output_payload_format' is set it will use the value of the
  "datacontenttype" attribute on the CloudEvent if present, else
  remove "datacontenttype" attribute.
* This function expects that the content of the message will
  adhere to the standard CloudEvent format. If it doesn't then this
  function will fail.
* The result is a CEL map that corresponds to the JSON
  representation of the CloudEvent. To convert that data to a JSON
  string it can be chained with the toJsonString function.

The Pipeline expects that the message it receives adheres to the
standard CloudEvent format. If it doesn't then the outgoing message
request may fail with a persistent error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#message_binding_template GoogleEventarcPipeline#message_binding_template}

---

### GoogleEventarcPipelineDestinationsNetworkConfig <a name="GoogleEventarcPipelineDestinationsNetworkConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineDestinationsNetworkConfig {
	NetworkAttachment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | Name of the NetworkAttachment that allows access to the consumer VPC. Format: 'projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}'. |

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig.property.networkAttachment"></a>

```go
NetworkAttachment *string
```

- *Type:* *string

Name of the NetworkAttachment that allows access to the consumer VPC. Format: 'projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#network_attachment GoogleEventarcPipeline#network_attachment}

---

### GoogleEventarcPipelineDestinationsOutputPayloadFormat <a name="GoogleEventarcPipelineDestinationsOutputPayloadFormat" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat {
	Avro: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro,
	Json: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson,
	Protobuf: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat.property.avro">Avro</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro">GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro</a></code> | avro block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat.property.json">Json</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson">GoogleEventarcPipelineDestinationsOutputPayloadFormatJson</a></code> | json block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat.property.protobuf">Protobuf</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf">GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf</a></code> | protobuf block. |

---

##### `Avro`<sup>Optional</sup> <a name="Avro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat.property.avro"></a>

```go
Avro GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro">GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#avro GoogleEventarcPipeline#avro}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat.property.json"></a>

```go
Json GoogleEventarcPipelineDestinationsOutputPayloadFormatJson
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson">GoogleEventarcPipelineDestinationsOutputPayloadFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#json GoogleEventarcPipeline#json}

---

##### `Protobuf`<sup>Optional</sup> <a name="Protobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat.property.protobuf"></a>

```go
Protobuf GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf">GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

protobuf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#protobuf GoogleEventarcPipeline#protobuf}

---

### GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro <a name="GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro {
	SchemaDefinition: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro.property.schemaDefinition">SchemaDefinition</a></code> | <code>*string</code> | The entire schema definition is stored in this field. |

---

##### `SchemaDefinition`<sup>Optional</sup> <a name="SchemaDefinition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro.property.schemaDefinition"></a>

```go
SchemaDefinition *string
```

- *Type:* *string

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#schema_definition GoogleEventarcPipeline#schema_definition}

---

### GoogleEventarcPipelineDestinationsOutputPayloadFormatJson <a name="GoogleEventarcPipelineDestinationsOutputPayloadFormatJson" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson {

}
```


### GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf <a name="GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf {
	SchemaDefinition: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf.property.schemaDefinition">SchemaDefinition</a></code> | <code>*string</code> | The entire schema definition is stored in this field. |

---

##### `SchemaDefinition`<sup>Optional</sup> <a name="SchemaDefinition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf.property.schemaDefinition"></a>

```go
SchemaDefinition *string
```

- *Type:* *string

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#schema_definition GoogleEventarcPipeline#schema_definition}

---

### GoogleEventarcPipelineInputPayloadFormat <a name="GoogleEventarcPipelineInputPayloadFormat" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineInputPayloadFormat {
	Avro: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro,
	Json: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson,
	Protobuf: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat.property.avro">Avro</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro">GoogleEventarcPipelineInputPayloadFormatAvro</a></code> | avro block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat.property.json">Json</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson">GoogleEventarcPipelineInputPayloadFormatJson</a></code> | json block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat.property.protobuf">Protobuf</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf">GoogleEventarcPipelineInputPayloadFormatProtobuf</a></code> | protobuf block. |

---

##### `Avro`<sup>Optional</sup> <a name="Avro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat.property.avro"></a>

```go
Avro GoogleEventarcPipelineInputPayloadFormatAvro
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro">GoogleEventarcPipelineInputPayloadFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#avro GoogleEventarcPipeline#avro}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat.property.json"></a>

```go
Json GoogleEventarcPipelineInputPayloadFormatJson
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson">GoogleEventarcPipelineInputPayloadFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#json GoogleEventarcPipeline#json}

---

##### `Protobuf`<sup>Optional</sup> <a name="Protobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat.property.protobuf"></a>

```go
Protobuf GoogleEventarcPipelineInputPayloadFormatProtobuf
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf">GoogleEventarcPipelineInputPayloadFormatProtobuf</a>

protobuf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#protobuf GoogleEventarcPipeline#protobuf}

---

### GoogleEventarcPipelineInputPayloadFormatAvro <a name="GoogleEventarcPipelineInputPayloadFormatAvro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineInputPayloadFormatAvro {
	SchemaDefinition: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro.property.schemaDefinition">SchemaDefinition</a></code> | <code>*string</code> | The entire schema definition is stored in this field. |

---

##### `SchemaDefinition`<sup>Optional</sup> <a name="SchemaDefinition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro.property.schemaDefinition"></a>

```go
SchemaDefinition *string
```

- *Type:* *string

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#schema_definition GoogleEventarcPipeline#schema_definition}

---

### GoogleEventarcPipelineInputPayloadFormatJson <a name="GoogleEventarcPipelineInputPayloadFormatJson" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineInputPayloadFormatJson {

}
```


### GoogleEventarcPipelineInputPayloadFormatProtobuf <a name="GoogleEventarcPipelineInputPayloadFormatProtobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf {
	SchemaDefinition: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf.property.schemaDefinition">SchemaDefinition</a></code> | <code>*string</code> | The entire schema definition is stored in this field. |

---

##### `SchemaDefinition`<sup>Optional</sup> <a name="SchemaDefinition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf.property.schemaDefinition"></a>

```go
SchemaDefinition *string
```

- *Type:* *string

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#schema_definition GoogleEventarcPipeline#schema_definition}

---

### GoogleEventarcPipelineLoggingConfig <a name="GoogleEventarcPipelineLoggingConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineLoggingConfig {
	LogSeverity: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig.property.logSeverity">LogSeverity</a></code> | <code>*string</code> | The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. |

---

##### `LogSeverity`<sup>Optional</sup> <a name="LogSeverity" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig.property.logSeverity"></a>

```go
LogSeverity *string
```

- *Type:* *string

The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry.

Logs at severitiy ≥ this value will be sent, unless it is NONE. Possible values: ["NONE", "DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#log_severity GoogleEventarcPipeline#log_severity}

---

### GoogleEventarcPipelineMediations <a name="GoogleEventarcPipelineMediations" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineMediations {
	Transformation: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations.property.transformation">Transformation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation">GoogleEventarcPipelineMediationsTransformation</a></code> | transformation block. |

---

##### `Transformation`<sup>Optional</sup> <a name="Transformation" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediations.property.transformation"></a>

```go
Transformation GoogleEventarcPipelineMediationsTransformation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation">GoogleEventarcPipelineMediationsTransformation</a>

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#transformation GoogleEventarcPipeline#transformation}

---

### GoogleEventarcPipelineMediationsTransformation <a name="GoogleEventarcPipelineMediationsTransformation" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineMediationsTransformation {
	TransformationTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation.property.transformationTemplate">TransformationTemplate</a></code> | <code>*string</code> | The CEL expression template to apply to transform messages. |

---

##### `TransformationTemplate`<sup>Optional</sup> <a name="TransformationTemplate" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation.property.transformationTemplate"></a>

```go
TransformationTemplate *string
```

- *Type:* *string

The CEL expression template to apply to transform messages.

The following CEL extension functions are provided for
use in this CEL expression:

* merge:
  map1.merge(map2) -> map3
* Merges the passed CEL map with the existing CEL map the
  function is applied to.
* If the same key exists in both maps, if the key's value is type
  map both maps are merged else the value from the passed map is
  used.
* denormalize:
  map.denormalize() -> map
* Denormalizes a CEL map such that every value of type map or key
  in the map is expanded to return a single level map.
* The resulting keys are "." separated indices of the map keys.
* For example:
  {
  "a": 1,
  "b": {
  "c": 2,
  "d": 3
  }
  "e": [4, 5]
  }
  .denormalize()
  -> {
  "a": 1,
  "b.c": 2,
  "b.d": 3,
  "e.0": 4,
  "e.1": 5
  }
* setField:
  map.setField(key, value) -> message
* Sets the field of the message with the given key to the
  given value.
* If the field is not present it will be added.
* If the field is present it will be overwritten.
* The key can be a dot separated path to set a field in a nested
  message.
* Key must be of type string.
* Value may be any valid type.
* removeFields:
  map.removeFields([key1, key2, ...]) -> message
* Removes the fields of the map with the given keys.
* The keys can be a dot separated path to remove a field in a
  nested message.
* If a key is not found it will be ignored.
* Keys must be of type string.
* toMap:
  [map1, map2, ...].toMap() -> map
* Converts a CEL list of CEL maps to a single CEL map
* toDestinationPayloadFormat():
  message.data.toDestinationPayloadFormat() -> string or bytes
* Converts the message data to the destination payload format
  specified in Pipeline.Destination.output_payload_format
* This function is meant to be applied to the message.data field.
* If the destination payload format is not set, the function will
  return the message data unchanged.
* toCloudEventJsonWithPayloadFormat:
  message.toCloudEventJsonWithPayloadFormat() -> map
* Converts a message to the corresponding structure of JSON
  format for CloudEvents
* This function applies toDestinationPayloadFormat() to the
  message data. It also sets the corresponding datacontenttype of
  the CloudEvent, as indicated by
  Pipeline.Destination.output_payload_format. If no
  output_payload_format is set it will use the existing
  datacontenttype on the CloudEvent if present, else leave
  datacontenttype absent.
* This function expects that the content of the message will
  adhere to the standard CloudEvent format. If it doesn't then this
  function will fail.
* The result is a CEL map that corresponds to the JSON
  representation of the CloudEvent. To convert that data to a JSON
  string it can be chained with the toJsonString function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#transformation_template GoogleEventarcPipeline#transformation_template}

---

### GoogleEventarcPipelineRetryPolicy <a name="GoogleEventarcPipelineRetryPolicy" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineRetryPolicy {
	MaxAttempts: *f64,
	MaxRetryDelay: *string,
	MinRetryDelay: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy.property.maxAttempts">MaxAttempts</a></code> | <code>*f64</code> | The maximum number of delivery attempts for any message. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy.property.maxRetryDelay">MaxRetryDelay</a></code> | <code>*string</code> | The maximum amount of seconds to wait between retry attempts. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy.property.minRetryDelay">MinRetryDelay</a></code> | <code>*string</code> | The minimum amount of seconds to wait between retry attempts. |

---

##### `MaxAttempts`<sup>Optional</sup> <a name="MaxAttempts" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy.property.maxAttempts"></a>

```go
MaxAttempts *f64
```

- *Type:* *f64

The maximum number of delivery attempts for any message.

The value must
be between 1 and 100.
The default value for this field is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#max_attempts GoogleEventarcPipeline#max_attempts}

---

##### `MaxRetryDelay`<sup>Optional</sup> <a name="MaxRetryDelay" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy.property.maxRetryDelay"></a>

```go
MaxRetryDelay *string
```

- *Type:* *string

The maximum amount of seconds to wait between retry attempts.

The value
must be between 1 and 600.
The default value for this field is 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#max_retry_delay GoogleEventarcPipeline#max_retry_delay}

---

##### `MinRetryDelay`<sup>Optional</sup> <a name="MinRetryDelay" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy.property.minRetryDelay"></a>

```go
MinRetryDelay *string
```

- *Type:* *string

The minimum amount of seconds to wait between retry attempts.

The value
must be between 1 and 600.
The default value for this field is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#min_retry_delay GoogleEventarcPipeline#min_retry_delay}

---

### GoogleEventarcPipelineTimeouts <a name="GoogleEventarcPipelineTimeouts" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

&googleeventarcpipeline.GoogleEventarcPipelineTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#create GoogleEventarcPipeline#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#delete GoogleEventarcPipeline#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#update GoogleEventarcPipeline#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#create GoogleEventarcPipeline#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#delete GoogleEventarcPipeline#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_eventarc_pipeline#update GoogleEventarcPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference <a name="GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resetAudience"></a>

```go
func ResetAudience()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc">GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc">GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

---


### GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference <a name="GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken">GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken">GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

---


### GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference <a name="GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.putGoogleOidc">PutGoogleOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.putOauthToken">PutOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.resetGoogleOidc">ResetGoogleOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.resetOauthToken">ResetOauthToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGoogleOidc` <a name="PutGoogleOidc" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.putGoogleOidc"></a>

```go
func PutGoogleOidc(value GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.putGoogleOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc">GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

---

##### `PutOauthToken` <a name="PutOauthToken" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.putOauthToken"></a>

```go
func PutOauthToken(value GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.putOauthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken">GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

---

##### `ResetGoogleOidc` <a name="ResetGoogleOidc" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.resetGoogleOidc"></a>

```go
func ResetGoogleOidc()
```

##### `ResetOauthToken` <a name="ResetOauthToken" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.resetOauthToken"></a>

```go
func ResetOauthToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidc">GoogleOidc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference">GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthToken">OauthToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference">GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidcInput">GoogleOidcInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc">GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthTokenInput">OauthTokenInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken">GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig">GoogleEventarcPipelineDestinationsAuthenticationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GoogleOidc`<sup>Required</sup> <a name="GoogleOidc" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidc"></a>

```go
func GoogleOidc() GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference">GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference</a>

---

##### `OauthToken`<sup>Required</sup> <a name="OauthToken" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthToken"></a>

```go
func OauthToken() GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference">GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference</a>

---

##### `GoogleOidcInput`<sup>Optional</sup> <a name="GoogleOidcInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidcInput"></a>

```go
func GoogleOidcInput() GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc">GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

---

##### `OauthTokenInput`<sup>Optional</sup> <a name="OauthTokenInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthTokenInput"></a>

```go
func OauthTokenInput() GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken">GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcPipelineDestinationsAuthenticationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig">GoogleEventarcPipelineDestinationsAuthenticationConfig</a>

---


### GoogleEventarcPipelineDestinationsHttpEndpointOutputReference <a name="GoogleEventarcPipelineDestinationsHttpEndpointOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineDestinationsHttpEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcPipelineDestinationsHttpEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.resetMessageBindingTemplate">ResetMessageBindingTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessageBindingTemplate` <a name="ResetMessageBindingTemplate" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.resetMessageBindingTemplate"></a>

```go
func ResetMessageBindingTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplateInput">MessageBindingTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplate">MessageBindingTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint">GoogleEventarcPipelineDestinationsHttpEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageBindingTemplateInput`<sup>Optional</sup> <a name="MessageBindingTemplateInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplateInput"></a>

```go
func MessageBindingTemplateInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `MessageBindingTemplate`<sup>Required</sup> <a name="MessageBindingTemplate" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplate"></a>

```go
func MessageBindingTemplate() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcPipelineDestinationsHttpEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint">GoogleEventarcPipelineDestinationsHttpEndpoint</a>

---


### GoogleEventarcPipelineDestinationsList <a name="GoogleEventarcPipelineDestinationsList" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleEventarcPipelineDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.get"></a>

```go
func Get(index *f64) GoogleEventarcPipelineDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleEventarcPipelineDestinationsNetworkConfigOutputReference <a name="GoogleEventarcPipelineDestinationsNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineDestinationsNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcPipelineDestinationsNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig">GoogleEventarcPipelineDestinationsNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```go
func NetworkAttachmentInput() *string
```

- *Type:* *string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachment"></a>

```go
func NetworkAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcPipelineDestinationsNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig">GoogleEventarcPipelineDestinationsNetworkConfig</a>

---


### GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference <a name="GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resetSchemaDefinition">ResetSchemaDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchemaDefinition` <a name="ResetSchemaDefinition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resetSchemaDefinition"></a>

```go
func ResetSchemaDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinitionInput">SchemaDefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinition">SchemaDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro">GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemaDefinitionInput`<sup>Optional</sup> <a name="SchemaDefinitionInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinitionInput"></a>

```go
func SchemaDefinitionInput() *string
```

- *Type:* *string

---

##### `SchemaDefinition`<sup>Required</sup> <a name="SchemaDefinition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinition"></a>

```go
func SchemaDefinition() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro">GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro</a>

---


### GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference <a name="GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson">GoogleEventarcPipelineDestinationsOutputPayloadFormatJson</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcPipelineDestinationsOutputPayloadFormatJson
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson">GoogleEventarcPipelineDestinationsOutputPayloadFormatJson</a>

---


### GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference <a name="GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.putAvro">PutAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.putJson">PutJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.putProtobuf">PutProtobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetAvro">ResetAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetJson">ResetJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetProtobuf">ResetProtobuf</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvro` <a name="PutAvro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.putAvro"></a>

```go
func PutAvro(value GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.putAvro.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro">GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro</a>

---

##### `PutJson` <a name="PutJson" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.putJson"></a>

```go
func PutJson(value GoogleEventarcPipelineDestinationsOutputPayloadFormatJson)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson">GoogleEventarcPipelineDestinationsOutputPayloadFormatJson</a>

---

##### `PutProtobuf` <a name="PutProtobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.putProtobuf"></a>

```go
func PutProtobuf(value GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.putProtobuf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf">GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

---

##### `ResetAvro` <a name="ResetAvro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetAvro"></a>

```go
func ResetAvro()
```

##### `ResetJson` <a name="ResetJson" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetJson"></a>

```go
func ResetJson()
```

##### `ResetProtobuf` <a name="ResetProtobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetProtobuf"></a>

```go
func ResetProtobuf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avro">Avro</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference">GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.json">Json</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference">GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobuf">Protobuf</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference">GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avroInput">AvroInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro">GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.jsonInput">JsonInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson">GoogleEventarcPipelineDestinationsOutputPayloadFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobufInput">ProtobufInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf">GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat">GoogleEventarcPipelineDestinationsOutputPayloadFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Avro`<sup>Required</sup> <a name="Avro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avro"></a>

```go
func Avro() GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference">GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.json"></a>

```go
func Json() GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference">GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference</a>

---

##### `Protobuf`<sup>Required</sup> <a name="Protobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobuf"></a>

```go
func Protobuf() GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference">GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference</a>

---

##### `AvroInput`<sup>Optional</sup> <a name="AvroInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avroInput"></a>

```go
func AvroInput() GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro">GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro</a>

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.jsonInput"></a>

```go
func JsonInput() GoogleEventarcPipelineDestinationsOutputPayloadFormatJson
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatJson">GoogleEventarcPipelineDestinationsOutputPayloadFormatJson</a>

---

##### `ProtobufInput`<sup>Optional</sup> <a name="ProtobufInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobufInput"></a>

```go
func ProtobufInput() GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf">GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcPipelineDestinationsOutputPayloadFormat
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat">GoogleEventarcPipelineDestinationsOutputPayloadFormat</a>

---


### GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference <a name="GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resetSchemaDefinition">ResetSchemaDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchemaDefinition` <a name="ResetSchemaDefinition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resetSchemaDefinition"></a>

```go
func ResetSchemaDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput">SchemaDefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinition">SchemaDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf">GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemaDefinitionInput`<sup>Optional</sup> <a name="SchemaDefinitionInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput"></a>

```go
func SchemaDefinitionInput() *string
```

- *Type:* *string

---

##### `SchemaDefinition`<sup>Required</sup> <a name="SchemaDefinition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinition"></a>

```go
func SchemaDefinition() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf">GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

---


### GoogleEventarcPipelineDestinationsOutputReference <a name="GoogleEventarcPipelineDestinationsOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleEventarcPipelineDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putAuthenticationConfig">PutAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putHttpEndpoint">PutHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putOutputPayloadFormat">PutOutputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetAuthenticationConfig">ResetAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetHttpEndpoint">ResetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetMessageBus">ResetMessageBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetOutputPayloadFormat">ResetOutputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetWorkflow">ResetWorkflow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticationConfig` <a name="PutAuthenticationConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putAuthenticationConfig"></a>

```go
func PutAuthenticationConfig(value GoogleEventarcPipelineDestinationsAuthenticationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putAuthenticationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig">GoogleEventarcPipelineDestinationsAuthenticationConfig</a>

---

##### `PutHttpEndpoint` <a name="PutHttpEndpoint" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putHttpEndpoint"></a>

```go
func PutHttpEndpoint(value GoogleEventarcPipelineDestinationsHttpEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putHttpEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint">GoogleEventarcPipelineDestinationsHttpEndpoint</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putNetworkConfig"></a>

```go
func PutNetworkConfig(value GoogleEventarcPipelineDestinationsNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig">GoogleEventarcPipelineDestinationsNetworkConfig</a>

---

##### `PutOutputPayloadFormat` <a name="PutOutputPayloadFormat" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putOutputPayloadFormat"></a>

```go
func PutOutputPayloadFormat(value GoogleEventarcPipelineDestinationsOutputPayloadFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.putOutputPayloadFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat">GoogleEventarcPipelineDestinationsOutputPayloadFormat</a>

---

##### `ResetAuthenticationConfig` <a name="ResetAuthenticationConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetAuthenticationConfig"></a>

```go
func ResetAuthenticationConfig()
```

##### `ResetHttpEndpoint` <a name="ResetHttpEndpoint" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetHttpEndpoint"></a>

```go
func ResetHttpEndpoint()
```

##### `ResetMessageBus` <a name="ResetMessageBus" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetMessageBus"></a>

```go
func ResetMessageBus()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetNetworkConfig"></a>

```go
func ResetNetworkConfig()
```

##### `ResetOutputPayloadFormat` <a name="ResetOutputPayloadFormat" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetOutputPayloadFormat"></a>

```go
func ResetOutputPayloadFormat()
```

##### `ResetTopic` <a name="ResetTopic" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetTopic"></a>

```go
func ResetTopic()
```

##### `ResetWorkflow` <a name="ResetWorkflow" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.resetWorkflow"></a>

```go
func ResetWorkflow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.authenticationConfig">AuthenticationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference">GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference">GoogleEventarcPipelineDestinationsHttpEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference">GoogleEventarcPipelineDestinationsNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.outputPayloadFormat">OutputPayloadFormat</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference">GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.authenticationConfigInput">AuthenticationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig">GoogleEventarcPipelineDestinationsAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.httpEndpointInput">HttpEndpointInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint">GoogleEventarcPipelineDestinationsHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.messageBusInput">MessageBusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig">GoogleEventarcPipelineDestinationsNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.outputPayloadFormatInput">OutputPayloadFormatInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat">GoogleEventarcPipelineDestinationsOutputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.topicInput">TopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.workflowInput">WorkflowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.messageBus">MessageBus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.workflow">Workflow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationConfig`<sup>Required</sup> <a name="AuthenticationConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.authenticationConfig"></a>

```go
func AuthenticationConfig() GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference">GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference</a>

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.httpEndpoint"></a>

```go
func HttpEndpoint() GoogleEventarcPipelineDestinationsHttpEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpointOutputReference">GoogleEventarcPipelineDestinationsHttpEndpointOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.networkConfig"></a>

```go
func NetworkConfig() GoogleEventarcPipelineDestinationsNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfigOutputReference">GoogleEventarcPipelineDestinationsNetworkConfigOutputReference</a>

---

##### `OutputPayloadFormat`<sup>Required</sup> <a name="OutputPayloadFormat" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.outputPayloadFormat"></a>

```go
func OutputPayloadFormat() GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference">GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference</a>

---

##### `AuthenticationConfigInput`<sup>Optional</sup> <a name="AuthenticationConfigInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.authenticationConfigInput"></a>

```go
func AuthenticationConfigInput() GoogleEventarcPipelineDestinationsAuthenticationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsAuthenticationConfig">GoogleEventarcPipelineDestinationsAuthenticationConfig</a>

---

##### `HttpEndpointInput`<sup>Optional</sup> <a name="HttpEndpointInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.httpEndpointInput"></a>

```go
func HttpEndpointInput() GoogleEventarcPipelineDestinationsHttpEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsHttpEndpoint">GoogleEventarcPipelineDestinationsHttpEndpoint</a>

---

##### `MessageBusInput`<sup>Optional</sup> <a name="MessageBusInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.messageBusInput"></a>

```go
func MessageBusInput() *string
```

- *Type:* *string

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.networkConfigInput"></a>

```go
func NetworkConfigInput() GoogleEventarcPipelineDestinationsNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsNetworkConfig">GoogleEventarcPipelineDestinationsNetworkConfig</a>

---

##### `OutputPayloadFormatInput`<sup>Optional</sup> <a name="OutputPayloadFormatInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.outputPayloadFormatInput"></a>

```go
func OutputPayloadFormatInput() GoogleEventarcPipelineDestinationsOutputPayloadFormat
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputPayloadFormat">GoogleEventarcPipelineDestinationsOutputPayloadFormat</a>

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.topicInput"></a>

```go
func TopicInput() *string
```

- *Type:* *string

---

##### `WorkflowInput`<sup>Optional</sup> <a name="WorkflowInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.workflowInput"></a>

```go
func WorkflowInput() *string
```

- *Type:* *string

---

##### `MessageBus`<sup>Required</sup> <a name="MessageBus" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.messageBus"></a>

```go
func MessageBus() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `Workflow`<sup>Required</sup> <a name="Workflow" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.workflow"></a>

```go
func Workflow() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleEventarcPipelineInputPayloadFormatAvroOutputReference <a name="GoogleEventarcPipelineInputPayloadFormatAvroOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineInputPayloadFormatAvroOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcPipelineInputPayloadFormatAvroOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.resetSchemaDefinition">ResetSchemaDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchemaDefinition` <a name="ResetSchemaDefinition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.resetSchemaDefinition"></a>

```go
func ResetSchemaDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinitionInput">SchemaDefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinition">SchemaDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro">GoogleEventarcPipelineInputPayloadFormatAvro</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemaDefinitionInput`<sup>Optional</sup> <a name="SchemaDefinitionInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinitionInput"></a>

```go
func SchemaDefinitionInput() *string
```

- *Type:* *string

---

##### `SchemaDefinition`<sup>Required</sup> <a name="SchemaDefinition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinition"></a>

```go
func SchemaDefinition() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcPipelineInputPayloadFormatAvro
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro">GoogleEventarcPipelineInputPayloadFormatAvro</a>

---


### GoogleEventarcPipelineInputPayloadFormatJsonOutputReference <a name="GoogleEventarcPipelineInputPayloadFormatJsonOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineInputPayloadFormatJsonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcPipelineInputPayloadFormatJsonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson">GoogleEventarcPipelineInputPayloadFormatJson</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcPipelineInputPayloadFormatJson
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson">GoogleEventarcPipelineInputPayloadFormatJson</a>

---


### GoogleEventarcPipelineInputPayloadFormatOutputReference <a name="GoogleEventarcPipelineInputPayloadFormatOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineInputPayloadFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcPipelineInputPayloadFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.putAvro">PutAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.putJson">PutJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.putProtobuf">PutProtobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.resetAvro">ResetAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.resetJson">ResetJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.resetProtobuf">ResetProtobuf</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvro` <a name="PutAvro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.putAvro"></a>

```go
func PutAvro(value GoogleEventarcPipelineInputPayloadFormatAvro)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.putAvro.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro">GoogleEventarcPipelineInputPayloadFormatAvro</a>

---

##### `PutJson` <a name="PutJson" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.putJson"></a>

```go
func PutJson(value GoogleEventarcPipelineInputPayloadFormatJson)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson">GoogleEventarcPipelineInputPayloadFormatJson</a>

---

##### `PutProtobuf` <a name="PutProtobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.putProtobuf"></a>

```go
func PutProtobuf(value GoogleEventarcPipelineInputPayloadFormatProtobuf)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.putProtobuf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf">GoogleEventarcPipelineInputPayloadFormatProtobuf</a>

---

##### `ResetAvro` <a name="ResetAvro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.resetAvro"></a>

```go
func ResetAvro()
```

##### `ResetJson` <a name="ResetJson" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.resetJson"></a>

```go
func ResetJson()
```

##### `ResetProtobuf` <a name="ResetProtobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.resetProtobuf"></a>

```go
func ResetProtobuf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.avro">Avro</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference">GoogleEventarcPipelineInputPayloadFormatAvroOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.json">Json</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference">GoogleEventarcPipelineInputPayloadFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.protobuf">Protobuf</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference">GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.avroInput">AvroInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro">GoogleEventarcPipelineInputPayloadFormatAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.jsonInput">JsonInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson">GoogleEventarcPipelineInputPayloadFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.protobufInput">ProtobufInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf">GoogleEventarcPipelineInputPayloadFormatProtobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat">GoogleEventarcPipelineInputPayloadFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Avro`<sup>Required</sup> <a name="Avro" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.avro"></a>

```go
func Avro() GoogleEventarcPipelineInputPayloadFormatAvroOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvroOutputReference">GoogleEventarcPipelineInputPayloadFormatAvroOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.json"></a>

```go
func Json() GoogleEventarcPipelineInputPayloadFormatJsonOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJsonOutputReference">GoogleEventarcPipelineInputPayloadFormatJsonOutputReference</a>

---

##### `Protobuf`<sup>Required</sup> <a name="Protobuf" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.protobuf"></a>

```go
func Protobuf() GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference">GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference</a>

---

##### `AvroInput`<sup>Optional</sup> <a name="AvroInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.avroInput"></a>

```go
func AvroInput() GoogleEventarcPipelineInputPayloadFormatAvro
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatAvro">GoogleEventarcPipelineInputPayloadFormatAvro</a>

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.jsonInput"></a>

```go
func JsonInput() GoogleEventarcPipelineInputPayloadFormatJson
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatJson">GoogleEventarcPipelineInputPayloadFormatJson</a>

---

##### `ProtobufInput`<sup>Optional</sup> <a name="ProtobufInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.protobufInput"></a>

```go
func ProtobufInput() GoogleEventarcPipelineInputPayloadFormatProtobuf
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf">GoogleEventarcPipelineInputPayloadFormatProtobuf</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcPipelineInputPayloadFormat
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormat">GoogleEventarcPipelineInputPayloadFormat</a>

---


### GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference <a name="GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineInputPayloadFormatProtobufOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.resetSchemaDefinition">ResetSchemaDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchemaDefinition` <a name="ResetSchemaDefinition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.resetSchemaDefinition"></a>

```go
func ResetSchemaDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput">SchemaDefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinition">SchemaDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf">GoogleEventarcPipelineInputPayloadFormatProtobuf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemaDefinitionInput`<sup>Optional</sup> <a name="SchemaDefinitionInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput"></a>

```go
func SchemaDefinitionInput() *string
```

- *Type:* *string

---

##### `SchemaDefinition`<sup>Required</sup> <a name="SchemaDefinition" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinition"></a>

```go
func SchemaDefinition() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcPipelineInputPayloadFormatProtobuf
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineInputPayloadFormatProtobuf">GoogleEventarcPipelineInputPayloadFormatProtobuf</a>

---


### GoogleEventarcPipelineLoggingConfigOutputReference <a name="GoogleEventarcPipelineLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcPipelineLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.resetLogSeverity">ResetLogSeverity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogSeverity` <a name="ResetLogSeverity" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.resetLogSeverity"></a>

```go
func ResetLogSeverity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.logSeverityInput">LogSeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.logSeverity">LogSeverity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig">GoogleEventarcPipelineLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogSeverityInput`<sup>Optional</sup> <a name="LogSeverityInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.logSeverityInput"></a>

```go
func LogSeverityInput() *string
```

- *Type:* *string

---

##### `LogSeverity`<sup>Required</sup> <a name="LogSeverity" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.logSeverity"></a>

```go
func LogSeverity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcPipelineLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineLoggingConfig">GoogleEventarcPipelineLoggingConfig</a>

---


### GoogleEventarcPipelineMediationsList <a name="GoogleEventarcPipelineMediationsList" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineMediationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleEventarcPipelineMediationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.get"></a>

```go
func Get(index *f64) GoogleEventarcPipelineMediationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleEventarcPipelineMediationsOutputReference <a name="GoogleEventarcPipelineMediationsOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineMediationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleEventarcPipelineMediationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.putTransformation">PutTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.resetTransformation">ResetTransformation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTransformation` <a name="PutTransformation" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.putTransformation"></a>

```go
func PutTransformation(value GoogleEventarcPipelineMediationsTransformation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.putTransformation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation">GoogleEventarcPipelineMediationsTransformation</a>

---

##### `ResetTransformation` <a name="ResetTransformation" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.resetTransformation"></a>

```go
func ResetTransformation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.transformation">Transformation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference">GoogleEventarcPipelineMediationsTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.transformationInput">TransformationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation">GoogleEventarcPipelineMediationsTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.transformation"></a>

```go
func Transformation() GoogleEventarcPipelineMediationsTransformationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference">GoogleEventarcPipelineMediationsTransformationOutputReference</a>

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.transformationInput"></a>

```go
func TransformationInput() GoogleEventarcPipelineMediationsTransformation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation">GoogleEventarcPipelineMediationsTransformation</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleEventarcPipelineMediationsTransformationOutputReference <a name="GoogleEventarcPipelineMediationsTransformationOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineMediationsTransformationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcPipelineMediationsTransformationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.resetTransformationTemplate">ResetTransformationTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransformationTemplate` <a name="ResetTransformationTemplate" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.resetTransformationTemplate"></a>

```go
func ResetTransformationTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.transformationTemplateInput">TransformationTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.transformationTemplate">TransformationTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation">GoogleEventarcPipelineMediationsTransformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TransformationTemplateInput`<sup>Optional</sup> <a name="TransformationTemplateInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.transformationTemplateInput"></a>

```go
func TransformationTemplateInput() *string
```

- *Type:* *string

---

##### `TransformationTemplate`<sup>Required</sup> <a name="TransformationTemplate" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.transformationTemplate"></a>

```go
func TransformationTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcPipelineMediationsTransformation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineMediationsTransformation">GoogleEventarcPipelineMediationsTransformation</a>

---


### GoogleEventarcPipelineRetryPolicyOutputReference <a name="GoogleEventarcPipelineRetryPolicyOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineRetryPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcPipelineRetryPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.resetMaxAttempts">ResetMaxAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.resetMaxRetryDelay">ResetMaxRetryDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.resetMinRetryDelay">ResetMinRetryDelay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxAttempts` <a name="ResetMaxAttempts" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.resetMaxAttempts"></a>

```go
func ResetMaxAttempts()
```

##### `ResetMaxRetryDelay` <a name="ResetMaxRetryDelay" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.resetMaxRetryDelay"></a>

```go
func ResetMaxRetryDelay()
```

##### `ResetMinRetryDelay` <a name="ResetMinRetryDelay" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.resetMinRetryDelay"></a>

```go
func ResetMinRetryDelay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.maxAttemptsInput">MaxAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.maxRetryDelayInput">MaxRetryDelayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.minRetryDelayInput">MinRetryDelayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.maxAttempts">MaxAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.maxRetryDelay">MaxRetryDelay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.minRetryDelay">MinRetryDelay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy">GoogleEventarcPipelineRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxAttemptsInput`<sup>Optional</sup> <a name="MaxAttemptsInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.maxAttemptsInput"></a>

```go
func MaxAttemptsInput() *f64
```

- *Type:* *f64

---

##### `MaxRetryDelayInput`<sup>Optional</sup> <a name="MaxRetryDelayInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.maxRetryDelayInput"></a>

```go
func MaxRetryDelayInput() *string
```

- *Type:* *string

---

##### `MinRetryDelayInput`<sup>Optional</sup> <a name="MinRetryDelayInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.minRetryDelayInput"></a>

```go
func MinRetryDelayInput() *string
```

- *Type:* *string

---

##### `MaxAttempts`<sup>Required</sup> <a name="MaxAttempts" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.maxAttempts"></a>

```go
func MaxAttempts() *f64
```

- *Type:* *f64

---

##### `MaxRetryDelay`<sup>Required</sup> <a name="MaxRetryDelay" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.maxRetryDelay"></a>

```go
func MaxRetryDelay() *string
```

- *Type:* *string

---

##### `MinRetryDelay`<sup>Required</sup> <a name="MinRetryDelay" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.minRetryDelay"></a>

```go
func MinRetryDelay() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcPipelineRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineRetryPolicy">GoogleEventarcPipelineRetryPolicy</a>

---


### GoogleEventarcPipelineTimeoutsOutputReference <a name="GoogleEventarcPipelineTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcpipeline"

googleeventarcpipeline.NewGoogleEventarcPipelineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcPipelineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcPipeline.GoogleEventarcPipelineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



