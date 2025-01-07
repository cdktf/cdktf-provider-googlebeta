# `googleDialogflowCxIntent` Submodule <a name="`googleDialogflowCxIntent` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxIntent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxIntent <a name="GoogleDialogflowCxIntent" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent google_dialogflow_cx_intent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowcxintent"

googledialogflowcxintent.NewGoogleDialogflowCxIntent(scope Construct, id *string, config GoogleDialogflowCxIntentConfig) GoogleDialogflowCxIntent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig">GoogleDialogflowCxIntentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig">GoogleDialogflowCxIntentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.putTrainingPhrases">PutTrainingPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetIsDefaultNegativeIntent">ResetIsDefaultNegativeIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetIsDefaultWelcomeIntent">ResetIsDefaultWelcomeIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetIsFallback">ResetIsFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetTrainingPhrases">ResetTrainingPhrases</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDialogflowCxIntentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts">GoogleDialogflowCxIntentTimeouts</a>

---

##### `PutTrainingPhrases` <a name="PutTrainingPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.putTrainingPhrases"></a>

```go
func PutTrainingPhrases(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.putTrainingPhrases.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetId"></a>

```go
func ResetId()
```

##### `ResetIsDefaultNegativeIntent` <a name="ResetIsDefaultNegativeIntent" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetIsDefaultNegativeIntent"></a>

```go
func ResetIsDefaultNegativeIntent()
```

##### `ResetIsDefaultWelcomeIntent` <a name="ResetIsDefaultWelcomeIntent" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetIsDefaultWelcomeIntent"></a>

```go
func ResetIsDefaultWelcomeIntent()
```

##### `ResetIsFallback` <a name="ResetIsFallback" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetIsFallback"></a>

```go
func ResetIsFallback()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetLanguageCode"></a>

```go
func ResetLanguageCode()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetParent"></a>

```go
func ResetParent()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTrainingPhrases` <a name="ResetTrainingPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetTrainingPhrases"></a>

```go
func ResetTrainingPhrases()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxIntent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowcxintent"

googledialogflowcxintent.GoogleDialogflowCxIntent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowcxintent"

googledialogflowcxintent.GoogleDialogflowCxIntent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowcxintent"

googledialogflowcxintent.GoogleDialogflowCxIntent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowcxintent"

googledialogflowcxintent.GoogleDialogflowCxIntent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDialogflowCxIntent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDialogflowCxIntent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDialogflowCxIntent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxIntent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList">GoogleDialogflowCxIntentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference">GoogleDialogflowCxIntentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.trainingPhrases">TrainingPhrases</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList">GoogleDialogflowCxIntentTrainingPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isDefaultNegativeIntentInput">IsDefaultNegativeIntentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isDefaultWelcomeIntentInput">IsDefaultWelcomeIntentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isFallbackInput">IsFallbackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.trainingPhrasesInput">TrainingPhrasesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isDefaultNegativeIntent">IsDefaultNegativeIntent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isDefaultWelcomeIntent">IsDefaultWelcomeIntent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isFallback">IsFallback</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.parameters"></a>

```go
func Parameters() GoogleDialogflowCxIntentParametersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList">GoogleDialogflowCxIntentParametersList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.timeouts"></a>

```go
func Timeouts() GoogleDialogflowCxIntentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference">GoogleDialogflowCxIntentTimeoutsOutputReference</a>

---

##### `TrainingPhrases`<sup>Required</sup> <a name="TrainingPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.trainingPhrases"></a>

```go
func TrainingPhrases() GoogleDialogflowCxIntentTrainingPhrasesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList">GoogleDialogflowCxIntentTrainingPhrasesList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsDefaultNegativeIntentInput`<sup>Optional</sup> <a name="IsDefaultNegativeIntentInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isDefaultNegativeIntentInput"></a>

```go
func IsDefaultNegativeIntentInput() interface{}
```

- *Type:* interface{}

---

##### `IsDefaultWelcomeIntentInput`<sup>Optional</sup> <a name="IsDefaultWelcomeIntentInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isDefaultWelcomeIntentInput"></a>

```go
func IsDefaultWelcomeIntentInput() interface{}
```

- *Type:* interface{}

---

##### `IsFallbackInput`<sup>Optional</sup> <a name="IsFallbackInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isFallbackInput"></a>

```go
func IsFallbackInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrainingPhrasesInput`<sup>Optional</sup> <a name="TrainingPhrasesInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.trainingPhrasesInput"></a>

```go
func TrainingPhrasesInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDefaultNegativeIntent`<sup>Required</sup> <a name="IsDefaultNegativeIntent" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isDefaultNegativeIntent"></a>

```go
func IsDefaultNegativeIntent() interface{}
```

