# `googleDialogflowCxPlaybook` Submodule <a name="`googleDialogflowCxPlaybook` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxPlaybook <a name="GoogleDialogflowCxPlaybook" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook google_dialogflow_cx_playbook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxplaybook"

googledialogflowcxplaybook.NewGoogleDialogflowCxPlaybook(scope Construct, id *string, config GoogleDialogflowCxPlaybookConfig) GoogleDialogflowCxPlaybook
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig">GoogleDialogflowCxPlaybookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig">GoogleDialogflowCxPlaybookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putInstruction">PutInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putLlmModelSettings">PutLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetLlmModelSettings">ResetLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetPlaybookType">ResetPlaybookType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetReferencedTools">ResetReferencedTools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstruction` <a name="PutInstruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putInstruction"></a>

```go
func PutInstruction(value GoogleDialogflowCxPlaybookInstruction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putInstruction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

---

##### `PutLlmModelSettings` <a name="PutLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putLlmModelSettings"></a>

```go
func PutLlmModelSettings(value GoogleDialogflowCxPlaybookLlmModelSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putLlmModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDialogflowCxPlaybookTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetId"></a>

```go
func ResetId()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetInstruction"></a>

```go
func ResetInstruction()
```

##### `ResetLlmModelSettings` <a name="ResetLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetLlmModelSettings"></a>

```go
func ResetLlmModelSettings()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetParent"></a>

```go
func ResetParent()
```

##### `ResetPlaybookType` <a name="ResetPlaybookType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetPlaybookType"></a>

```go
func ResetPlaybookType()
```

##### `ResetReferencedTools` <a name="ResetReferencedTools" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetReferencedTools"></a>

```go
func ResetReferencedTools()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxPlaybook resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxplaybook"

googledialogflowcxplaybook.GoogleDialogflowCxPlaybook_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxplaybook"

googledialogflowcxplaybook.GoogleDialogflowCxPlaybook_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxplaybook"

googledialogflowcxplaybook.GoogleDialogflowCxPlaybook_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxplaybook"

googledialogflowcxplaybook.GoogleDialogflowCxPlaybook_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDialogflowCxPlaybook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDialogflowCxPlaybook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDialogflowCxPlaybook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxPlaybook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instruction">Instruction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference">GoogleDialogflowCxPlaybookInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettings">LlmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference">GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedFlows">ReferencedFlows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedPlaybooks">ReferencedPlaybooks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference">GoogleDialogflowCxPlaybookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tokenCount">TokenCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goalInput">GoalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instructionInput">InstructionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettingsInput">LlmModelSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookTypeInput">PlaybookTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedToolsInput">ReferencedToolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goal">Goal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookType">PlaybookType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedTools">ReferencedTools</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instruction"></a>

```go
func Instruction() GoogleDialogflowCxPlaybookInstructionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference">GoogleDialogflowCxPlaybookInstructionOutputReference</a>

---

##### `LlmModelSettings`<sup>Required</sup> <a name="LlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettings"></a>

```go
func LlmModelSettings() GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference">GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReferencedFlows`<sup>Required</sup> <a name="ReferencedFlows" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedFlows"></a>

```go
func ReferencedFlows() *[]*string
```

- *Type:* *[]*string

---

##### `ReferencedPlaybooks`<sup>Required</sup> <a name="ReferencedPlaybooks" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedPlaybooks"></a>

```go
func ReferencedPlaybooks() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeouts"></a>

```go
func Timeouts() GoogleDialogflowCxPlaybookTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference">GoogleDialogflowCxPlaybookTimeoutsOutputReference</a>

---

##### `TokenCount`<sup>Required</sup> <a name="TokenCount" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tokenCount"></a>

```go
func TokenCount() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GoalInput`<sup>Optional</sup> <a name="GoalInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goalInput"></a>

```go
func GoalInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instructionInput"></a>

```go
func InstructionInput() GoogleDialogflowCxPlaybookInstruction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

---

##### `LlmModelSettingsInput`<sup>Optional</sup> <a name="LlmModelSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettingsInput"></a>

```go
func LlmModelSettingsInput() GoogleDialogflowCxPlaybookLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `PlaybookTypeInput`<sup>Optional</sup> <a name="PlaybookTypeInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookTypeInput"></a>

```go
func PlaybookTypeInput() *string
```

- *Type:* *string

---

##### `ReferencedToolsInput`<sup>Optional</sup> <a name="ReferencedToolsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedToolsInput"></a>

```go
func ReferencedToolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Goal`<sup>Required</sup> <a name="Goal" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goal"></a>

```go
func Goal() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `PlaybookType`<sup>Required</sup> <a name="PlaybookType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookType"></a>

```go
func PlaybookType() *string
```

- *Type:* *string

---

##### `ReferencedTools`<sup>Required</sup> <a name="ReferencedTools" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedTools"></a>

```go
func ReferencedTools() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxPlaybookConfig <a name="GoogleDialogflowCxPlaybookConfig" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxplaybook"

&googledialogflowcxplaybook.GoogleDialogflowCxPlaybookConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Goal: *string,
	Id: *string,
	Instruction: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction,
	LlmModelSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings,
	Parent: *string,
	PlaybookType: *string,
	ReferencedTools: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable name of the playbook, unique within an agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.goal">Goal</a></code> | <code>*string</code> | High level description of the goal the playbook intend to accomplish. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#id GoogleDialogflowCxPlaybook#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.instruction">Instruction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a></code> | instruction block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.llmModelSettings">LlmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.parent">Parent</a></code> | <code>*string</code> | The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.playbookType">PlaybookType</a></code> | <code>*string</code> | Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.referencedTools">ReferencedTools</a></code> | <code>*[]*string</code> | The resource name of tools referenced by the current playbook in the instructions. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable name of the playbook, unique within an agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#display_name GoogleDialogflowCxPlaybook#display_name}

---

##### `Goal`<sup>Required</sup> <a name="Goal" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.goal"></a>

```go
Goal *string
```

- *Type:* *string

High level description of the goal the playbook intend to accomplish.

A goal should be concise since it's visible to other playbooks that may reference this playbook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#goal GoogleDialogflowCxPlaybook#goal}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#id GoogleDialogflowCxPlaybook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.instruction"></a>

```go
Instruction GoogleDialogflowCxPlaybookInstruction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#instruction GoogleDialogflowCxPlaybook#instruction}

---

##### `LlmModelSettings`<sup>Optional</sup> <a name="LlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.llmModelSettings"></a>

```go
LlmModelSettings GoogleDialogflowCxPlaybookLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#llm_model_settings GoogleDialogflowCxPlaybook#llm_model_settings}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#parent GoogleDialogflowCxPlaybook#parent}

---

##### `PlaybookType`<sup>Optional</sup> <a name="PlaybookType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.playbookType"></a>

```go
PlaybookType *string
```

- *Type:* *string

Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#playbook_type GoogleDialogflowCxPlaybook#playbook_type}

---

##### `ReferencedTools`<sup>Optional</sup> <a name="ReferencedTools" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.referencedTools"></a>

```go
ReferencedTools *[]*string
```

- *Type:* *[]*string

The resource name of tools referenced by the current playbook in the instructions.

If not provided explicitly, they are will be implied using the tool being referenced in goal and steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#referenced_tools GoogleDialogflowCxPlaybook#referenced_tools}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.timeouts"></a>

```go
Timeouts GoogleDialogflowCxPlaybookTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#timeouts GoogleDialogflowCxPlaybook#timeouts}

---

### GoogleDialogflowCxPlaybookInstruction <a name="GoogleDialogflowCxPlaybookInstruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxplaybook"

&googledialogflowcxplaybook.GoogleDialogflowCxPlaybookInstruction {
	Guidelines: *string,
	Steps: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.guidelines">Guidelines</a></code> | <code>*string</code> | General guidelines for the playbook. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.steps">Steps</a></code> | <code>interface{}</code> | steps block. |

---

##### `Guidelines`<sup>Optional</sup> <a name="Guidelines" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.guidelines"></a>

```go
Guidelines *string
```

- *Type:* *string

General guidelines for the playbook.

These are unstructured instructions that are not directly part of the goal, e.g. "Always be polite". It's valid for this text to be long and used instead of steps altogether.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#guidelines GoogleDialogflowCxPlaybook#guidelines}

---

##### `Steps`<sup>Optional</sup> <a name="Steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.steps"></a>

```go
Steps interface{}
```

- *Type:* interface{}

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#steps GoogleDialogflowCxPlaybook#steps}

---

### GoogleDialogflowCxPlaybookInstructionSteps <a name="GoogleDialogflowCxPlaybookInstructionSteps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxplaybook"

&googledialogflowcxplaybook.GoogleDialogflowCxPlaybookInstructionSteps {
	Steps: *string,
	Text: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.steps">Steps</a></code> | <code>*string</code> | Sub-processing needed to execute the current step. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.text">Text</a></code> | <code>*string</code> | Step instruction in text format. |

---

##### `Steps`<sup>Optional</sup> <a name="Steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.steps"></a>

```go
Steps *string
```

- *Type:* *string

Sub-processing needed to execute the current step.

This field uses JSON data as a string. The value provided must be a valid JSON representation documented in [Step](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.playbooks#step).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#steps GoogleDialogflowCxPlaybook#steps}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.text"></a>

```go
Text *string
```

- *Type:* *string

Step instruction in text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#text GoogleDialogflowCxPlaybook#text}

---

### GoogleDialogflowCxPlaybookLlmModelSettings <a name="GoogleDialogflowCxPlaybookLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxplaybook"

&googledialogflowcxplaybook.GoogleDialogflowCxPlaybookLlmModelSettings {
	Model: *string,
	PromptText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.model">Model</a></code> | <code>*string</code> | The selected LLM model. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.promptText">PromptText</a></code> | <code>*string</code> | The custom prompt to use. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.model"></a>

```go
Model *string
```

- *Type:* *string

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#model GoogleDialogflowCxPlaybook#model}

---

##### `PromptText`<sup>Optional</sup> <a name="PromptText" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.promptText"></a>

```go
PromptText *string
```

- *Type:* *string

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#prompt_text GoogleDialogflowCxPlaybook#prompt_text}

---

### GoogleDialogflowCxPlaybookTimeouts <a name="GoogleDialogflowCxPlaybookTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxplaybook"

&googledialogflowcxplaybook.GoogleDialogflowCxPlaybookTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#create GoogleDialogflowCxPlaybook#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#delete GoogleDialogflowCxPlaybook#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#update GoogleDialogflowCxPlaybook#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#create GoogleDialogflowCxPlaybook#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#delete GoogleDialogflowCxPlaybook#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#update GoogleDialogflowCxPlaybook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxPlaybookInstructionOutputReference <a name="GoogleDialogflowCxPlaybookInstructionOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxplaybook"

googledialogflowcxplaybook.NewGoogleDialogflowCxPlaybookInstructionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxPlaybookInstructionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.putSteps">PutSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resetGuidelines">ResetGuidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resetSteps">ResetSteps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSteps` <a name="PutSteps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.putSteps"></a>

```go
func PutSteps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.putSteps.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGuidelines` <a name="ResetGuidelines" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resetGuidelines"></a>

```go
func ResetGuidelines()
```

##### `ResetSteps` <a name="ResetSteps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resetSteps"></a>

```go
func ResetSteps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList">GoogleDialogflowCxPlaybookInstructionStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelinesInput">GuidelinesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.stepsInput">StepsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelines">Guidelines</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.steps"></a>

```go
func Steps() GoogleDialogflowCxPlaybookInstructionStepsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList">GoogleDialogflowCxPlaybookInstructionStepsList</a>

---

##### `GuidelinesInput`<sup>Optional</sup> <a name="GuidelinesInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelinesInput"></a>

```go
func GuidelinesInput() *string
```

- *Type:* *string

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.stepsInput"></a>

```go
func StepsInput() interface{}
```

- *Type:* interface{}

---

##### `Guidelines`<sup>Required</sup> <a name="Guidelines" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelines"></a>

```go
func Guidelines() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxPlaybookInstruction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

---


### GoogleDialogflowCxPlaybookInstructionStepsList <a name="GoogleDialogflowCxPlaybookInstructionStepsList" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxplaybook"

googledialogflowcxplaybook.NewGoogleDialogflowCxPlaybookInstructionStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCxPlaybookInstructionStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCxPlaybookInstructionStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxPlaybookInstructionStepsOutputReference <a name="GoogleDialogflowCxPlaybookInstructionStepsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxplaybook"

googledialogflowcxplaybook.NewGoogleDialogflowCxPlaybookInstructionStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCxPlaybookInstructionStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resetSteps">ResetSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSteps` <a name="ResetSteps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resetSteps"></a>

```go
func ResetSteps()
```

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.stepsInput">StepsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.steps">Steps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.stepsInput"></a>

```go
func StepsInput() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.steps"></a>

```go
func Steps() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference <a name="GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxplaybook"

googledialogflowcxplaybook.NewGoogleDialogflowCxPlaybookLlmModelSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resetPromptText">ResetPromptText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resetModel"></a>

```go
func ResetModel()
```

##### `ResetPromptText` <a name="ResetPromptText" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resetPromptText"></a>

```go
func ResetPromptText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptTextInput">PromptTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptText">PromptText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.modelInput"></a>

```go
func ModelInput() *string
```

- *Type:* *string

---

##### `PromptTextInput`<sup>Optional</sup> <a name="PromptTextInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptTextInput"></a>

```go
func PromptTextInput() *string
```

- *Type:* *string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `PromptText`<sup>Required</sup> <a name="PromptText" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptText"></a>

```go
func PromptText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxPlaybookLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

---


### GoogleDialogflowCxPlaybookTimeoutsOutputReference <a name="GoogleDialogflowCxPlaybookTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googledialogflowcxplaybook"

googledialogflowcxplaybook.NewGoogleDialogflowCxPlaybookTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxPlaybookTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



