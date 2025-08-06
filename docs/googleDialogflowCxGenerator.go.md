# `googleDialogflowCxGenerator` Submodule <a name="`googleDialogflowCxGenerator` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxGenerator <a name="GoogleDialogflowCxGenerator" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator google_dialogflow_cx_generator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxgenerator"

googledialogflowcxgenerator.NewGoogleDialogflowCxGenerator(scope Construct, id *string, config GoogleDialogflowCxGeneratorConfig) GoogleDialogflowCxGenerator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig">GoogleDialogflowCxGeneratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig">GoogleDialogflowCxGeneratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putLlmModelSettings">PutLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putModelParameter">PutModelParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putPlaceholders">PutPlaceholders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putPromptText">PutPromptText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetLlmModelSettings">ResetLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetModelParameter">ResetModelParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetPlaceholders">ResetPlaceholders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLlmModelSettings` <a name="PutLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putLlmModelSettings"></a>

```go
func PutLlmModelSettings(value GoogleDialogflowCxGeneratorLlmModelSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putLlmModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings">GoogleDialogflowCxGeneratorLlmModelSettings</a>

---

##### `PutModelParameter` <a name="PutModelParameter" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putModelParameter"></a>

```go
func PutModelParameter(value GoogleDialogflowCxGeneratorModelParameter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putModelParameter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter">GoogleDialogflowCxGeneratorModelParameter</a>

---

##### `PutPlaceholders` <a name="PutPlaceholders" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putPlaceholders"></a>

```go
func PutPlaceholders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putPlaceholders.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPromptText` <a name="PutPromptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putPromptText"></a>

```go
func PutPromptText(value GoogleDialogflowCxGeneratorPromptText)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putPromptText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText">GoogleDialogflowCxGeneratorPromptText</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDialogflowCxGeneratorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts">GoogleDialogflowCxGeneratorTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetId"></a>

```go
func ResetId()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetLanguageCode"></a>

```go
func ResetLanguageCode()
```

##### `ResetLlmModelSettings` <a name="ResetLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetLlmModelSettings"></a>

```go
func ResetLlmModelSettings()
```

##### `ResetModelParameter` <a name="ResetModelParameter" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetModelParameter"></a>

```go
func ResetModelParameter()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetParent"></a>

```go
func ResetParent()
```

##### `ResetPlaceholders` <a name="ResetPlaceholders" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetPlaceholders"></a>

```go
func ResetPlaceholders()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxGenerator resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxgenerator"

googledialogflowcxgenerator.GoogleDialogflowCxGenerator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxgenerator"

googledialogflowcxgenerator.GoogleDialogflowCxGenerator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxgenerator"

googledialogflowcxgenerator.GoogleDialogflowCxGenerator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxgenerator"

googledialogflowcxgenerator.GoogleDialogflowCxGenerator_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDialogflowCxGenerator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDialogflowCxGenerator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDialogflowCxGenerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxGenerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.llmModelSettings">LlmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference">GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.modelParameter">ModelParameter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference">GoogleDialogflowCxGeneratorModelParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.placeholders">Placeholders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList">GoogleDialogflowCxGeneratorPlaceholdersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.promptText">PromptText</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference">GoogleDialogflowCxGeneratorPromptTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference">GoogleDialogflowCxGeneratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.llmModelSettingsInput">LlmModelSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings">GoogleDialogflowCxGeneratorLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.modelParameterInput">ModelParameterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter">GoogleDialogflowCxGeneratorModelParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.placeholdersInput">PlaceholdersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.promptTextInput">PromptTextInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText">GoogleDialogflowCxGeneratorPromptText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LlmModelSettings`<sup>Required</sup> <a name="LlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.llmModelSettings"></a>

```go
func LlmModelSettings() GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference">GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference</a>

---

##### `ModelParameter`<sup>Required</sup> <a name="ModelParameter" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.modelParameter"></a>

```go
func ModelParameter() GoogleDialogflowCxGeneratorModelParameterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference">GoogleDialogflowCxGeneratorModelParameterOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Placeholders`<sup>Required</sup> <a name="Placeholders" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.placeholders"></a>

```go
func Placeholders() GoogleDialogflowCxGeneratorPlaceholdersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList">GoogleDialogflowCxGeneratorPlaceholdersList</a>

---

##### `PromptText`<sup>Required</sup> <a name="PromptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.promptText"></a>

```go
func PromptText() GoogleDialogflowCxGeneratorPromptTextOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference">GoogleDialogflowCxGeneratorPromptTextOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.timeouts"></a>

```go
func Timeouts() GoogleDialogflowCxGeneratorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference">GoogleDialogflowCxGeneratorTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `LlmModelSettingsInput`<sup>Optional</sup> <a name="LlmModelSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.llmModelSettingsInput"></a>

```go
func LlmModelSettingsInput() GoogleDialogflowCxGeneratorLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings">GoogleDialogflowCxGeneratorLlmModelSettings</a>

---

##### `ModelParameterInput`<sup>Optional</sup> <a name="ModelParameterInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.modelParameterInput"></a>

```go
func ModelParameterInput() GoogleDialogflowCxGeneratorModelParameter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter">GoogleDialogflowCxGeneratorModelParameter</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `PlaceholdersInput`<sup>Optional</sup> <a name="PlaceholdersInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.placeholdersInput"></a>

```go
func PlaceholdersInput() interface{}
```

- *Type:* interface{}

---

##### `PromptTextInput`<sup>Optional</sup> <a name="PromptTextInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.promptTextInput"></a>

```go
func PromptTextInput() GoogleDialogflowCxGeneratorPromptText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText">GoogleDialogflowCxGeneratorPromptText</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxGeneratorConfig <a name="GoogleDialogflowCxGeneratorConfig" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxgenerator"

&googledialogflowcxgenerator.GoogleDialogflowCxGeneratorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	PromptText: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText,
	Id: *string,
	LanguageCode: *string,
	LlmModelSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings,
	ModelParameter: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter,
	Parent: *string,
	Placeholders: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable name of the generator, unique within the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.promptText">PromptText</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText">GoogleDialogflowCxGeneratorPromptText</a></code> | prompt_text block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#id GoogleDialogflowCxGenerator#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.languageCode">LanguageCode</a></code> | <code>*string</code> | The language to create generators for the following fields: * Generator.prompt_text.text If not specified, the agent's default language is used. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.llmModelSettings">LlmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings">GoogleDialogflowCxGeneratorLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.modelParameter">ModelParameter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter">GoogleDialogflowCxGeneratorModelParameter</a></code> | model_parameter block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.parent">Parent</a></code> | <code>*string</code> | The agent to create a Generator for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.placeholders">Placeholders</a></code> | <code>interface{}</code> | placeholders block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts">GoogleDialogflowCxGeneratorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable name of the generator, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#display_name GoogleDialogflowCxGenerator#display_name}

---

##### `PromptText`<sup>Required</sup> <a name="PromptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.promptText"></a>

```go
PromptText GoogleDialogflowCxGeneratorPromptText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText">GoogleDialogflowCxGeneratorPromptText</a>

prompt_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#prompt_text GoogleDialogflowCxGenerator#prompt_text}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#id GoogleDialogflowCxGenerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

The language to create generators for the following fields: * Generator.prompt_text.text If not specified, the agent's default language is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#language_code GoogleDialogflowCxGenerator#language_code}

---

##### `LlmModelSettings`<sup>Optional</sup> <a name="LlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.llmModelSettings"></a>

```go
LlmModelSettings GoogleDialogflowCxGeneratorLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings">GoogleDialogflowCxGeneratorLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#llm_model_settings GoogleDialogflowCxGenerator#llm_model_settings}

---

##### `ModelParameter`<sup>Optional</sup> <a name="ModelParameter" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.modelParameter"></a>

```go
ModelParameter GoogleDialogflowCxGeneratorModelParameter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter">GoogleDialogflowCxGeneratorModelParameter</a>

model_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#model_parameter GoogleDialogflowCxGenerator#model_parameter}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The agent to create a Generator for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#parent GoogleDialogflowCxGenerator#parent}

---

##### `Placeholders`<sup>Optional</sup> <a name="Placeholders" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.placeholders"></a>

```go
Placeholders interface{}
```

- *Type:* interface{}

placeholders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#placeholders GoogleDialogflowCxGenerator#placeholders}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.timeouts"></a>

```go
Timeouts GoogleDialogflowCxGeneratorTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts">GoogleDialogflowCxGeneratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#timeouts GoogleDialogflowCxGenerator#timeouts}

---

### GoogleDialogflowCxGeneratorLlmModelSettings <a name="GoogleDialogflowCxGeneratorLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxgenerator"

&googledialogflowcxgenerator.GoogleDialogflowCxGeneratorLlmModelSettings {
	Model: *string,
	PromptText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings.property.model">Model</a></code> | <code>*string</code> | The selected LLM model. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings.property.promptText">PromptText</a></code> | <code>*string</code> | The custom prompt to use. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings.property.model"></a>

```go
Model *string
```

- *Type:* *string

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#model GoogleDialogflowCxGenerator#model}

---

##### `PromptText`<sup>Optional</sup> <a name="PromptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings.property.promptText"></a>

```go
PromptText *string
```

- *Type:* *string

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#prompt_text GoogleDialogflowCxGenerator#prompt_text}

---

### GoogleDialogflowCxGeneratorModelParameter <a name="GoogleDialogflowCxGeneratorModelParameter" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxgenerator"

&googledialogflowcxgenerator.GoogleDialogflowCxGeneratorModelParameter {
	MaxDecodeSteps: *f64,
	Temperature: *f64,
	TopK: *f64,
	TopP: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter.property.maxDecodeSteps">MaxDecodeSteps</a></code> | <code>*f64</code> | The maximum number of tokens to generate. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter.property.temperature">Temperature</a></code> | <code>*f64</code> | The temperature used for sampling. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter.property.topK">TopK</a></code> | <code>*f64</code> | If set, the sampling process in each step is limited to the topK tokens with highest probabilities. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter.property.topP">TopP</a></code> | <code>*f64</code> | If set, only the tokens comprising the top topP probability mass are considered. |

---

##### `MaxDecodeSteps`<sup>Optional</sup> <a name="MaxDecodeSteps" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter.property.maxDecodeSteps"></a>

```go
MaxDecodeSteps *f64
```

- *Type:* *f64

The maximum number of tokens to generate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#max_decode_steps GoogleDialogflowCxGenerator#max_decode_steps}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter.property.temperature"></a>

```go
Temperature *f64
```

- *Type:* *f64

The temperature used for sampling.

Temperature sampling occurs after both topP and topK have been applied.
Valid range: [0.0, 1.0] Low temperature = less random. High temperature = more random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#temperature GoogleDialogflowCxGenerator#temperature}

---

##### `TopK`<sup>Optional</sup> <a name="TopK" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter.property.topK"></a>

```go
TopK *f64
```

- *Type:* *f64

If set, the sampling process in each step is limited to the topK tokens with highest probabilities.

Valid range: [1, 40] or 1000+. Small topK = less random. Large topK = more random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#top_k GoogleDialogflowCxGenerator#top_k}

---

##### `TopP`<sup>Optional</sup> <a name="TopP" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter.property.topP"></a>

```go
TopP *f64
```

- *Type:* *f64

If set, only the tokens comprising the top topP probability mass are considered.

If both topP and topK are set, topP will be used for further refining candidates selected with topK.
Valid range: (0.0, 1.0]. Small topP = less random. Large topP = more random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#top_p GoogleDialogflowCxGenerator#top_p}

---

### GoogleDialogflowCxGeneratorPlaceholders <a name="GoogleDialogflowCxGeneratorPlaceholders" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxgenerator"

&googledialogflowcxgenerator.GoogleDialogflowCxGeneratorPlaceholders {
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders.property.id">Id</a></code> | <code>*string</code> | Unique ID used to map custom placeholder to parameters in fulfillment. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders.property.name">Name</a></code> | <code>*string</code> | Custom placeholder value in the prompt text. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders.property.id"></a>

```go
Id *string
```

- *Type:* *string

Unique ID used to map custom placeholder to parameters in fulfillment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#id GoogleDialogflowCxGenerator#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders.property.name"></a>

```go
Name *string
```

- *Type:* *string

Custom placeholder value in the prompt text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#name GoogleDialogflowCxGenerator#name}

---

### GoogleDialogflowCxGeneratorPromptText <a name="GoogleDialogflowCxGeneratorPromptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxgenerator"

&googledialogflowcxgenerator.GoogleDialogflowCxGeneratorPromptText {
	Text: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText.property.text">Text</a></code> | <code>*string</code> | Text input which can be used for prompt or banned phrases. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText.property.text"></a>

```go
Text *string
```

- *Type:* *string

Text input which can be used for prompt or banned phrases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#text GoogleDialogflowCxGenerator#text}

---

### GoogleDialogflowCxGeneratorTimeouts <a name="GoogleDialogflowCxGeneratorTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxgenerator"

&googledialogflowcxgenerator.GoogleDialogflowCxGeneratorTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#create GoogleDialogflowCxGenerator#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#delete GoogleDialogflowCxGenerator#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#update GoogleDialogflowCxGenerator#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#create GoogleDialogflowCxGenerator#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#delete GoogleDialogflowCxGenerator#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dialogflow_cx_generator#update GoogleDialogflowCxGenerator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference <a name="GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxgenerator"

googledialogflowcxgenerator.NewGoogleDialogflowCxGeneratorLlmModelSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.resetPromptText">ResetPromptText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.resetModel"></a>

```go
func ResetModel()
```

##### `ResetPromptText` <a name="ResetPromptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.resetPromptText"></a>

```go
func ResetPromptText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptTextInput">PromptTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptText">PromptText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings">GoogleDialogflowCxGeneratorLlmModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.modelInput"></a>

```go
func ModelInput() *string
```

- *Type:* *string

---

##### `PromptTextInput`<sup>Optional</sup> <a name="PromptTextInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptTextInput"></a>

```go
func PromptTextInput() *string
```

- *Type:* *string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `PromptText`<sup>Required</sup> <a name="PromptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptText"></a>

```go
func PromptText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxGeneratorLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings">GoogleDialogflowCxGeneratorLlmModelSettings</a>

---


### GoogleDialogflowCxGeneratorModelParameterOutputReference <a name="GoogleDialogflowCxGeneratorModelParameterOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxgenerator"

googledialogflowcxgenerator.NewGoogleDialogflowCxGeneratorModelParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxGeneratorModelParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resetMaxDecodeSteps">ResetMaxDecodeSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resetTopK">ResetTopK</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resetTopP">ResetTopP</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxDecodeSteps` <a name="ResetMaxDecodeSteps" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resetMaxDecodeSteps"></a>

```go
func ResetMaxDecodeSteps()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resetTemperature"></a>

```go
func ResetTemperature()
```

##### `ResetTopK` <a name="ResetTopK" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resetTopK"></a>

```go
func ResetTopK()
```

##### `ResetTopP` <a name="ResetTopP" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resetTopP"></a>

```go
func ResetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeStepsInput">MaxDecodeStepsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.topKInput">TopKInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.topPInput">TopPInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeSteps">MaxDecodeSteps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.temperature">Temperature</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.topK">TopK</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.topP">TopP</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter">GoogleDialogflowCxGeneratorModelParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxDecodeStepsInput`<sup>Optional</sup> <a name="MaxDecodeStepsInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeStepsInput"></a>

```go
func MaxDecodeStepsInput() *f64
```

- *Type:* *f64

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.temperatureInput"></a>

```go
func TemperatureInput() *f64
```

- *Type:* *f64

---

##### `TopKInput`<sup>Optional</sup> <a name="TopKInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.topKInput"></a>

```go
func TopKInput() *f64
```

- *Type:* *f64

---

##### `TopPInput`<sup>Optional</sup> <a name="TopPInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.topPInput"></a>

```go
func TopPInput() *f64
```

- *Type:* *f64

---

##### `MaxDecodeSteps`<sup>Required</sup> <a name="MaxDecodeSteps" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeSteps"></a>

```go
func MaxDecodeSteps() *f64
```

- *Type:* *f64

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.temperature"></a>

```go
func Temperature() *f64
```

- *Type:* *f64

---

##### `TopK`<sup>Required</sup> <a name="TopK" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.topK"></a>

```go
func TopK() *f64
```

- *Type:* *f64

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.topP"></a>

```go
func TopP() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxGeneratorModelParameter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter">GoogleDialogflowCxGeneratorModelParameter</a>

---


### GoogleDialogflowCxGeneratorPlaceholdersList <a name="GoogleDialogflowCxGeneratorPlaceholdersList" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxgenerator"

googledialogflowcxgenerator.NewGoogleDialogflowCxGeneratorPlaceholdersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCxGeneratorPlaceholdersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCxGeneratorPlaceholdersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxGeneratorPlaceholdersOutputReference <a name="GoogleDialogflowCxGeneratorPlaceholdersOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxgenerator"

googledialogflowcxgenerator.NewGoogleDialogflowCxGeneratorPlaceholdersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCxGeneratorPlaceholdersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxGeneratorPromptTextOutputReference <a name="GoogleDialogflowCxGeneratorPromptTextOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxgenerator"

googledialogflowcxgenerator.NewGoogleDialogflowCxGeneratorPromptTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxGeneratorPromptTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText">GoogleDialogflowCxGeneratorPromptText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxGeneratorPromptText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText">GoogleDialogflowCxGeneratorPromptText</a>

---


### GoogleDialogflowCxGeneratorTimeoutsOutputReference <a name="GoogleDialogflowCxGeneratorTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxgenerator"

googledialogflowcxgenerator.NewGoogleDialogflowCxGeneratorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxGeneratorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



