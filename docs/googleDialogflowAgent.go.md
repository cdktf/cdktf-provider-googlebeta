# `googleDialogflowAgent` Submodule <a name="`googleDialogflowAgent` Submodule" id="@cdktf/provider-google-beta.googleDialogflowAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowAgent <a name="GoogleDialogflowAgent" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent google_dialogflow_agent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowagent"

googledialogflowagent.NewGoogleDialogflowAgent(scope Construct, id *string, config GoogleDialogflowAgentConfig) GoogleDialogflowAgent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig">GoogleDialogflowAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig">GoogleDialogflowAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetApiVersion">ResetApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetAvatarUri">ResetAvatarUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetClassificationThreshold">ResetClassificationThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetMatchMode">ResetMatchMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetSupportedLanguageCodes">ResetSupportedLanguageCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetTier">ResetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDialogflowAgentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts">GoogleDialogflowAgentTimeouts</a>

---

##### `ResetApiVersion` <a name="ResetApiVersion" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetApiVersion"></a>

```go
func ResetApiVersion()
```

##### `ResetAvatarUri` <a name="ResetAvatarUri" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetAvatarUri"></a>

```go
func ResetAvatarUri()
```

##### `ResetClassificationThreshold` <a name="ResetClassificationThreshold" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetClassificationThreshold"></a>

```go
func ResetClassificationThreshold()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetEnableLogging"></a>

```go
func ResetEnableLogging()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetId"></a>

```go
func ResetId()
```

##### `ResetMatchMode` <a name="ResetMatchMode" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetMatchMode"></a>

```go
func ResetMatchMode()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSupportedLanguageCodes` <a name="ResetSupportedLanguageCodes" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetSupportedLanguageCodes"></a>

```go
func ResetSupportedLanguageCodes()
```

##### `ResetTier` <a name="ResetTier" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetTier"></a>

```go
func ResetTier()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowAgent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowagent"

googledialogflowagent.GoogleDialogflowAgent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowagent"

googledialogflowagent.GoogleDialogflowAgent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowagent"

googledialogflowagent.GoogleDialogflowAgent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowagent"

googledialogflowagent.GoogleDialogflowAgent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDialogflowAgent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDialogflowAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDialogflowAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.avatarUriBackend">AvatarUriBackend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference">GoogleDialogflowAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.apiVersionInput">ApiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.avatarUriInput">AvatarUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.classificationThresholdInput">ClassificationThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.defaultLanguageCodeInput">DefaultLanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.matchModeInput">MatchModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.supportedLanguageCodesInput">SupportedLanguageCodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.avatarUri">AvatarUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.classificationThreshold">ClassificationThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.defaultLanguageCode">DefaultLanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.matchMode">MatchMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.supportedLanguageCodes">SupportedLanguageCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvatarUriBackend`<sup>Required</sup> <a name="AvatarUriBackend" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.avatarUriBackend"></a>

```go
func AvatarUriBackend() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.timeouts"></a>

```go
func Timeouts() GoogleDialogflowAgentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference">GoogleDialogflowAgentTimeoutsOutputReference</a>

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.apiVersionInput"></a>

```go
func ApiVersionInput() *string
```

- *Type:* *string

---

##### `AvatarUriInput`<sup>Optional</sup> <a name="AvatarUriInput" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.avatarUriInput"></a>

```go
func AvatarUriInput() *string
```

- *Type:* *string

---

##### `ClassificationThresholdInput`<sup>Optional</sup> <a name="ClassificationThresholdInput" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.classificationThresholdInput"></a>

```go
func ClassificationThresholdInput() *f64
```

- *Type:* *f64

---

##### `DefaultLanguageCodeInput`<sup>Optional</sup> <a name="DefaultLanguageCodeInput" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.defaultLanguageCodeInput"></a>

```go
func DefaultLanguageCodeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.enableLoggingInput"></a>

```go
func EnableLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MatchModeInput`<sup>Optional</sup> <a name="MatchModeInput" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.matchModeInput"></a>

```go
func MatchModeInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SupportedLanguageCodesInput`<sup>Optional</sup> <a name="SupportedLanguageCodesInput" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.supportedLanguageCodesInput"></a>

```go
func SupportedLanguageCodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.apiVersion"></a>

```go
func ApiVersion() *string
```

- *Type:* *string

---

##### `AvatarUri`<sup>Required</sup> <a name="AvatarUri" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.avatarUri"></a>

```go
func AvatarUri() *string
```

- *Type:* *string

---

##### `ClassificationThreshold`<sup>Required</sup> <a name="ClassificationThreshold" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.classificationThreshold"></a>

```go
func ClassificationThreshold() *f64
```

- *Type:* *f64

---

##### `DefaultLanguageCode`<sup>Required</sup> <a name="DefaultLanguageCode" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.defaultLanguageCode"></a>