- *Type:* interface{}

---

##### `IsDefaultWelcomeIntent`<sup>Required</sup> <a name="IsDefaultWelcomeIntent" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isDefaultWelcomeIntent"></a>

```go
func IsDefaultWelcomeIntent() interface{}
```

- *Type:* interface{}

---

##### `IsFallback`<sup>Required</sup> <a name="IsFallback" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isFallback"></a>

```go
func IsFallback() interface{}
```

- *Type:* interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxIntentConfig <a name="GoogleDialogflowCxIntentConfig" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowcxintent"

&googledialogflowcxintent.GoogleDialogflowCxIntentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Description: *string,
	Id: *string,
	IsDefaultNegativeIntent: interface{},
	IsDefaultWelcomeIntent: interface{},
	IsFallback: interface{},
	Labels: *map[string]*string,
	LanguageCode: *string,
	Parameters: interface{},
	Parent: *string,
	Priority: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts,
	TrainingPhrases: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable name of the intent, unique within the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.description">Description</a></code> | <code>*string</code> | Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#id GoogleDialogflowCxIntent#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.isDefaultNegativeIntent">IsDefaultNegativeIntent</a></code> | <code>interface{}</code> | Marks this as the [Default Negative Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#negative) for an agent. When you create an agent, a Default Negative Intent is created automatically. The Default Negative Intent cannot be deleted; deleting the 'google_dialogflow_cx_intent' resource does nothing to the underlying GCP resources. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.isDefaultWelcomeIntent">IsDefaultWelcomeIntent</a></code> | <code>interface{}</code> | Marks this as the [Default Welcome Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#welcome) for an agent. When you create an agent, a Default Welcome Intent is created automatically. The Default Welcome Intent cannot be deleted; deleting the 'google_dialogflow_cx_intent' resource does nothing to the underlying GCP resources. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.isFallback">IsFallback</a></code> | <code>interface{}</code> | Indicates whether this is a fallback intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The key/value metadata to label an intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.languageCode">LanguageCode</a></code> | <code>*string</code> | The language of the following fields in intent: Intent.training_phrases.parts.text If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.parameters">Parameters</a></code> | <code>interface{}</code> | parameters block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.parent">Parent</a></code> | <code>*string</code> | The agent to create an intent for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.priority">Priority</a></code> | <code>*f64</code> | The priority of this intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts">GoogleDialogflowCxIntentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.trainingPhrases">TrainingPhrases</a></code> | <code>interface{}</code> | training_phrases block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable name of the intent, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#display_name GoogleDialogflowCxIntent#display_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#description GoogleDialogflowCxIntent#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#id GoogleDialogflowCxIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDefaultNegativeIntent`<sup>Optional</sup> <a name="IsDefaultNegativeIntent" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.isDefaultNegativeIntent"></a>

```go
IsDefaultNegativeIntent interface{}
```

- *Type:* interface{}

Marks this as the [Default Negative Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#negative) for an agent. When you create an agent, a Default Negative Intent is created automatically. The Default Negative Intent cannot be deleted; deleting the 'google_dialogflow_cx_intent' resource does nothing to the underlying GCP resources.

~> Avoid having multiple 'google_dialogflow_cx_intent' resources linked to the same agent with 'is_default_negative_intent = true' because they will compete to control a single Default Negative Intent resource in GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#is_default_negative_intent GoogleDialogflowCxIntent#is_default_negative_intent}

---

##### `IsDefaultWelcomeIntent`<sup>Optional</sup> <a name="IsDefaultWelcomeIntent" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.isDefaultWelcomeIntent"></a>

```go
IsDefaultWelcomeIntent interface{}
```

- *Type:* interface{}

Marks this as the [Default Welcome Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#welcome) for an agent. When you create an agent, a Default Welcome Intent is created automatically. The Default Welcome Intent cannot be deleted; deleting the 'google_dialogflow_cx_intent' resource does nothing to the underlying GCP resources.

~> Avoid having multiple 'google_dialogflow_cx_intent' resources linked to the same agent with 'is_default_welcome_intent = true' because they will compete to control a single Default Welcome Intent resource in GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#is_default_welcome_intent GoogleDialogflowCxIntent#is_default_welcome_intent}

---

##### `IsFallback`<sup>Optional</sup> <a name="IsFallback" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.isFallback"></a>

```go
IsFallback interface{}
```

- *Type:* interface{}

Indicates whether this is a fallback intent.

Currently only default fallback intent is allowed in the agent, which is added upon agent creation.
Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event.
To manage the fallback intent, set 'is_default_negative_intent = true'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#is_fallback GoogleDialogflowCxIntent#is_fallback}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The key/value metadata to label an intent.

Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes.
Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys.contextual" means the intent is a contextual intent.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#labels GoogleDialogflowCxIntent#labels}

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

The language of the following fields in intent: Intent.training_phrases.parts.text If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#language_code GoogleDialogflowCxIntent#language_code}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#parameters GoogleDialogflowCxIntent#parameters}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The agent to create an intent for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#parent GoogleDialogflowCxIntent#parent}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

The priority of this intent.

Higher numbers represent higher priorities.
If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the Normal priority in the console.
If the supplied value is negative, the intent is ignored in runtime detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#priority GoogleDialogflowCxIntent#priority}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.timeouts"></a>

```go
Timeouts GoogleDialogflowCxIntentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts">GoogleDialogflowCxIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#timeouts GoogleDialogflowCxIntent#timeouts}

---

##### `TrainingPhrases`<sup>Optional</sup> <a name="TrainingPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.trainingPhrases"></a>

```go
TrainingPhrases interface{}
```

- *Type:* interface{}

training_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#training_phrases GoogleDialogflowCxIntent#training_phrases}

---

### GoogleDialogflowCxIntentParameters <a name="GoogleDialogflowCxIntentParameters" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowcxintent"

&googledialogflowcxintent.GoogleDialogflowCxIntentParameters {
	EntityType: *string,
	Id: *string,
	IsList: interface{},
	Redact: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters.property.entityType">EntityType</a></code> | <code>*string</code> | The entity type of the parameter. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters.property.id">Id</a></code> | <code>*string</code> | The unique identifier of the parameter. This field is used by training phrases to annotate their parts. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters.property.isList">IsList</a></code> | <code>interface{}</code> | Indicates whether the parameter represents a list of values. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters.property.redact">Redact</a></code> | <code>interface{}</code> | Indicates whether the parameter content should be redacted in log. |

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters.property.entityType"></a>

```go
EntityType *string
```

- *Type:* *string

The entity type of the parameter.

Format: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#entity_type GoogleDialogflowCxIntent#entity_type}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique identifier of the parameter. This field is used by training phrases to annotate their parts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#id GoogleDialogflowCxIntent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsList`<sup>Optional</sup> <a name="IsList" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters.property.isList"></a>

```go
IsList interface{}
```

- *Type:* interface{}

Indicates whether the parameter represents a list of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#is_list GoogleDialogflowCxIntent#is_list}

---

##### `Redact`<sup>Optional</sup> <a name="Redact" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters.property.redact"></a>

```go
Redact interface{}
```

- *Type:* interface{}

Indicates whether the parameter content should be redacted in log.

If redaction is enabled, the parameter content will be replaced by parameter name during logging.
Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#redact GoogleDialogflowCxIntent#redact}

---

### GoogleDialogflowCxIntentTimeouts <a name="GoogleDialogflowCxIntentTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowcxintent"

&googledialogflowcxintent.GoogleDialogflowCxIntentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#create GoogleDialogflowCxIntent#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#delete GoogleDialogflowCxIntent#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#update GoogleDialogflowCxIntent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#create GoogleDialogflowCxIntent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#delete GoogleDialogflowCxIntent#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#update GoogleDialogflowCxIntent#update}.

---

### GoogleDialogflowCxIntentTrainingPhrases <a name="GoogleDialogflowCxIntentTrainingPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowcxintent"

&googledialogflowcxintent.GoogleDialogflowCxIntentTrainingPhrases {
	Parts: interface{},
	RepeatCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases.property.parts">Parts</a></code> | <code>interface{}</code> | parts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases.property.repeatCount">RepeatCount</a></code> | <code>*f64</code> | Indicates how many times this example was added to the intent. |

---

##### `Parts`<sup>Required</sup> <a name="Parts" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases.property.parts"></a>

```go
Parts interface{}
```

- *Type:* interface{}

parts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#parts GoogleDialogflowCxIntent#parts}

---

##### `RepeatCount`<sup>Optional</sup> <a name="RepeatCount" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases.property.repeatCount"></a>

```go
RepeatCount *f64
```

- *Type:* *f64

Indicates how many times this example was added to the intent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#repeat_count GoogleDialogflowCxIntent#repeat_count}

---

### GoogleDialogflowCxIntentTrainingPhrasesParts <a name="GoogleDialogflowCxIntentTrainingPhrasesParts" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowcxintent"

&googledialogflowcxintent.GoogleDialogflowCxIntentTrainingPhrasesParts {
	Text: *string,
	ParameterId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts.property.text">Text</a></code> | <code>*string</code> | The text for this part. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts.property.parameterId">ParameterId</a></code> | <code>*string</code> | The parameter used to annotate this part of the training phrase. |

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts.property.text"></a>

```go
Text *string
```

- *Type:* *string

The text for this part.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#text GoogleDialogflowCxIntent#text}

---

##### `ParameterId`<sup>Optional</sup> <a name="ParameterId" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts.property.parameterId"></a>

```go
ParameterId *string
```

- *Type:* *string

The parameter used to annotate this part of the training phrase.

This field is required for annotated parts of the training phrase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_intent#parameter_id GoogleDialogflowCxIntent#parameter_id}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxIntentParametersList <a name="GoogleDialogflowCxIntentParametersList" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowcxintent"

googledialogflowcxintent.NewGoogleDialogflowCxIntentParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCxIntentParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCxIntentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxIntentParametersOutputReference <a name="GoogleDialogflowCxIntentParametersOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowcxintent"

googledialogflowcxintent.NewGoogleDialogflowCxIntentParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCxIntentParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.resetIsList">ResetIsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.resetRedact">ResetRedact</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsList` <a name="ResetIsList" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.resetIsList"></a>

```go
func ResetIsList()
```

##### `ResetRedact` <a name="ResetRedact" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.resetRedact"></a>

```go
func ResetRedact()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.entityTypeInput">EntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.isListInput">IsListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.redactInput">RedactInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.isList">IsList</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.redact">Redact</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.entityTypeInput"></a>

```go
func EntityTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsListInput`<sup>Optional</sup> <a name="IsListInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.isListInput"></a>

```go
func IsListInput() interface{}
```

- *Type:* interface{}

---

##### `RedactInput`<sup>Optional</sup> <a name="RedactInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.redactInput"></a>

```go
func RedactInput() interface{}
```

- *Type:* interface{}

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsList`<sup>Required</sup> <a name="IsList" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.isList"></a>

```go
func IsList() interface{}
```

- *Type:* interface{}

---

##### `Redact`<sup>Required</sup> <a name="Redact" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.redact"></a>

```go
func Redact() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxIntentTimeoutsOutputReference <a name="GoogleDialogflowCxIntentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowcxintent"

googledialogflowcxintent.NewGoogleDialogflowCxIntentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxIntentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxIntentTrainingPhrasesList <a name="GoogleDialogflowCxIntentTrainingPhrasesList" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowcxintent"

googledialogflowcxintent.NewGoogleDialogflowCxIntentTrainingPhrasesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCxIntentTrainingPhrasesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCxIntentTrainingPhrasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxIntentTrainingPhrasesOutputReference <a name="GoogleDialogflowCxIntentTrainingPhrasesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowcxintent"

googledialogflowcxintent.NewGoogleDialogflowCxIntentTrainingPhrasesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCxIntentTrainingPhrasesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.putParts">PutParts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.resetRepeatCount">ResetRepeatCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParts` <a name="PutParts" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.putParts"></a>

```go
func PutParts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.putParts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRepeatCount` <a name="ResetRepeatCount" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.resetRepeatCount"></a>

```go
func ResetRepeatCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.parts">Parts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList">GoogleDialogflowCxIntentTrainingPhrasesPartsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.partsInput">PartsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.repeatCountInput">RepeatCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.repeatCount">RepeatCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parts`<sup>Required</sup> <a name="Parts" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.parts"></a>

```go
func Parts() GoogleDialogflowCxIntentTrainingPhrasesPartsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList">GoogleDialogflowCxIntentTrainingPhrasesPartsList</a>

---

##### `PartsInput`<sup>Optional</sup> <a name="PartsInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.partsInput"></a>

```go
func PartsInput() interface{}
```

- *Type:* interface{}

---

##### `RepeatCountInput`<sup>Optional</sup> <a name="RepeatCountInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.repeatCountInput"></a>

```go
func RepeatCountInput() *f64
```

- *Type:* *f64

---

##### `RepeatCount`<sup>Required</sup> <a name="RepeatCount" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.repeatCount"></a>

```go
func RepeatCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxIntentTrainingPhrasesPartsList <a name="GoogleDialogflowCxIntentTrainingPhrasesPartsList" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowcxintent"

googledialogflowcxintent.NewGoogleDialogflowCxIntentTrainingPhrasesPartsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCxIntentTrainingPhrasesPartsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference <a name="GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowcxintent"

googledialogflowcxintent.NewGoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.resetParameterId">ResetParameterId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameterId` <a name="ResetParameterId" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.resetParameterId"></a>

```go
func ResetParameterId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.parameterIdInput">ParameterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.parameterId">ParameterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterIdInput`<sup>Optional</sup> <a name="ParameterIdInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.parameterIdInput"></a>

```go
func ParameterIdInput() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `ParameterId`<sup>Required</sup> <a name="ParameterId" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.parameterId"></a>

```go
func ParameterId() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



