# `googleGeminiGeminiGcpEnablementSetting` Submodule <a name="`googleGeminiGeminiGcpEnablementSetting` Submodule" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiGeminiGcpEnablementSetting <a name="GoogleGeminiGeminiGcpEnablementSetting" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_gemini_gcp_enablement_setting google_gemini_gemini_gcp_enablement_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGeminiGeminiGcpEnablementSetting(Construct Scope, string Id, GoogleGeminiGeminiGcpEnablementSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig">GoogleGeminiGeminiGcpEnablementSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleGeminiGeminiGcpEnablementSettingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts">GoogleGeminiGeminiGcpEnablementSettingTimeouts</a>

---

##### `ResetEnableCustomerDataSharing` <a name="ResetEnableCustomerDataSharing" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetEnableCustomerDataSharing"></a>

```csharp
private void ResetEnableCustomerDataSharing()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
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

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGeminiGeminiGcpEnablementSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGeminiGeminiGcpEnablementSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGeminiGeminiGcpEnablementSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGeminiGeminiGcpEnablementSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleGeminiGeminiGcpEnablementSetting resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGeminiGeminiGcpEnablementSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGeminiGeminiGcpEnablementSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGeminiGeminiGcpEnablementSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference">GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharingInput">EnableCustomerDataSharingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingIdInput">GeminiGcpEnablementSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharing">EnableCustomerDataSharing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingId">GeminiGcpEnablementSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.timeouts"></a>

```csharp
public GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference">GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `EnableCustomerDataSharingInput`<sup>Optional</sup> <a name="EnableCustomerDataSharingInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharingInput"></a>

```csharp
public object EnableCustomerDataSharingInput { get; }
```

- *Type:* object

---

##### `GeminiGcpEnablementSettingIdInput`<sup>Optional</sup> <a name="GeminiGcpEnablementSettingIdInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingIdInput"></a>

```csharp
public string GeminiGcpEnablementSettingIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `EnableCustomerDataSharing`<sup>Required</sup> <a name="EnableCustomerDataSharing" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharing"></a>

```csharp
public object EnableCustomerDataSharing { get; }
```

- *Type:* object

---

##### `GeminiGcpEnablementSettingId`<sup>Required</sup> <a name="GeminiGcpEnablementSettingId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingId"></a>

```csharp
public string GeminiGcpEnablementSettingId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiGeminiGcpEnablementSettingConfig <a name="GoogleGeminiGeminiGcpEnablementSettingConfig" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGeminiGeminiGcpEnablementSettingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GeminiGcpEnablementSettingId,
    string Location,
    object EnableCustomerDataSharing = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleGeminiGeminiGcpEnablementSettingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.geminiGcpEnablementSettingId">GeminiGcpEnablementSettingId</a></code> | <code>string</code> | Id of the Gemini Gcp Enablement setting. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.enableCustomerDataSharing">EnableCustomerDataSharing</a></code> | <code>object</code> | Whether customer data sharing should be enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#id GoogleGeminiGeminiGcpEnablementSetting#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#project GoogleGeminiGeminiGcpEnablementSetting#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts">GoogleGeminiGeminiGcpEnablementSettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GeminiGcpEnablementSettingId`<sup>Required</sup> <a name="GeminiGcpEnablementSettingId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.geminiGcpEnablementSettingId"></a>

```csharp
public string GeminiGcpEnablementSettingId { get; set; }
```

- *Type:* string

Id of the Gemini Gcp Enablement setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#gemini_gcp_enablement_setting_id GoogleGeminiGeminiGcpEnablementSetting#gemini_gcp_enablement_setting_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#location GoogleGeminiGeminiGcpEnablementSetting#location}

---

##### `EnableCustomerDataSharing`<sup>Optional</sup> <a name="EnableCustomerDataSharing" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.enableCustomerDataSharing"></a>

```csharp
public object EnableCustomerDataSharing { get; set; }
```

- *Type:* object

Whether customer data sharing should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#enable_customer_data_sharing GoogleGeminiGeminiGcpEnablementSetting#enable_customer_data_sharing}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#id GoogleGeminiGeminiGcpEnablementSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#labels GoogleGeminiGeminiGcpEnablementSetting#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#project GoogleGeminiGeminiGcpEnablementSetting#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.timeouts"></a>

```csharp
public GoogleGeminiGeminiGcpEnablementSettingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts">GoogleGeminiGeminiGcpEnablementSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#timeouts GoogleGeminiGeminiGcpEnablementSetting#timeouts}

---

### GoogleGeminiGeminiGcpEnablementSettingTimeouts <a name="GoogleGeminiGeminiGcpEnablementSettingTimeouts" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGeminiGeminiGcpEnablementSettingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#create GoogleGeminiGeminiGcpEnablementSetting#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#delete GoogleGeminiGeminiGcpEnablementSetting#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#update GoogleGeminiGeminiGcpEnablementSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#create GoogleGeminiGeminiGcpEnablementSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#delete GoogleGeminiGeminiGcpEnablementSetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#update GoogleGeminiGeminiGcpEnablementSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference <a name="GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



