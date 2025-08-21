# `googleDialogflowCxPlaybook` Submodule <a name="`googleDialogflowCxPlaybook` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxPlaybook <a name="GoogleDialogflowCxPlaybook" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook google_dialogflow_cx_playbook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxPlaybook(Construct Scope, string Id, GoogleDialogflowCxPlaybookConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig">GoogleDialogflowCxPlaybookConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstruction` <a name="PutInstruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putInstruction"></a>

```csharp
private void PutInstruction(GoogleDialogflowCxPlaybookInstruction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putInstruction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

---

##### `PutLlmModelSettings` <a name="PutLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putLlmModelSettings"></a>

```csharp
private void PutLlmModelSettings(GoogleDialogflowCxPlaybookLlmModelSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putLlmModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDialogflowCxPlaybookTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetInstruction"></a>

```csharp
private void ResetInstruction()
```

##### `ResetLlmModelSettings` <a name="ResetLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetLlmModelSettings"></a>

```csharp
private void ResetLlmModelSettings()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetParent"></a>

```csharp
private void ResetParent()
```

##### `ResetPlaybookType` <a name="ResetPlaybookType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetPlaybookType"></a>

```csharp
private void ResetPlaybookType()
```

##### `ResetReferencedTools` <a name="ResetReferencedTools" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetReferencedTools"></a>

```csharp
private void ResetReferencedTools()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
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

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxPlaybook.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxPlaybook.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxPlaybook.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxPlaybook.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDialogflowCxPlaybook resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowCxPlaybook to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowCxPlaybook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxPlaybook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instruction">Instruction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference">GoogleDialogflowCxPlaybookInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettings">LlmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference">GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedFlows">ReferencedFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedPlaybooks">ReferencedPlaybooks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference">GoogleDialogflowCxPlaybookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tokenCount">TokenCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goalInput">GoalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instructionInput">InstructionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettingsInput">LlmModelSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookTypeInput">PlaybookTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedToolsInput">ReferencedToolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goal">Goal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookType">PlaybookType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedTools">ReferencedTools</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instruction"></a>

```csharp
public GoogleDialogflowCxPlaybookInstructionOutputReference Instruction { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference">GoogleDialogflowCxPlaybookInstructionOutputReference</a>

---

##### `LlmModelSettings`<sup>Required</sup> <a name="LlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettings"></a>

```csharp
public GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference LlmModelSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference">GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReferencedFlows`<sup>Required</sup> <a name="ReferencedFlows" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedFlows"></a>

```csharp
public string[] ReferencedFlows { get; }
```

- *Type:* string[]

---

##### `ReferencedPlaybooks`<sup>Required</sup> <a name="ReferencedPlaybooks" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedPlaybooks"></a>

```csharp
public string[] ReferencedPlaybooks { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeouts"></a>

```csharp
public GoogleDialogflowCxPlaybookTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference">GoogleDialogflowCxPlaybookTimeoutsOutputReference</a>

---

##### `TokenCount`<sup>Required</sup> <a name="TokenCount" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tokenCount"></a>

```csharp
public string TokenCount { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GoalInput`<sup>Optional</sup> <a name="GoalInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goalInput"></a>

```csharp
public string GoalInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instructionInput"></a>

```csharp
public GoogleDialogflowCxPlaybookInstruction InstructionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

---

##### `LlmModelSettingsInput`<sup>Optional</sup> <a name="LlmModelSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettingsInput"></a>

```csharp
public GoogleDialogflowCxPlaybookLlmModelSettings LlmModelSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `PlaybookTypeInput`<sup>Optional</sup> <a name="PlaybookTypeInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookTypeInput"></a>

```csharp
public string PlaybookTypeInput { get; }
```

- *Type:* string

---

##### `ReferencedToolsInput`<sup>Optional</sup> <a name="ReferencedToolsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedToolsInput"></a>

```csharp
public string[] ReferencedToolsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Goal`<sup>Required</sup> <a name="Goal" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goal"></a>

```csharp
public string Goal { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `PlaybookType`<sup>Required</sup> <a name="PlaybookType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookType"></a>

```csharp
public string PlaybookType { get; }
```

- *Type:* string

---

##### `ReferencedTools`<sup>Required</sup> <a name="ReferencedTools" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedTools"></a>

```csharp
public string[] ReferencedTools { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxPlaybookConfig <a name="GoogleDialogflowCxPlaybookConfig" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxPlaybookConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Goal,
    string Id = null,
    GoogleDialogflowCxPlaybookInstruction Instruction = null,
    GoogleDialogflowCxPlaybookLlmModelSettings LlmModelSettings = null,
    string Parent = null,
    string PlaybookType = null,
    string[] ReferencedTools = null,
    GoogleDialogflowCxPlaybookTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The human-readable name of the playbook, unique within an agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.goal">Goal</a></code> | <code>string</code> | High level description of the goal the playbook intend to accomplish. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#id GoogleDialogflowCxPlaybook#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.instruction">Instruction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a></code> | instruction block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.llmModelSettings">LlmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.parent">Parent</a></code> | <code>string</code> | The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.playbookType">PlaybookType</a></code> | <code>string</code> | Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.referencedTools">ReferencedTools</a></code> | <code>string[]</code> | The resource name of tools referenced by the current playbook in the instructions. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The human-readable name of the playbook, unique within an agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#display_name GoogleDialogflowCxPlaybook#display_name}

---

##### `Goal`<sup>Required</sup> <a name="Goal" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.goal"></a>

```csharp
public string Goal { get; set; }
```

- *Type:* string

High level description of the goal the playbook intend to accomplish.

A goal should be concise since it's visible to other playbooks that may reference this playbook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#goal GoogleDialogflowCxPlaybook#goal}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#id GoogleDialogflowCxPlaybook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.instruction"></a>

```csharp
public GoogleDialogflowCxPlaybookInstruction Instruction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#instruction GoogleDialogflowCxPlaybook#instruction}

---

##### `LlmModelSettings`<sup>Optional</sup> <a name="LlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.llmModelSettings"></a>

```csharp
public GoogleDialogflowCxPlaybookLlmModelSettings LlmModelSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#llm_model_settings GoogleDialogflowCxPlaybook#llm_model_settings}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#parent GoogleDialogflowCxPlaybook#parent}

---

##### `PlaybookType`<sup>Optional</sup> <a name="PlaybookType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.playbookType"></a>

```csharp
public string PlaybookType { get; set; }
```

- *Type:* string

Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#playbook_type GoogleDialogflowCxPlaybook#playbook_type}

---

##### `ReferencedTools`<sup>Optional</sup> <a name="ReferencedTools" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.referencedTools"></a>

```csharp
public string[] ReferencedTools { get; set; }
```

- *Type:* string[]

The resource name of tools referenced by the current playbook in the instructions.

If not provided explicitly, they are will be implied using the tool being referenced in goal and steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#referenced_tools GoogleDialogflowCxPlaybook#referenced_tools}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.timeouts"></a>

```csharp
public GoogleDialogflowCxPlaybookTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#timeouts GoogleDialogflowCxPlaybook#timeouts}

---

### GoogleDialogflowCxPlaybookInstruction <a name="GoogleDialogflowCxPlaybookInstruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxPlaybookInstruction {
    string Guidelines = null,
    object Steps = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.guidelines">Guidelines</a></code> | <code>string</code> | General guidelines for the playbook. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.steps">Steps</a></code> | <code>object</code> | steps block. |

---

##### `Guidelines`<sup>Optional</sup> <a name="Guidelines" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.guidelines"></a>

```csharp
public string Guidelines { get; set; }
```

- *Type:* string

General guidelines for the playbook.

These are unstructured instructions that are not directly part of the goal, e.g. "Always be polite". It's valid for this text to be long and used instead of steps altogether.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#guidelines GoogleDialogflowCxPlaybook#guidelines}

---

##### `Steps`<sup>Optional</sup> <a name="Steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.steps"></a>

```csharp
public object Steps { get; set; }
```

- *Type:* object

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#steps GoogleDialogflowCxPlaybook#steps}

---

### GoogleDialogflowCxPlaybookInstructionSteps <a name="GoogleDialogflowCxPlaybookInstructionSteps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxPlaybookInstructionSteps {
    string Steps = null,
    string Text = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.steps">Steps</a></code> | <code>string</code> | Sub-processing needed to execute the current step. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.text">Text</a></code> | <code>string</code> | Step instruction in text format. |

---

##### `Steps`<sup>Optional</sup> <a name="Steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.steps"></a>

```csharp
public string Steps { get; set; }
```

- *Type:* string

Sub-processing needed to execute the current step.

This field uses JSON data as a string. The value provided must be a valid JSON representation documented in [Step](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.playbooks#step).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#steps GoogleDialogflowCxPlaybook#steps}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Step instruction in text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#text GoogleDialogflowCxPlaybook#text}

---

### GoogleDialogflowCxPlaybookLlmModelSettings <a name="GoogleDialogflowCxPlaybookLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxPlaybookLlmModelSettings {
    string Model = null,
    string PromptText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.model">Model</a></code> | <code>string</code> | The selected LLM model. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.promptText">PromptText</a></code> | <code>string</code> | The custom prompt to use. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#model GoogleDialogflowCxPlaybook#model}

---

##### `PromptText`<sup>Optional</sup> <a name="PromptText" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.promptText"></a>

```csharp
public string PromptText { get; set; }
```

- *Type:* string

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#prompt_text GoogleDialogflowCxPlaybook#prompt_text}

---

### GoogleDialogflowCxPlaybookTimeouts <a name="GoogleDialogflowCxPlaybookTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxPlaybookTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#create GoogleDialogflowCxPlaybook#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#delete GoogleDialogflowCxPlaybook#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#update GoogleDialogflowCxPlaybook#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#create GoogleDialogflowCxPlaybook#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#delete GoogleDialogflowCxPlaybook#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#update GoogleDialogflowCxPlaybook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxPlaybookInstructionOutputReference <a name="GoogleDialogflowCxPlaybookInstructionOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxPlaybookInstructionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSteps` <a name="PutSteps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.putSteps"></a>

```csharp
private void PutSteps(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.putSteps.parameter.value"></a>

- *Type:* object

---

##### `ResetGuidelines` <a name="ResetGuidelines" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resetGuidelines"></a>

```csharp
private void ResetGuidelines()
```

##### `ResetSteps` <a name="ResetSteps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resetSteps"></a>

```csharp
private void ResetSteps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList">GoogleDialogflowCxPlaybookInstructionStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelinesInput">GuidelinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.stepsInput">StepsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelines">Guidelines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.steps"></a>

```csharp
public GoogleDialogflowCxPlaybookInstructionStepsList Steps { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList">GoogleDialogflowCxPlaybookInstructionStepsList</a>

---

##### `GuidelinesInput`<sup>Optional</sup> <a name="GuidelinesInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelinesInput"></a>

```csharp
public string GuidelinesInput { get; }
```

- *Type:* string

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.stepsInput"></a>

```csharp
public object StepsInput { get; }
```

- *Type:* object

---

##### `Guidelines`<sup>Required</sup> <a name="Guidelines" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelines"></a>

```csharp
public string Guidelines { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxPlaybookInstruction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

---


### GoogleDialogflowCxPlaybookInstructionStepsList <a name="GoogleDialogflowCxPlaybookInstructionStepsList" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxPlaybookInstructionStepsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.get"></a>

```csharp
private GoogleDialogflowCxPlaybookInstructionStepsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDialogflowCxPlaybookInstructionStepsOutputReference <a name="GoogleDialogflowCxPlaybookInstructionStepsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxPlaybookInstructionStepsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSteps` <a name="ResetSteps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resetSteps"></a>

```csharp
private void ResetSteps()
```

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resetText"></a>

```csharp
private void ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.stepsInput">StepsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.steps">Steps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.stepsInput"></a>

```csharp
public string StepsInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.steps"></a>

```csharp
public string Steps { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference <a name="GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetPromptText` <a name="ResetPromptText" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resetPromptText"></a>

```csharp
private void ResetPromptText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptTextInput">PromptTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptText">PromptText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `PromptTextInput`<sup>Optional</sup> <a name="PromptTextInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptTextInput"></a>

```csharp
public string PromptTextInput { get; }
```

- *Type:* string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `PromptText`<sup>Required</sup> <a name="PromptText" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptText"></a>

```csharp
public string PromptText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxPlaybookLlmModelSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

---


### GoogleDialogflowCxPlaybookTimeoutsOutputReference <a name="GoogleDialogflowCxPlaybookTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxPlaybookTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