```go
func DefaultLanguageCode() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.enableLogging"></a>

```go
func EnableLogging() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MatchMode`<sup>Required</sup> <a name="MatchMode" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.matchMode"></a>

```go
func MatchMode() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SupportedLanguageCodes`<sup>Required</sup> <a name="SupportedLanguageCodes" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.supportedLanguageCodes"></a>

```go
func SupportedLanguageCodes() *[]*string
```

- *Type:* *[]*string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowAgentConfig <a name="GoogleDialogflowAgentConfig" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowagent"

&googledialogflowagent.GoogleDialogflowAgentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultLanguageCode: *string,
	DisplayName: *string,
	TimeZone: *string,
	ApiVersion: *string,
	AvatarUri: *string,
	ClassificationThreshold: *f64,
	Description: *string,
	EnableLogging: interface{},
	Id: *string,
	MatchMode: *string,
	Project: *string,
	SupportedLanguageCodes: *[]*string,
	Tier: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDialogflowAgent.GoogleDialogflowAgentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.defaultLanguageCode">DefaultLanguageCode</a></code> | <code>*string</code> | The default language of the agent as a language tag. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The name of this agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | API version displayed in Dialogflow console. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.avatarUri">AvatarUri</a></code> | <code>*string</code> | The URI of the agent's avatar, which are used throughout the Dialogflow console. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.classificationThreshold">ClassificationThreshold</a></code> | <code>*f64</code> | To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.description">Description</a></code> | <code>*string</code> | The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#id GoogleDialogflowAgent#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.matchMode">MatchMode</a></code> | <code>*string</code> | Determines how intents are detected from user queries. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#project GoogleDialogflowAgent#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.supportedLanguageCodes">SupportedLanguageCodes</a></code> | <code>*[]*string</code> | The list of all languages supported by this agent (except for the defaultLanguageCode). |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.tier">Tier</a></code> | <code>*string</code> | The agent tier. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts">GoogleDialogflowAgentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultLanguageCode`<sup>Required</sup> <a name="DefaultLanguageCode" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.defaultLanguageCode"></a>

```go
DefaultLanguageCode *string
```

- *Type:* *string

The default language of the agent as a language tag.

[See Language Support](https://cloud.google.com/dialogflow/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#default_language_code GoogleDialogflowAgent#default_language_code}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The name of this agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#display_name GoogleDialogflowAgent#display_name}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#time_zone GoogleDialogflowAgent#time_zone}

---

##### `ApiVersion`<sup>Optional</sup> <a name="ApiVersion" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.apiVersion"></a>

```go
ApiVersion *string
```

- *Type:* *string

API version displayed in Dialogflow console.

If not specified, V2 API is assumed. Clients are free to query
different service endpoints for different API versions. However, bots connectors and webhook calls will follow
the specified API version.

* API_VERSION_V1: Legacy V1 API.
* API_VERSION_V2: V2 API.
* API_VERSION_V2_BETA_1: V2beta1 API. Possible values: ["API_VERSION_V1", "API_VERSION_V2", "API_VERSION_V2_BETA_1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#api_version GoogleDialogflowAgent#api_version}

---

##### `AvatarUri`<sup>Optional</sup> <a name="AvatarUri" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.avatarUri"></a>

```go
AvatarUri *string
```

- *Type:* *string

The URI of the agent's avatar, which are used throughout the Dialogflow console.

When an image URL is entered
into this field, the Dialogflow will save the image in the backend. The address of the backend image returned
from the API will be shown in the [avatarUriBackend] field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#avatar_uri GoogleDialogflowAgent#avatar_uri}

---

##### `ClassificationThreshold`<sup>Optional</sup> <a name="ClassificationThreshold" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.classificationThreshold"></a>

```go
ClassificationThreshold *f64
```

- *Type:* *f64

To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold.

If the returned score value is less than the threshold
value, then a fallback intent will be triggered or, if there are no fallback intents defined, no intent will be
triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the
default of 0.3 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#classification_threshold GoogleDialogflowAgent#classification_threshold}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#description GoogleDialogflowAgent#description}

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.enableLogging"></a>

```go
EnableLogging interface{}
```

- *Type:* interface{}

Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#enable_logging GoogleDialogflowAgent#enable_logging}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#id GoogleDialogflowAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MatchMode`<sup>Optional</sup> <a name="MatchMode" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.matchMode"></a>

```go
MatchMode *string
```

- *Type:* *string

Determines how intents are detected from user queries.

* MATCH_MODE_HYBRID: Best for agents with a small number of examples in intents and/or wide use of templates
  syntax and composite entities.
* MATCH_MODE_ML_ONLY: Can be used for agents with a large number of examples in intents, especially the ones
  using

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#project GoogleDialogflowAgent#project}.

---

##### `SupportedLanguageCodes`<sup>Optional</sup> <a name="SupportedLanguageCodes" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.supportedLanguageCodes"></a>

```go
SupportedLanguageCodes *[]*string
```

- *Type:* *[]*string

The list of all languages supported by this agent (except for the defaultLanguageCode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#supported_language_codes GoogleDialogflowAgent#supported_language_codes}

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

The agent tier.

If not specified, TIER_STANDARD is assumed.

* TIER_STANDARD: Standard tier.
* TIER_ENTERPRISE: Enterprise tier (Essentials).
* TIER_ENTERPRISE_PLUS: Enterprise tier (Plus).
  NOTE: Due to consistency issues, the provider will not read this field from the API. Drift is possible between
  the Terraform state and Dialogflow if the agent tier is changed outside of Terraform. Possible values: ["TIER_STANDARD", "TIER_ENTERPRISE", "TIER_ENTERPRISE_PLUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#tier GoogleDialogflowAgent#tier}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentConfig.property.timeouts"></a>

```go
Timeouts GoogleDialogflowAgentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts">GoogleDialogflowAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#timeouts GoogleDialogflowAgent#timeouts}

---

### GoogleDialogflowAgentTimeouts <a name="GoogleDialogflowAgentTimeouts" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowagent"

&googledialogflowagent.GoogleDialogflowAgentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#create GoogleDialogflowAgent#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#delete GoogleDialogflowAgent#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#update GoogleDialogflowAgent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#create GoogleDialogflowAgent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#delete GoogleDialogflowAgent#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_dialogflow_agent#update GoogleDialogflowAgent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowAgentTimeoutsOutputReference <a name="GoogleDialogflowAgentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledialogflowagent"

googledialogflowagent.NewGoogleDialogflowAgentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowAgentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowAgent.GoogleDialogflowAgentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



