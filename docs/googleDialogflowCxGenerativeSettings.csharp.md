# `googleDialogflowCxGenerativeSettings` Submodule <a name="`googleDialogflowCxGenerativeSettings` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxGenerativeSettings <a name="GoogleDialogflowCxGenerativeSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings google_dialogflow_cx_generative_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxGenerativeSettings(Construct Scope, string Id, GoogleDialogflowCxGenerativeSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig">GoogleDialogflowCxGenerativeSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig">GoogleDialogflowCxGenerativeSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putFallbackSettings">PutFallbackSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putGenerativeSafetySettings">PutGenerativeSafetySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putKnowledgeConnectorSettings">PutKnowledgeConnectorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putLlmModelSettings">PutLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetFallbackSettings">ResetFallbackSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetGenerativeSafetySettings">ResetGenerativeSafetySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetKnowledgeConnectorSettings">ResetKnowledgeConnectorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetLlmModelSettings">ResetLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFallbackSettings` <a name="PutFallbackSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putFallbackSettings"></a>

```csharp
private void PutFallbackSettings(GoogleDialogflowCxGenerativeSettingsFallbackSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putFallbackSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a>

---

##### `PutGenerativeSafetySettings` <a name="PutGenerativeSafetySettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putGenerativeSafetySettings"></a>

```csharp
private void PutGenerativeSafetySettings(GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putGenerativeSafetySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

---

##### `PutKnowledgeConnectorSettings` <a name="PutKnowledgeConnectorSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putKnowledgeConnectorSettings"></a>

```csharp
private void PutKnowledgeConnectorSettings(GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putKnowledgeConnectorSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

---

##### `PutLlmModelSettings` <a name="PutLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putLlmModelSettings"></a>

```csharp
private void PutLlmModelSettings(GoogleDialogflowCxGenerativeSettingsLlmModelSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putLlmModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDialogflowCxGenerativeSettingsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>

---

##### `ResetFallbackSettings` <a name="ResetFallbackSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetFallbackSettings"></a>

```csharp
private void ResetFallbackSettings()
```

##### `ResetGenerativeSafetySettings` <a name="ResetGenerativeSafetySettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetGenerativeSafetySettings"></a>

```csharp
private void ResetGenerativeSafetySettings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKnowledgeConnectorSettings` <a name="ResetKnowledgeConnectorSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetKnowledgeConnectorSettings"></a>

```csharp
private void ResetKnowledgeConnectorSettings()
```

##### `ResetLlmModelSettings` <a name="ResetLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetLlmModelSettings"></a>

```csharp
private void ResetLlmModelSettings()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetParent"></a>

```csharp
private void ResetParent()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxGenerativeSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxGenerativeSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxGenerativeSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxGenerativeSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxGenerativeSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDialogflowCxGenerativeSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowCxGenerativeSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowCxGenerativeSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxGenerativeSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fallbackSettings">FallbackSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.generativeSafetySettings">GenerativeSafetySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.knowledgeConnectorSettings">KnowledgeConnectorSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.llmModelSettings">LlmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference">GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fallbackSettingsInput">FallbackSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.generativeSafetySettingsInput">GenerativeSafetySettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.knowledgeConnectorSettingsInput">KnowledgeConnectorSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.languageCodeInput">LanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.llmModelSettingsInput">LlmModelSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `FallbackSettings`<sup>Required</sup> <a name="FallbackSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fallbackSettings"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference FallbackSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference</a>

---

##### `GenerativeSafetySettings`<sup>Required</sup> <a name="GenerativeSafetySettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.generativeSafetySettings"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference GenerativeSafetySettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference</a>

---

##### `KnowledgeConnectorSettings`<sup>Required</sup> <a name="KnowledgeConnectorSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.knowledgeConnectorSettings"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference KnowledgeConnectorSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference</a>

---

##### `LlmModelSettings`<sup>Required</sup> <a name="LlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.llmModelSettings"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference LlmModelSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.timeouts"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference">GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference</a>

---

##### `FallbackSettingsInput`<sup>Optional</sup> <a name="FallbackSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fallbackSettingsInput"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsFallbackSettings FallbackSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a>

---

##### `GenerativeSafetySettingsInput`<sup>Optional</sup> <a name="GenerativeSafetySettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.generativeSafetySettingsInput"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings GenerativeSafetySettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KnowledgeConnectorSettingsInput`<sup>Optional</sup> <a name="KnowledgeConnectorSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.knowledgeConnectorSettingsInput"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings KnowledgeConnectorSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.languageCodeInput"></a>

```csharp
public string LanguageCodeInput { get; }
```

- *Type:* string

---

##### `LlmModelSettingsInput`<sup>Optional</sup> <a name="LlmModelSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.llmModelSettingsInput"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsLlmModelSettings LlmModelSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleDialogflowCxGenerativeSettingsTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxGenerativeSettingsConfig <a name="GoogleDialogflowCxGenerativeSettingsConfig" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxGenerativeSettingsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string LanguageCode,
    GoogleDialogflowCxGenerativeSettingsFallbackSettings FallbackSettings = null,
    GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings GenerativeSafetySettings = null,
    string Id = null,
    GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings KnowledgeConnectorSettings = null,
    GoogleDialogflowCxGenerativeSettingsLlmModelSettings LlmModelSettings = null,
    string Parent = null,
    GoogleDialogflowCxGenerativeSettingsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.languageCode">LanguageCode</a></code> | <code>string</code> | Language for this settings. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.fallbackSettings">FallbackSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a></code> | fallback_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.generativeSafetySettings">GenerativeSafetySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a></code> | generative_safety_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#id GoogleDialogflowCxGenerativeSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.knowledgeConnectorSettings">KnowledgeConnectorSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a></code> | knowledge_connector_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.llmModelSettings">LlmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.parent">Parent</a></code> | <code>string</code> | The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.languageCode"></a>

```csharp
public string LanguageCode { get; set; }
```

- *Type:* string

Language for this settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#language_code GoogleDialogflowCxGenerativeSettings#language_code}

---

##### `FallbackSettings`<sup>Optional</sup> <a name="FallbackSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.fallbackSettings"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsFallbackSettings FallbackSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a>

fallback_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#fallback_settings GoogleDialogflowCxGenerativeSettings#fallback_settings}

---

##### `GenerativeSafetySettings`<sup>Optional</sup> <a name="GenerativeSafetySettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.generativeSafetySettings"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings GenerativeSafetySettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

generative_safety_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#generative_safety_settings GoogleDialogflowCxGenerativeSettings#generative_safety_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#id GoogleDialogflowCxGenerativeSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KnowledgeConnectorSettings`<sup>Optional</sup> <a name="KnowledgeConnectorSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.knowledgeConnectorSettings"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings KnowledgeConnectorSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

knowledge_connector_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#knowledge_connector_settings GoogleDialogflowCxGenerativeSettings#knowledge_connector_settings}

---

##### `LlmModelSettings`<sup>Optional</sup> <a name="LlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.llmModelSettings"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsLlmModelSettings LlmModelSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#llm_model_settings GoogleDialogflowCxGenerativeSettings#llm_model_settings}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#parent GoogleDialogflowCxGenerativeSettings#parent}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.timeouts"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#timeouts GoogleDialogflowCxGenerativeSettings#timeouts}

---

### GoogleDialogflowCxGenerativeSettingsFallbackSettings <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxGenerativeSettingsFallbackSettings {
    IResolvable|GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates[] PromptTemplates = null,
    string SelectedPrompt = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.property.promptTemplates">PromptTemplates</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]</code> | prompt_templates block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.property.selectedPrompt">SelectedPrompt</a></code> | <code>string</code> | Display name of the selected prompt. |

---

##### `PromptTemplates`<sup>Optional</sup> <a name="PromptTemplates" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.property.promptTemplates"></a>

```csharp
public IResolvable|GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates[] PromptTemplates { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]

prompt_templates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#prompt_templates GoogleDialogflowCxGenerativeSettings#prompt_templates}

---

##### `SelectedPrompt`<sup>Optional</sup> <a name="SelectedPrompt" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.property.selectedPrompt"></a>

```csharp
public string SelectedPrompt { get; set; }
```

- *Type:* string

Display name of the selected prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#selected_prompt GoogleDialogflowCxGenerativeSettings#selected_prompt}

---

### GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates {
    string DisplayName = null,
    bool|IResolvable Frozen = null,
    string PromptText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.displayName">DisplayName</a></code> | <code>string</code> | Prompt name. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.frozen">Frozen</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If the flag is true, the prompt is frozen and cannot be modified by users. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.promptText">PromptText</a></code> | <code>string</code> | Prompt text that is sent to a LLM on no-match default, placeholders are filled downstream. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Prompt name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#display_name GoogleDialogflowCxGenerativeSettings#display_name}

---

##### `Frozen`<sup>Optional</sup> <a name="Frozen" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.frozen"></a>

```csharp
public bool|IResolvable Frozen { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If the flag is true, the prompt is frozen and cannot be modified by users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#frozen GoogleDialogflowCxGenerativeSettings#frozen}

---

##### `PromptText`<sup>Optional</sup> <a name="PromptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.promptText"></a>

```csharp
public string PromptText { get; set; }
```

- *Type:* string

Prompt text that is sent to a LLM on no-match default, placeholders are filled downstream.

For example: "Here is a conversation $conversation, a response is: "

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#prompt_text GoogleDialogflowCxGenerativeSettings#prompt_text}

---

### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings {
    IResolvable|GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases[] BannedPhrases = null,
    string DefaultBannedPhraseMatchStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.property.bannedPhrases">BannedPhrases</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]</code> | banned_phrases block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.property.defaultBannedPhraseMatchStrategy">DefaultBannedPhraseMatchStrategy</a></code> | <code>string</code> | Optional. Default phrase match strategy for banned phrases. See [PhraseMatchStrategy](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/GenerativeSettings#phrasematchstrategy) for valid values. |

---

##### `BannedPhrases`<sup>Optional</sup> <a name="BannedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.property.bannedPhrases"></a>

```csharp
public IResolvable|GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases[] BannedPhrases { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]

banned_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#banned_phrases GoogleDialogflowCxGenerativeSettings#banned_phrases}

---

##### `DefaultBannedPhraseMatchStrategy`<sup>Optional</sup> <a name="DefaultBannedPhraseMatchStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.property.defaultBannedPhraseMatchStrategy"></a>

```csharp
public string DefaultBannedPhraseMatchStrategy { get; set; }
```

- *Type:* string

Optional. Default phrase match strategy for banned phrases. See [PhraseMatchStrategy](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/GenerativeSettings#phrasematchstrategy) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#default_banned_phrase_match_strategy GoogleDialogflowCxGenerativeSettings#default_banned_phrase_match_strategy}

---

### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases {
    string LanguageCode,
    string Text
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.languageCode">LanguageCode</a></code> | <code>string</code> | Language code of the phrase. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.text">Text</a></code> | <code>string</code> | Text input which can be used for prompt or banned phrases. |

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.languageCode"></a>

```csharp
public string LanguageCode { get; set; }
```

- *Type:* string

Language code of the phrase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#language_code GoogleDialogflowCxGenerativeSettings#language_code}

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Text input which can be used for prompt or banned phrases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#text GoogleDialogflowCxGenerativeSettings#text}

---

### GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings <a name="GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings {
    string Agent = null,
    string AgentIdentity = null,
    string AgentScope = null,
    string Business = null,
    string BusinessDescription = null,
    bool|IResolvable DisableDataStoreFallback = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agent">Agent</a></code> | <code>string</code> | Name of the virtual agent. Used for LLM prompt. Can be left empty. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentIdentity">AgentIdentity</a></code> | <code>string</code> | Identity of the agent, e.g. "virtual agent", "AI assistant". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentScope">AgentScope</a></code> | <code>string</code> | Agent scope, e.g. "Example company website", "internal Example company website for employees", "manual of car owner". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.business">Business</a></code> | <code>string</code> | Name of the company, organization or other entity that the agent represents. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.businessDescription">BusinessDescription</a></code> | <code>string</code> | Company description, used for LLM prompt, e.g. "a family company selling freshly roasted coffee beans".''. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.disableDataStoreFallback">DisableDataStoreFallback</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether to disable fallback to Data Store search results (in case the LLM couldn't pick a proper answer). |

---

##### `Agent`<sup>Optional</sup> <a name="Agent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agent"></a>

```csharp
public string Agent { get; set; }
```

- *Type:* string

Name of the virtual agent. Used for LLM prompt. Can be left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#agent GoogleDialogflowCxGenerativeSettings#agent}

---

##### `AgentIdentity`<sup>Optional</sup> <a name="AgentIdentity" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentIdentity"></a>

```csharp
public string AgentIdentity { get; set; }
```

- *Type:* string

Identity of the agent, e.g. "virtual agent", "AI assistant".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#agent_identity GoogleDialogflowCxGenerativeSettings#agent_identity}

---

##### `AgentScope`<sup>Optional</sup> <a name="AgentScope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentScope"></a>

```csharp
public string AgentScope { get; set; }
```

- *Type:* string

Agent scope, e.g. "Example company website", "internal Example company website for employees", "manual of car owner".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#agent_scope GoogleDialogflowCxGenerativeSettings#agent_scope}

---

##### `Business`<sup>Optional</sup> <a name="Business" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.business"></a>

```csharp
public string Business { get; set; }
```

- *Type:* string

Name of the company, organization or other entity that the agent represents.

Used for knowledge connector LLM prompt and for knowledge search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#business GoogleDialogflowCxGenerativeSettings#business}

---

##### `BusinessDescription`<sup>Optional</sup> <a name="BusinessDescription" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.businessDescription"></a>

```csharp
public string BusinessDescription { get; set; }
```

- *Type:* string

Company description, used for LLM prompt, e.g. "a family company selling freshly roasted coffee beans".''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#business_description GoogleDialogflowCxGenerativeSettings#business_description}

---

##### `DisableDataStoreFallback`<sup>Optional</sup> <a name="DisableDataStoreFallback" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.disableDataStoreFallback"></a>

```csharp
public bool|IResolvable DisableDataStoreFallback { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether to disable fallback to Data Store search results (in case the LLM couldn't pick a proper answer).

Per default the feature is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#disable_data_store_fallback GoogleDialogflowCxGenerativeSettings#disable_data_store_fallback}

---

### GoogleDialogflowCxGenerativeSettingsLlmModelSettings <a name="GoogleDialogflowCxGenerativeSettingsLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxGenerativeSettingsLlmModelSettings {
    string Model = null,
    string PromptText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.property.model">Model</a></code> | <code>string</code> | The selected LLM model. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.property.promptText">PromptText</a></code> | <code>string</code> | The custom prompt to use. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#model GoogleDialogflowCxGenerativeSettings#model}

---

##### `PromptText`<sup>Optional</sup> <a name="PromptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.property.promptText"></a>

```csharp
public string PromptText { get; set; }
```

- *Type:* string

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#prompt_text GoogleDialogflowCxGenerativeSettings#prompt_text}

---

### GoogleDialogflowCxGenerativeSettingsTimeouts <a name="GoogleDialogflowCxGenerativeSettingsTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxGenerativeSettingsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#create GoogleDialogflowCxGenerativeSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#delete GoogleDialogflowCxGenerativeSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#update GoogleDialogflowCxGenerativeSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#create GoogleDialogflowCxGenerativeSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#delete GoogleDialogflowCxGenerativeSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#update GoogleDialogflowCxGenerativeSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.putPromptTemplates">PutPromptTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetPromptTemplates">ResetPromptTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetSelectedPrompt">ResetSelectedPrompt</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPromptTemplates` <a name="PutPromptTemplates" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.putPromptTemplates"></a>

```csharp
private void PutPromptTemplates(IResolvable|GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.putPromptTemplates.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]

---

##### `ResetPromptTemplates` <a name="ResetPromptTemplates" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetPromptTemplates"></a>

```csharp
private void ResetPromptTemplates()
```

##### `ResetSelectedPrompt` <a name="ResetSelectedPrompt" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetSelectedPrompt"></a>

```csharp
private void ResetSelectedPrompt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplates">PromptTemplates</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplatesInput">PromptTemplatesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPromptInput">SelectedPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPrompt">SelectedPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PromptTemplates`<sup>Required</sup> <a name="PromptTemplates" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplates"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList PromptTemplates { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList</a>

---

##### `PromptTemplatesInput`<sup>Optional</sup> <a name="PromptTemplatesInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplatesInput"></a>

```csharp
public IResolvable|GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates[] PromptTemplatesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]

---

##### `SelectedPromptInput`<sup>Optional</sup> <a name="SelectedPromptInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPromptInput"></a>

```csharp
public string SelectedPromptInput { get; }
```

- *Type:* string

---

##### `SelectedPrompt`<sup>Required</sup> <a name="SelectedPrompt" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPrompt"></a>

```csharp
public string SelectedPrompt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsFallbackSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a>

---


### GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.get"></a>

```csharp
private GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]

---


### GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetFrozen">ResetFrozen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetPromptText">ResetPromptText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFrozen` <a name="ResetFrozen" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetFrozen"></a>

```csharp
private void ResetFrozen()
```

##### `ResetPromptText` <a name="ResetPromptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetPromptText"></a>

```csharp
private void ResetPromptText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozenInput">FrozenInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptTextInput">PromptTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozen">Frozen</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptText">PromptText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FrozenInput`<sup>Optional</sup> <a name="FrozenInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozenInput"></a>

```csharp
public bool|IResolvable FrozenInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PromptTextInput`<sup>Optional</sup> <a name="PromptTextInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptTextInput"></a>

```csharp
public string PromptTextInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Frozen`<sup>Required</sup> <a name="Frozen" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozen"></a>

```csharp
public bool|IResolvable Frozen { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PromptText`<sup>Required</sup> <a name="PromptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptText"></a>

```csharp
public string PromptText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>

---


### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.get"></a>

```csharp
private GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]

---


### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCodeInput">LanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCodeInput"></a>

```csharp
public string LanguageCodeInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>

---


### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.putBannedPhrases">PutBannedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetBannedPhrases">ResetBannedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetDefaultBannedPhraseMatchStrategy">ResetDefaultBannedPhraseMatchStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBannedPhrases` <a name="PutBannedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.putBannedPhrases"></a>

```csharp
private void PutBannedPhrases(IResolvable|GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.putBannedPhrases.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]

---

##### `ResetBannedPhrases` <a name="ResetBannedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetBannedPhrases"></a>

```csharp
private void ResetBannedPhrases()
```

##### `ResetDefaultBannedPhraseMatchStrategy` <a name="ResetDefaultBannedPhraseMatchStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetDefaultBannedPhraseMatchStrategy"></a>

```csharp
private void ResetDefaultBannedPhraseMatchStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrases">BannedPhrases</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrasesInput">BannedPhrasesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategyInput">DefaultBannedPhraseMatchStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategy">DefaultBannedPhraseMatchStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BannedPhrases`<sup>Required</sup> <a name="BannedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrases"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList BannedPhrases { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList</a>

---

##### `BannedPhrasesInput`<sup>Optional</sup> <a name="BannedPhrasesInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrasesInput"></a>

```csharp
public IResolvable|GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases[] BannedPhrasesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]

---

##### `DefaultBannedPhraseMatchStrategyInput`<sup>Optional</sup> <a name="DefaultBannedPhraseMatchStrategyInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategyInput"></a>

```csharp
public string DefaultBannedPhraseMatchStrategyInput { get; }
```

- *Type:* string

---

##### `DefaultBannedPhraseMatchStrategy`<sup>Required</sup> <a name="DefaultBannedPhraseMatchStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategy"></a>

```csharp
public string DefaultBannedPhraseMatchStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

---


### GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgent">ResetAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentIdentity">ResetAgentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentScope">ResetAgentScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusiness">ResetBusiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusinessDescription">ResetBusinessDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetDisableDataStoreFallback">ResetDisableDataStoreFallback</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAgent` <a name="ResetAgent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgent"></a>

```csharp
private void ResetAgent()
```

##### `ResetAgentIdentity` <a name="ResetAgentIdentity" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentIdentity"></a>

```csharp
private void ResetAgentIdentity()
```

##### `ResetAgentScope` <a name="ResetAgentScope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentScope"></a>

```csharp
private void ResetAgentScope()
```

##### `ResetBusiness` <a name="ResetBusiness" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusiness"></a>

```csharp
private void ResetBusiness()
```

##### `ResetBusinessDescription` <a name="ResetBusinessDescription" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusinessDescription"></a>

```csharp
private void ResetBusinessDescription()
```

##### `ResetDisableDataStoreFallback` <a name="ResetDisableDataStoreFallback" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetDisableDataStoreFallback"></a>

```csharp
private void ResetDisableDataStoreFallback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentityInput">AgentIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentInput">AgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScopeInput">AgentScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescriptionInput">BusinessDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessInput">BusinessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallbackInput">DisableDataStoreFallbackInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agent">Agent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentity">AgentIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScope">AgentScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.business">Business</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescription">BusinessDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallback">DisableDataStoreFallback</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentIdentityInput`<sup>Optional</sup> <a name="AgentIdentityInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentityInput"></a>

```csharp
public string AgentIdentityInput { get; }
```

- *Type:* string

---

##### `AgentInput`<sup>Optional</sup> <a name="AgentInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentInput"></a>

```csharp
public string AgentInput { get; }
```

- *Type:* string

---

##### `AgentScopeInput`<sup>Optional</sup> <a name="AgentScopeInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScopeInput"></a>

```csharp
public string AgentScopeInput { get; }
```

- *Type:* string

---

##### `BusinessDescriptionInput`<sup>Optional</sup> <a name="BusinessDescriptionInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescriptionInput"></a>

```csharp
public string BusinessDescriptionInput { get; }
```

- *Type:* string

---

##### `BusinessInput`<sup>Optional</sup> <a name="BusinessInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessInput"></a>

```csharp
public string BusinessInput { get; }
```

- *Type:* string

---

##### `DisableDataStoreFallbackInput`<sup>Optional</sup> <a name="DisableDataStoreFallbackInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallbackInput"></a>

```csharp
public bool|IResolvable DisableDataStoreFallbackInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agent"></a>

```csharp
public string Agent { get; }
```

- *Type:* string

---

##### `AgentIdentity`<sup>Required</sup> <a name="AgentIdentity" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentity"></a>

```csharp
public string AgentIdentity { get; }
```

- *Type:* string

---

##### `AgentScope`<sup>Required</sup> <a name="AgentScope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScope"></a>

```csharp
public string AgentScope { get; }
```

- *Type:* string

---

##### `Business`<sup>Required</sup> <a name="Business" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.business"></a>

```csharp
public string Business { get; }
```

- *Type:* string

---

##### `BusinessDescription`<sup>Required</sup> <a name="BusinessDescription" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescription"></a>

```csharp
public string BusinessDescription { get; }
```

- *Type:* string

---

##### `DisableDataStoreFallback`<sup>Required</sup> <a name="DisableDataStoreFallback" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallback"></a>

```csharp
public bool|IResolvable DisableDataStoreFallback { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

---


### GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetPromptText">ResetPromptText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetPromptText` <a name="ResetPromptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetPromptText"></a>

```csharp
private void ResetPromptText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptTextInput">PromptTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptText">PromptText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `PromptTextInput`<sup>Optional</sup> <a name="PromptTextInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptTextInput"></a>

```csharp
public string PromptTextInput { get; }
```

- *Type:* string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `PromptText`<sup>Required</sup> <a name="PromptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptText"></a>

```csharp
public string PromptText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxGenerativeSettingsLlmModelSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a>

---


### GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDialogflowCxGenerativeSettingsTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>

---



