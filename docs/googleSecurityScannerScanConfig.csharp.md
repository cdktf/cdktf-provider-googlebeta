# `googleSecurityScannerScanConfig` Submodule <a name="`googleSecurityScannerScanConfig` Submodule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecurityScannerScanConfig <a name="GoogleSecurityScannerScanConfig" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config google_security_scanner_scan_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecurityScannerScanConfig(Construct Scope, string Id, GoogleSecurityScannerScanConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig">GoogleSecurityScannerScanConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig">GoogleSecurityScannerScanConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetAuthentication">ResetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetBlacklistPatterns">ResetBlacklistPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetExportToSecurityCommandCenter">ResetExportToSecurityCommandCenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetMaxQps">ResetMaxQps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetTargetPlatforms">ResetTargetPlatforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetUserAgent">ResetUserAgent</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putAuthentication"></a>

```csharp
private void PutAuthentication(GoogleSecurityScannerScanConfigAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putSchedule"></a>

```csharp
private void PutSchedule(GoogleSecurityScannerScanConfigSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleSecurityScannerScanConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts">GoogleSecurityScannerScanConfigTimeouts</a>

---

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetAuthentication"></a>

```csharp
private void ResetAuthentication()
```

##### `ResetBlacklistPatterns` <a name="ResetBlacklistPatterns" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetBlacklistPatterns"></a>

```csharp
private void ResetBlacklistPatterns()
```

##### `ResetExportToSecurityCommandCenter` <a name="ResetExportToSecurityCommandCenter" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetExportToSecurityCommandCenter"></a>

```csharp
private void ResetExportToSecurityCommandCenter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxQps` <a name="ResetMaxQps" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetMaxQps"></a>

```csharp
private void ResetMaxQps()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetTargetPlatforms` <a name="ResetTargetPlatforms" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetTargetPlatforms"></a>

```csharp
private void ResetTargetPlatforms()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserAgent` <a name="ResetUserAgent" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetUserAgent"></a>

```csharp
private void ResetUserAgent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSecurityScannerScanConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecurityScannerScanConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecurityScannerScanConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecurityScannerScanConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecurityScannerScanConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleSecurityScannerScanConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSecurityScannerScanConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSecurityScannerScanConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSecurityScannerScanConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference">GoogleSecurityScannerScanConfigAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference">GoogleSecurityScannerScanConfigScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference">GoogleSecurityScannerScanConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.authenticationInput">AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.blacklistPatternsInput">BlacklistPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.exportToSecurityCommandCenterInput">ExportToSecurityCommandCenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.maxQpsInput">MaxQpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.startingUrlsInput">StartingUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.targetPlatformsInput">TargetPlatformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.userAgentInput">UserAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.blacklistPatterns">BlacklistPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.exportToSecurityCommandCenter">ExportToSecurityCommandCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.maxQps">MaxQps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.startingUrls">StartingUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.targetPlatforms">TargetPlatforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.userAgent">UserAgent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.authentication"></a>

```csharp
public GoogleSecurityScannerScanConfigAuthenticationOutputReference Authentication { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference">GoogleSecurityScannerScanConfigAuthenticationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.schedule"></a>

```csharp
public GoogleSecurityScannerScanConfigScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference">GoogleSecurityScannerScanConfigScheduleOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.timeouts"></a>

```csharp
public GoogleSecurityScannerScanConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference">GoogleSecurityScannerScanConfigTimeoutsOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.authenticationInput"></a>

```csharp
public GoogleSecurityScannerScanConfigAuthentication AuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a>

---

##### `BlacklistPatternsInput`<sup>Optional</sup> <a name="BlacklistPatternsInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.blacklistPatternsInput"></a>

```csharp
public string[] BlacklistPatternsInput { get; }
```

- *Type:* string[]

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExportToSecurityCommandCenterInput`<sup>Optional</sup> <a name="ExportToSecurityCommandCenterInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.exportToSecurityCommandCenterInput"></a>

```csharp
public string ExportToSecurityCommandCenterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxQpsInput`<sup>Optional</sup> <a name="MaxQpsInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.maxQpsInput"></a>

```csharp
public double MaxQpsInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.scheduleInput"></a>

```csharp
public GoogleSecurityScannerScanConfigSchedule ScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a>

---

##### `StartingUrlsInput`<sup>Optional</sup> <a name="StartingUrlsInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.startingUrlsInput"></a>

```csharp
public string[] StartingUrlsInput { get; }
```

- *Type:* string[]

---

##### `TargetPlatformsInput`<sup>Optional</sup> <a name="TargetPlatformsInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.targetPlatformsInput"></a>

```csharp
public string[] TargetPlatformsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserAgentInput`<sup>Optional</sup> <a name="UserAgentInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.userAgentInput"></a>

```csharp
public string UserAgentInput { get; }
```

- *Type:* string

---

##### `BlacklistPatterns`<sup>Required</sup> <a name="BlacklistPatterns" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.blacklistPatterns"></a>

```csharp
public string[] BlacklistPatterns { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExportToSecurityCommandCenter`<sup>Required</sup> <a name="ExportToSecurityCommandCenter" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.exportToSecurityCommandCenter"></a>

```csharp
public string ExportToSecurityCommandCenter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxQps`<sup>Required</sup> <a name="MaxQps" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.maxQps"></a>

```csharp
public double MaxQps { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `StartingUrls`<sup>Required</sup> <a name="StartingUrls" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.startingUrls"></a>

```csharp
public string[] StartingUrls { get; }
```

- *Type:* string[]

---

##### `TargetPlatforms`<sup>Required</sup> <a name="TargetPlatforms" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.targetPlatforms"></a>

```csharp
public string[] TargetPlatforms { get; }
```

- *Type:* string[]

---

##### `UserAgent`<sup>Required</sup> <a name="UserAgent" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.userAgent"></a>

```csharp
public string UserAgent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecurityScannerScanConfigAuthentication <a name="GoogleSecurityScannerScanConfigAuthentication" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecurityScannerScanConfigAuthentication {
    GoogleSecurityScannerScanConfigAuthenticationCustomAccount CustomAccount = null,
    GoogleSecurityScannerScanConfigAuthenticationGoogleAccount GoogleAccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication.property.customAccount">CustomAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a></code> | custom_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication.property.googleAccount">GoogleAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a></code> | google_account block. |

---

##### `CustomAccount`<sup>Optional</sup> <a name="CustomAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication.property.customAccount"></a>

```csharp
public GoogleSecurityScannerScanConfigAuthenticationCustomAccount CustomAccount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a>

custom_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#custom_account GoogleSecurityScannerScanConfig#custom_account}

---

##### `GoogleAccount`<sup>Optional</sup> <a name="GoogleAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication.property.googleAccount"></a>

```csharp
public GoogleSecurityScannerScanConfigAuthenticationGoogleAccount GoogleAccount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a>

google_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#google_account GoogleSecurityScannerScanConfig#google_account}

---

### GoogleSecurityScannerScanConfigAuthenticationCustomAccount <a name="GoogleSecurityScannerScanConfigAuthenticationCustomAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecurityScannerScanConfigAuthenticationCustomAccount {
    string LoginUrl,
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.property.loginUrl">LoginUrl</a></code> | <code>string</code> | The login form URL of the website. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.property.password">Password</a></code> | <code>string</code> | The password of the custom account. The credential is stored encrypted in GCP. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.property.username">Username</a></code> | <code>string</code> | The user name of the custom account. |

---

##### `LoginUrl`<sup>Required</sup> <a name="LoginUrl" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.property.loginUrl"></a>

```csharp
public string LoginUrl { get; set; }
```

- *Type:* string

The login form URL of the website.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#login_url GoogleSecurityScannerScanConfig#login_url}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password of the custom account. The credential is stored encrypted in GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#password GoogleSecurityScannerScanConfig#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The user name of the custom account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#username GoogleSecurityScannerScanConfig#username}

---

### GoogleSecurityScannerScanConfigAuthenticationGoogleAccount <a name="GoogleSecurityScannerScanConfigAuthenticationGoogleAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecurityScannerScanConfigAuthenticationGoogleAccount {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount.property.password">Password</a></code> | <code>string</code> | The password of the Google account. The credential is stored encrypted in GCP. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount.property.username">Username</a></code> | <code>string</code> | The user name of the Google account. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password of the Google account. The credential is stored encrypted in GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#password GoogleSecurityScannerScanConfig#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The user name of the Google account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#username GoogleSecurityScannerScanConfig#username}

---

### GoogleSecurityScannerScanConfigConfig <a name="GoogleSecurityScannerScanConfigConfig" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecurityScannerScanConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string[] StartingUrls,
    GoogleSecurityScannerScanConfigAuthentication Authentication = null,
    string[] BlacklistPatterns = null,
    string ExportToSecurityCommandCenter = null,
    string Id = null,
    double MaxQps = null,
    string Project = null,
    GoogleSecurityScannerScanConfigSchedule Schedule = null,
    string[] TargetPlatforms = null,
    GoogleSecurityScannerScanConfigTimeouts Timeouts = null,
    string UserAgent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The user provider display name of the ScanConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.startingUrls">StartingUrls</a></code> | <code>string[]</code> | The starting URLs from which the scanner finds site pages. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.blacklistPatterns">BlacklistPatterns</a></code> | <code>string[]</code> | The blacklist URL patterns as described in https://cloud.google.com/security-scanner/docs/excluded-urls. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.exportToSecurityCommandCenter">ExportToSecurityCommandCenter</a></code> | <code>string</code> | Controls export of scan configurations and results to Cloud Security Command Center. Default value: "ENABLED" Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#id GoogleSecurityScannerScanConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.maxQps">MaxQps</a></code> | <code>double</code> | The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively. Defaults to 15. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#project GoogleSecurityScannerScanConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.targetPlatforms">TargetPlatforms</a></code> | <code>string[]</code> | Set of Cloud Platforms targeted by the scan. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts">GoogleSecurityScannerScanConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.userAgent">UserAgent</a></code> | <code>string</code> | Type of the user agents used for scanning Default value: "CHROME_LINUX" Possible values: ["USER_AGENT_UNSPECIFIED", "CHROME_LINUX", "CHROME_ANDROID", "SAFARI_IPHONE"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The user provider display name of the ScanConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#display_name GoogleSecurityScannerScanConfig#display_name}

---

##### `StartingUrls`<sup>Required</sup> <a name="StartingUrls" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.startingUrls"></a>

```csharp
public string[] StartingUrls { get; set; }
```

- *Type:* string[]

The starting URLs from which the scanner finds site pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#starting_urls GoogleSecurityScannerScanConfig#starting_urls}

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.authentication"></a>

```csharp
public GoogleSecurityScannerScanConfigAuthentication Authentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#authentication GoogleSecurityScannerScanConfig#authentication}

---

##### `BlacklistPatterns`<sup>Optional</sup> <a name="BlacklistPatterns" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.blacklistPatterns"></a>

```csharp
public string[] BlacklistPatterns { get; set; }
```

- *Type:* string[]

The blacklist URL patterns as described in https://cloud.google.com/security-scanner/docs/excluded-urls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#blacklist_patterns GoogleSecurityScannerScanConfig#blacklist_patterns}

---

##### `ExportToSecurityCommandCenter`<sup>Optional</sup> <a name="ExportToSecurityCommandCenter" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.exportToSecurityCommandCenter"></a>

```csharp
public string ExportToSecurityCommandCenter { get; set; }
```

- *Type:* string

Controls export of scan configurations and results to Cloud Security Command Center. Default value: "ENABLED" Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#export_to_security_command_center GoogleSecurityScannerScanConfig#export_to_security_command_center}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#id GoogleSecurityScannerScanConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxQps`<sup>Optional</sup> <a name="MaxQps" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.maxQps"></a>

```csharp
public double MaxQps { get; set; }
```

- *Type:* double

The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively. Defaults to 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#max_qps GoogleSecurityScannerScanConfig#max_qps}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#project GoogleSecurityScannerScanConfig#project}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.schedule"></a>

```csharp
public GoogleSecurityScannerScanConfigSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#schedule GoogleSecurityScannerScanConfig#schedule}

---

##### `TargetPlatforms`<sup>Optional</sup> <a name="TargetPlatforms" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.targetPlatforms"></a>

```csharp
public string[] TargetPlatforms { get; set; }
```

- *Type:* string[]

Set of Cloud Platforms targeted by the scan.

If empty, APP_ENGINE will be used as a default. Possible values: ["APP_ENGINE", "COMPUTE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#target_platforms GoogleSecurityScannerScanConfig#target_platforms}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.timeouts"></a>

```csharp
public GoogleSecurityScannerScanConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts">GoogleSecurityScannerScanConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#timeouts GoogleSecurityScannerScanConfig#timeouts}

---

##### `UserAgent`<sup>Optional</sup> <a name="UserAgent" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.userAgent"></a>

```csharp
public string UserAgent { get; set; }
```

- *Type:* string

Type of the user agents used for scanning Default value: "CHROME_LINUX" Possible values: ["USER_AGENT_UNSPECIFIED", "CHROME_LINUX", "CHROME_ANDROID", "SAFARI_IPHONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#user_agent GoogleSecurityScannerScanConfig#user_agent}

---

### GoogleSecurityScannerScanConfigSchedule <a name="GoogleSecurityScannerScanConfigSchedule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecurityScannerScanConfigSchedule {
    double IntervalDurationDays,
    string ScheduleTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule.property.intervalDurationDays">IntervalDurationDays</a></code> | <code>double</code> | The duration of time between executions in days. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule.property.scheduleTime">ScheduleTime</a></code> | <code>string</code> | A timestamp indicates when the next run will be scheduled. |

---

##### `IntervalDurationDays`<sup>Required</sup> <a name="IntervalDurationDays" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule.property.intervalDurationDays"></a>

```csharp
public double IntervalDurationDays { get; set; }
```

- *Type:* double

The duration of time between executions in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#interval_duration_days GoogleSecurityScannerScanConfig#interval_duration_days}

---

##### `ScheduleTime`<sup>Optional</sup> <a name="ScheduleTime" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule.property.scheduleTime"></a>

```csharp
public string ScheduleTime { get; set; }
```

- *Type:* string

A timestamp indicates when the next run will be scheduled.

The value is refreshed
by the server after each run. If unspecified, it will default to current server time,
which means the scan will be scheduled to start immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#schedule_time GoogleSecurityScannerScanConfig#schedule_time}

---

### GoogleSecurityScannerScanConfigTimeouts <a name="GoogleSecurityScannerScanConfigTimeouts" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecurityScannerScanConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#create GoogleSecurityScannerScanConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#delete GoogleSecurityScannerScanConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#update GoogleSecurityScannerScanConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#create GoogleSecurityScannerScanConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#delete GoogleSecurityScannerScanConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_security_scanner_scan_config#update GoogleSecurityScannerScanConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference <a name="GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.loginUrlInput">LoginUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.loginUrl">LoginUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoginUrlInput`<sup>Optional</sup> <a name="LoginUrlInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.loginUrlInput"></a>

```csharp
public string LoginUrlInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `LoginUrl`<sup>Required</sup> <a name="LoginUrl" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.loginUrl"></a>

```csharp
public string LoginUrl { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.internalValue"></a>

```csharp
public GoogleSecurityScannerScanConfigAuthenticationCustomAccount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a>

---


### GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference <a name="GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.internalValue"></a>

```csharp
public GoogleSecurityScannerScanConfigAuthenticationGoogleAccount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a>

---


### GoogleSecurityScannerScanConfigAuthenticationOutputReference <a name="GoogleSecurityScannerScanConfigAuthenticationOutputReference" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecurityScannerScanConfigAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putCustomAccount">PutCustomAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putGoogleAccount">PutGoogleAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resetCustomAccount">ResetCustomAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resetGoogleAccount">ResetGoogleAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomAccount` <a name="PutCustomAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putCustomAccount"></a>

```csharp
private void PutCustomAccount(GoogleSecurityScannerScanConfigAuthenticationCustomAccount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putCustomAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a>

---

##### `PutGoogleAccount` <a name="PutGoogleAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putGoogleAccount"></a>

```csharp
private void PutGoogleAccount(GoogleSecurityScannerScanConfigAuthenticationGoogleAccount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putGoogleAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a>

---

##### `ResetCustomAccount` <a name="ResetCustomAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resetCustomAccount"></a>

```csharp
private void ResetCustomAccount()
```

##### `ResetGoogleAccount` <a name="ResetGoogleAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resetGoogleAccount"></a>

```csharp
private void ResetGoogleAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.customAccount">CustomAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference">GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.googleAccount">GoogleAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference">GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.customAccountInput">CustomAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.googleAccountInput">GoogleAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomAccount`<sup>Required</sup> <a name="CustomAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.customAccount"></a>

```csharp
public GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference CustomAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference">GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference</a>

---

##### `GoogleAccount`<sup>Required</sup> <a name="GoogleAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.googleAccount"></a>

```csharp
public GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference GoogleAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference">GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference</a>

---

##### `CustomAccountInput`<sup>Optional</sup> <a name="CustomAccountInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.customAccountInput"></a>

```csharp
public GoogleSecurityScannerScanConfigAuthenticationCustomAccount CustomAccountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a>

---

##### `GoogleAccountInput`<sup>Optional</sup> <a name="GoogleAccountInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.googleAccountInput"></a>

```csharp
public GoogleSecurityScannerScanConfigAuthenticationGoogleAccount GoogleAccountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.internalValue"></a>

```csharp
public GoogleSecurityScannerScanConfigAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a>

---


### GoogleSecurityScannerScanConfigScheduleOutputReference <a name="GoogleSecurityScannerScanConfigScheduleOutputReference" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecurityScannerScanConfigScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.resetScheduleTime">ResetScheduleTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScheduleTime` <a name="ResetScheduleTime" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.resetScheduleTime"></a>

```csharp
private void ResetScheduleTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.intervalDurationDaysInput">IntervalDurationDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.scheduleTimeInput">ScheduleTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.intervalDurationDays">IntervalDurationDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.scheduleTime">ScheduleTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalDurationDaysInput`<sup>Optional</sup> <a name="IntervalDurationDaysInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.intervalDurationDaysInput"></a>

```csharp
public double IntervalDurationDaysInput { get; }
```

- *Type:* double

---

##### `ScheduleTimeInput`<sup>Optional</sup> <a name="ScheduleTimeInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.scheduleTimeInput"></a>

```csharp
public string ScheduleTimeInput { get; }
```

- *Type:* string

---

##### `IntervalDurationDays`<sup>Required</sup> <a name="IntervalDurationDays" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.intervalDurationDays"></a>

```csharp
public double IntervalDurationDays { get; }
```

- *Type:* double

---

##### `ScheduleTime`<sup>Required</sup> <a name="ScheduleTime" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.scheduleTime"></a>

```csharp
public string ScheduleTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.internalValue"></a>

```csharp
public GoogleSecurityScannerScanConfigSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a>

---


### GoogleSecurityScannerScanConfigTimeoutsOutputReference <a name="GoogleSecurityScannerScanConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecurityScannerScanConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



