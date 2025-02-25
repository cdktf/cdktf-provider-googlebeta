# `googleDialogflowCxSecuritySettings` Submodule <a name="`googleDialogflowCxSecuritySettings` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxSecuritySettings <a name="GoogleDialogflowCxSecuritySettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings google_dialogflow_cx_security_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxSecuritySettings(Construct Scope, string Id, GoogleDialogflowCxSecuritySettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig">GoogleDialogflowCxSecuritySettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig">GoogleDialogflowCxSecuritySettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putAudioExportSettings">PutAudioExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putInsightsExportSettings">PutInsightsExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetAudioExportSettings">ResetAudioExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetDeidentifyTemplate">ResetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetInsightsExportSettings">ResetInsightsExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetInspectTemplate">ResetInspectTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetPurgeDataTypes">ResetPurgeDataTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRedactionScope">ResetRedactionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRedactionStrategy">ResetRedactionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRetentionStrategy">ResetRetentionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRetentionWindowDays">ResetRetentionWindowDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAudioExportSettings` <a name="PutAudioExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putAudioExportSettings"></a>

```csharp
private void PutAudioExportSettings(GoogleDialogflowCxSecuritySettingsAudioExportSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putAudioExportSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a>

---

##### `PutInsightsExportSettings` <a name="PutInsightsExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putInsightsExportSettings"></a>

```csharp
private void PutInsightsExportSettings(GoogleDialogflowCxSecuritySettingsInsightsExportSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putInsightsExportSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDialogflowCxSecuritySettingsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a>

---

##### `ResetAudioExportSettings` <a name="ResetAudioExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetAudioExportSettings"></a>

```csharp
private void ResetAudioExportSettings()
```

##### `ResetDeidentifyTemplate` <a name="ResetDeidentifyTemplate" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetDeidentifyTemplate"></a>

```csharp
private void ResetDeidentifyTemplate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInsightsExportSettings` <a name="ResetInsightsExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetInsightsExportSettings"></a>

```csharp
private void ResetInsightsExportSettings()
```

##### `ResetInspectTemplate` <a name="ResetInspectTemplate" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetInspectTemplate"></a>

```csharp
private void ResetInspectTemplate()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPurgeDataTypes` <a name="ResetPurgeDataTypes" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetPurgeDataTypes"></a>

```csharp
private void ResetPurgeDataTypes()
```

##### `ResetRedactionScope` <a name="ResetRedactionScope" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRedactionScope"></a>

```csharp
private void ResetRedactionScope()
```

##### `ResetRedactionStrategy` <a name="ResetRedactionStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRedactionStrategy"></a>

```csharp
private void ResetRedactionStrategy()
```

##### `ResetRetentionStrategy` <a name="ResetRetentionStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRetentionStrategy"></a>

```csharp
private void ResetRetentionStrategy()
```

##### `ResetRetentionWindowDays` <a name="ResetRetentionWindowDays" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRetentionWindowDays"></a>

```csharp
private void ResetRetentionWindowDays()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxSecuritySettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxSecuritySettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxSecuritySettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxSecuritySettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxSecuritySettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDialogflowCxSecuritySettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowCxSecuritySettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowCxSecuritySettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxSecuritySettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.audioExportSettings">AudioExportSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference">GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.insightsExportSettings">InsightsExportSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference">GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference">GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.audioExportSettingsInput">AudioExportSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.deidentifyTemplateInput">DeidentifyTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.insightsExportSettingsInput">InsightsExportSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.inspectTemplateInput">InspectTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.purgeDataTypesInput">PurgeDataTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionScopeInput">RedactionScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionStrategyInput">RedactionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionStrategyInput">RetentionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionWindowDaysInput">RetentionWindowDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.deidentifyTemplate">DeidentifyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.inspectTemplate">InspectTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.purgeDataTypes">PurgeDataTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionScope">RedactionScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionStrategy">RedactionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionStrategy">RetentionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionWindowDays">RetentionWindowDays</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AudioExportSettings`<sup>Required</sup> <a name="AudioExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.audioExportSettings"></a>

```csharp
public GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference AudioExportSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference">GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference</a>

---

##### `InsightsExportSettings`<sup>Required</sup> <a name="InsightsExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.insightsExportSettings"></a>

```csharp
public GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference InsightsExportSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference">GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.timeouts"></a>

```csharp
public GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference">GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference</a>

---

##### `AudioExportSettingsInput`<sup>Optional</sup> <a name="AudioExportSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.audioExportSettingsInput"></a>

```csharp
public GoogleDialogflowCxSecuritySettingsAudioExportSettings AudioExportSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a>

---

##### `DeidentifyTemplateInput`<sup>Optional</sup> <a name="DeidentifyTemplateInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.deidentifyTemplateInput"></a>

```csharp
public string DeidentifyTemplateInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InsightsExportSettingsInput`<sup>Optional</sup> <a name="InsightsExportSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.insightsExportSettingsInput"></a>

```csharp
public GoogleDialogflowCxSecuritySettingsInsightsExportSettings InsightsExportSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a>

---

##### `InspectTemplateInput`<sup>Optional</sup> <a name="InspectTemplateInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.inspectTemplateInput"></a>

```csharp
public string InspectTemplateInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PurgeDataTypesInput`<sup>Optional</sup> <a name="PurgeDataTypesInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.purgeDataTypesInput"></a>

```csharp
public string[] PurgeDataTypesInput { get; }
```

- *Type:* string[]

---

##### `RedactionScopeInput`<sup>Optional</sup> <a name="RedactionScopeInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionScopeInput"></a>

```csharp
public string RedactionScopeInput { get; }
```

- *Type:* string

---

##### `RedactionStrategyInput`<sup>Optional</sup> <a name="RedactionStrategyInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionStrategyInput"></a>

```csharp
public string RedactionStrategyInput { get; }
```

- *Type:* string

---

##### `RetentionStrategyInput`<sup>Optional</sup> <a name="RetentionStrategyInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionStrategyInput"></a>

```csharp
public string RetentionStrategyInput { get; }
```

- *Type:* string

---

##### `RetentionWindowDaysInput`<sup>Optional</sup> <a name="RetentionWindowDaysInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionWindowDaysInput"></a>

```csharp
public double RetentionWindowDaysInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeidentifyTemplate`<sup>Required</sup> <a name="DeidentifyTemplate" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.deidentifyTemplate"></a>

```csharp
public string DeidentifyTemplate { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InspectTemplate`<sup>Required</sup> <a name="InspectTemplate" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.inspectTemplate"></a>

```csharp
public string InspectTemplate { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PurgeDataTypes`<sup>Required</sup> <a name="PurgeDataTypes" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.purgeDataTypes"></a>

```csharp
public string[] PurgeDataTypes { get; }
```

- *Type:* string[]

---

##### `RedactionScope`<sup>Required</sup> <a name="RedactionScope" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionScope"></a>

```csharp
public string RedactionScope { get; }
```

- *Type:* string

---

##### `RedactionStrategy`<sup>Required</sup> <a name="RedactionStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionStrategy"></a>

```csharp
public string RedactionStrategy { get; }
```

- *Type:* string

---

##### `RetentionStrategy`<sup>Required</sup> <a name="RetentionStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionStrategy"></a>

```csharp
public string RetentionStrategy { get; }
```

- *Type:* string

---

##### `RetentionWindowDays`<sup>Required</sup> <a name="RetentionWindowDays" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionWindowDays"></a>

```csharp
public double RetentionWindowDays { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxSecuritySettingsAudioExportSettings <a name="GoogleDialogflowCxSecuritySettingsAudioExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxSecuritySettingsAudioExportSettings {
    string AudioExportPattern = null,
    string AudioFormat = null,
    object EnableAudioRedaction = null,
    string GcsBucket = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.audioExportPattern">AudioExportPattern</a></code> | <code>string</code> | Filename pattern for exported audio. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.audioFormat">AudioFormat</a></code> | <code>string</code> | File format for exported audio file. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.enableAudioRedaction">EnableAudioRedaction</a></code> | <code>object</code> | Enable audio redaction if it is true. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.gcsBucket">GcsBucket</a></code> | <code>string</code> | Cloud Storage bucket to export audio record to. |

---

##### `AudioExportPattern`<sup>Optional</sup> <a name="AudioExportPattern" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.audioExportPattern"></a>

```csharp
public string AudioExportPattern { get; set; }
```

- *Type:* string

Filename pattern for exported audio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#audio_export_pattern GoogleDialogflowCxSecuritySettings#audio_export_pattern}

---

##### `AudioFormat`<sup>Optional</sup> <a name="AudioFormat" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.audioFormat"></a>

```csharp
public string AudioFormat { get; set; }
```

- *Type:* string

File format for exported audio file.

Currently only in telephony recordings.

* MULAW: G.711 mu-law PCM with 8kHz sample rate.
* MP3: MP3 file format.
* OGG: OGG Vorbis. Possible values: ["MULAW", "MP3", "OGG"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#audio_format GoogleDialogflowCxSecuritySettings#audio_format}

---

##### `EnableAudioRedaction`<sup>Optional</sup> <a name="EnableAudioRedaction" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.enableAudioRedaction"></a>

```csharp
public object EnableAudioRedaction { get; set; }
```

- *Type:* object

Enable audio redaction if it is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#enable_audio_redaction GoogleDialogflowCxSecuritySettings#enable_audio_redaction}

---

##### `GcsBucket`<sup>Optional</sup> <a name="GcsBucket" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.gcsBucket"></a>

```csharp
public string GcsBucket { get; set; }
```

- *Type:* string

Cloud Storage bucket to export audio record to.

Setting this field would grant the Storage Object Creator role to the Dialogflow Service Agent. API caller that tries to modify this field should have the permission of storage.buckets.setIamPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#gcs_bucket GoogleDialogflowCxSecuritySettings#gcs_bucket}

---

### GoogleDialogflowCxSecuritySettingsConfig <a name="GoogleDialogflowCxSecuritySettingsConfig" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxSecuritySettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Location,
    GoogleDialogflowCxSecuritySettingsAudioExportSettings AudioExportSettings = null,
    string DeidentifyTemplate = null,
    string Id = null,
    GoogleDialogflowCxSecuritySettingsInsightsExportSettings InsightsExportSettings = null,
    string InspectTemplate = null,
    string Project = null,
    string[] PurgeDataTypes = null,
    string RedactionScope = null,
    string RedactionStrategy = null,
    string RetentionStrategy = null,
    double RetentionWindowDays = null,
    GoogleDialogflowCxSecuritySettingsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The human-readable name of the security settings, unique within the location. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.location">Location</a></code> | <code>string</code> | The location these settings are located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.audioExportSettings">AudioExportSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a></code> | audio_export_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.deidentifyTemplate">DeidentifyTemplate</a></code> | <code>string</code> | [DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. If empty, Dialogflow replaces sensitive info with [redacted] text. Note: deidentifyTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/deidentifyTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/deidentifyTemplates/<Template ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#id GoogleDialogflowCxSecuritySettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.insightsExportSettings">InsightsExportSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a></code> | insights_export_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.inspectTemplate">InspectTemplate</a></code> | <code>string</code> | [DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. If empty, we use the default DLP inspect config. Note: inspectTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/inspectTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/inspectTemplates/<Template ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#project GoogleDialogflowCxSecuritySettings#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.purgeDataTypes">PurgeDataTypes</a></code> | <code>string[]</code> | List of types of data to remove when retention settings triggers purge. Possible values: ["DIALOGFLOW_HISTORY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.redactionScope">RedactionScope</a></code> | <code>string</code> | Defines what types of data to redact. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.redactionStrategy">RedactionStrategy</a></code> | <code>string</code> | Defines how we redact data. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.retentionStrategy">RetentionStrategy</a></code> | <code>string</code> | Defines how long we retain persisted data that contains sensitive info. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.retentionWindowDays">RetentionWindowDays</a></code> | <code>double</code> | Retains the data for the specified number of days. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The human-readable name of the security settings, unique within the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#display_name GoogleDialogflowCxSecuritySettings#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location these settings are located in.

Settings can only be applied to an agent in the same location.
See [Available Regions](https://cloud.google.com/dialogflow/cx/docs/concept/region#avail) for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#location GoogleDialogflowCxSecuritySettings#location}

---

##### `AudioExportSettings`<sup>Optional</sup> <a name="AudioExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.audioExportSettings"></a>

```csharp
public GoogleDialogflowCxSecuritySettingsAudioExportSettings AudioExportSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a>

audio_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#audio_export_settings GoogleDialogflowCxSecuritySettings#audio_export_settings}

---

##### `DeidentifyTemplate`<sup>Optional</sup> <a name="DeidentifyTemplate" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.deidentifyTemplate"></a>

```csharp
public string DeidentifyTemplate { get; set; }
```

- *Type:* string

[DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. If empty, Dialogflow replaces sensitive info with [redacted] text. Note: deidentifyTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/deidentifyTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/deidentifyTemplates/<Template ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#deidentify_template GoogleDialogflowCxSecuritySettings#deidentify_template}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#id GoogleDialogflowCxSecuritySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InsightsExportSettings`<sup>Optional</sup> <a name="InsightsExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.insightsExportSettings"></a>

```csharp
public GoogleDialogflowCxSecuritySettingsInsightsExportSettings InsightsExportSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a>

insights_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#insights_export_settings GoogleDialogflowCxSecuritySettings#insights_export_settings}

---

##### `InspectTemplate`<sup>Optional</sup> <a name="InspectTemplate" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.inspectTemplate"></a>

```csharp
public string InspectTemplate { get; set; }
```

- *Type:* string

[DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. If empty, we use the default DLP inspect config. Note: inspectTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/inspectTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/inspectTemplates/<Template ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#inspect_template GoogleDialogflowCxSecuritySettings#inspect_template}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#project GoogleDialogflowCxSecuritySettings#project}.

---

##### `PurgeDataTypes`<sup>Optional</sup> <a name="PurgeDataTypes" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.purgeDataTypes"></a>

```csharp
public string[] PurgeDataTypes { get; set; }
```

- *Type:* string[]

List of types of data to remove when retention settings triggers purge. Possible values: ["DIALOGFLOW_HISTORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#purge_data_types GoogleDialogflowCxSecuritySettings#purge_data_types}

---

##### `RedactionScope`<sup>Optional</sup> <a name="RedactionScope" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.redactionScope"></a>

```csharp
public string RedactionScope { get; set; }
```

- *Type:* string

Defines what types of data to redact.

If not set, defaults to not redacting any kind of data.

* REDACT_DISK_STORAGE: On data to be written to disk or similar devices that are capable of holding data even if power is disconnected. This includes data that are temporarily saved on disk. Possible values: ["REDACT_DISK_STORAGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#redaction_scope GoogleDialogflowCxSecuritySettings#redaction_scope}

---

##### `RedactionStrategy`<sup>Optional</sup> <a name="RedactionStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.redactionStrategy"></a>

```csharp
public string RedactionStrategy { get; set; }
```

- *Type:* string

Defines how we redact data.

If not set, defaults to not redacting.

* REDACT_WITH_SERVICE: Call redaction service to clean up the data to be persisted. Possible values: ["REDACT_WITH_SERVICE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#redaction_strategy GoogleDialogflowCxSecuritySettings#redaction_strategy}

---

##### `RetentionStrategy`<sup>Optional</sup> <a name="RetentionStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.retentionStrategy"></a>

```csharp
public string RetentionStrategy { get; set; }
```

- *Type:* string

Defines how long we retain persisted data that contains sensitive info.

Only one of 'retention_window_days' and 'retention_strategy' may be set.

* REMOVE_AFTER_CONVERSATION: Removes data when the conversation ends. If there is no conversation explicitly established, a default conversation ends when the corresponding Dialogflow session ends. Possible values: ["REMOVE_AFTER_CONVERSATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#retention_strategy GoogleDialogflowCxSecuritySettings#retention_strategy}

---

##### `RetentionWindowDays`<sup>Optional</sup> <a name="RetentionWindowDays" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.retentionWindowDays"></a>

```csharp
public double RetentionWindowDays { get; set; }
```

- *Type:* double

Retains the data for the specified number of days.

User must set a value lower than Dialogflow's default 365d TTL (30 days for Agent Assist traffic), higher value will be ignored and use default. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use default TTL.
Only one of 'retention_window_days' and 'retention_strategy' may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#retention_window_days GoogleDialogflowCxSecuritySettings#retention_window_days}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.timeouts"></a>

```csharp
public GoogleDialogflowCxSecuritySettingsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#timeouts GoogleDialogflowCxSecuritySettings#timeouts}

---

### GoogleDialogflowCxSecuritySettingsInsightsExportSettings <a name="GoogleDialogflowCxSecuritySettingsInsightsExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxSecuritySettingsInsightsExportSettings {
    object EnableInsightsExport
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings.property.enableInsightsExport">EnableInsightsExport</a></code> | <code>object</code> | If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers. |

---

##### `EnableInsightsExport`<sup>Required</sup> <a name="EnableInsightsExport" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings.property.enableInsightsExport"></a>

```csharp
public object EnableInsightsExport { get; set; }
```

- *Type:* object

If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#enable_insights_export GoogleDialogflowCxSecuritySettings#enable_insights_export}

---

### GoogleDialogflowCxSecuritySettingsTimeouts <a name="GoogleDialogflowCxSecuritySettingsTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxSecuritySettingsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#create GoogleDialogflowCxSecuritySettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#delete GoogleDialogflowCxSecuritySettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#update GoogleDialogflowCxSecuritySettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#create GoogleDialogflowCxSecuritySettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#delete GoogleDialogflowCxSecuritySettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dialogflow_cx_security_settings#update GoogleDialogflowCxSecuritySettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference <a name="GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioExportPattern">ResetAudioExportPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioFormat">ResetAudioFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetEnableAudioRedaction">ResetEnableAudioRedaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetGcsBucket">ResetGcsBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudioExportPattern` <a name="ResetAudioExportPattern" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioExportPattern"></a>

```csharp
private void ResetAudioExportPattern()
```

##### `ResetAudioFormat` <a name="ResetAudioFormat" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioFormat"></a>

```csharp
private void ResetAudioFormat()
```

##### `ResetEnableAudioRedaction` <a name="ResetEnableAudioRedaction" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetEnableAudioRedaction"></a>

```csharp
private void ResetEnableAudioRedaction()
```

##### `ResetGcsBucket` <a name="ResetGcsBucket" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetGcsBucket"></a>

```csharp
private void ResetGcsBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPatternInput">AudioExportPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormatInput">AudioFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedactionInput">EnableAudioRedactionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucketInput">GcsBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPattern">AudioExportPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormat">AudioFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedaction">EnableAudioRedaction</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucket">GcsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioExportPatternInput`<sup>Optional</sup> <a name="AudioExportPatternInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPatternInput"></a>

```csharp
public string AudioExportPatternInput { get; }
```

- *Type:* string

---

##### `AudioFormatInput`<sup>Optional</sup> <a name="AudioFormatInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormatInput"></a>

```csharp
public string AudioFormatInput { get; }
```

- *Type:* string

---

##### `EnableAudioRedactionInput`<sup>Optional</sup> <a name="EnableAudioRedactionInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedactionInput"></a>

```csharp
public object EnableAudioRedactionInput { get; }
```

- *Type:* object

---

##### `GcsBucketInput`<sup>Optional</sup> <a name="GcsBucketInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucketInput"></a>

```csharp
public string GcsBucketInput { get; }
```

- *Type:* string

---

##### `AudioExportPattern`<sup>Required</sup> <a name="AudioExportPattern" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPattern"></a>

```csharp
public string AudioExportPattern { get; }
```

- *Type:* string

---

##### `AudioFormat`<sup>Required</sup> <a name="AudioFormat" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormat"></a>

```csharp
public string AudioFormat { get; }
```

- *Type:* string

---

##### `EnableAudioRedaction`<sup>Required</sup> <a name="EnableAudioRedaction" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedaction"></a>

```csharp
public object EnableAudioRedaction { get; }
```

- *Type:* object

---

##### `GcsBucket`<sup>Required</sup> <a name="GcsBucket" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucket"></a>

```csharp
public string GcsBucket { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxSecuritySettingsAudioExportSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a>

---


### GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference <a name="GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExportInput">EnableInsightsExportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExport">EnableInsightsExport</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInsightsExportInput`<sup>Optional</sup> <a name="EnableInsightsExportInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExportInput"></a>

```csharp
public object EnableInsightsExportInput { get; }
```

- *Type:* object

---

##### `EnableInsightsExport`<sup>Required</sup> <a name="EnableInsightsExport" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExport"></a>

```csharp
public object EnableInsightsExport { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxSecuritySettingsInsightsExportSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a>

---


### GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference <a name="GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



